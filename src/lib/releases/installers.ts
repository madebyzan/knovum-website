import { site } from "@/config/site";

import { ReleaseError } from "./errors";

/**
 * The installers every release carries, exactly as the app's release workflow
 * (`.github/workflows/release-candidate.yml`) builds them: a DMG for each Mac architecture and an NSIS
 * installer for Windows. Tauri names them `Knovum_<version>_aarch64.dmg`, `Knovum_<version>_x64.dmg` and
 * `Knovum_<version>_x64-setup.exe`. Updater artifacts in the same release are never offered.
 */
const INSTALLER_KINDS = ["macos-arm64", "macos-x64", "windows-x64"] as const;

export type InstallerKind = (typeof INSTALLER_KINDS)[number];

const SUFFIXES: Readonly<Record<InstallerKind, string>> = {
  "macos-arm64": "_aarch64.dmg",
  "macos-x64": "_x64.dmg",
  "windows-x64": "_x64-setup.exe",
};

/** The platforms a visitor chooses between, in the order shown. */
export const PLATFORM_NAMES = ["macos", "windows"] as const;

export type Platform = (typeof PLATFORM_NAMES)[number];

/** The installers each platform offers, the most common machine first. */
export const PLATFORMS: Readonly<Record<Platform, readonly InstallerKind[]>> = {
  macos: ["macos-arm64", "macos-x64"],
  windows: ["windows-x64"],
};

export interface ReleaseAsset {
  readonly name: string;
  readonly url: string;
  /** In bytes. */
  readonly size: number;
}

interface Installer {
  readonly url: string;
  /** In bytes. */
  readonly size: number;
  /** The file's format, as a visitor recognises it. */
  readonly format: "DMG" | "EXE";
}

export type Installers = Readonly<Record<InstallerKind, Installer>>;

/** The file name the release workflow gives an installer of `kind` for `version`. */
export function installerFileName(version: string, kind: InstallerKind): string {
  return `${site.name}_${version}${SUFFIXES[kind]}`;
}

/**
 * Every installer of a release, by kind. A release without all of them is incomplete; it fails the
 * build rather than reach visitors with a platform missing.
 */
export function selectInstallers(version: string, assets: readonly ReleaseAsset[]): Installers {
  const byName = new Map(assets.map((asset) => [asset.name, asset]));
  const entries = INSTALLER_KINDS.map((kind) => {
    const name = installerFileName(version, kind);
    const asset = byName.get(name);
    if (!asset) throw new ReleaseError(`Release ${version} has no ${name}.`);
    return [
      kind,
      { url: asset.url, size: asset.size, format: name.endsWith(".dmg") ? "DMG" : "EXE" },
    ] as const;
  });
  return Object.fromEntries(entries) as Record<InstallerKind, Installer>;
}

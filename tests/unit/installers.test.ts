import { describe, expect, it } from "vitest";

import { ReleaseError } from "@/lib/releases/errors";
import { installerFileName, selectInstallers, type ReleaseAsset } from "@/lib/releases/installers";

const asset = (name: string, size = 100): ReleaseAsset => ({
  name,
  url: `https://example.com/${name}`,
  size,
});

const complete = [
  asset("Knovum_1.2.0_aarch64.dmg", 3),
  asset("Knovum_1.2.0_x64.dmg", 2),
  asset("Knovum_1.2.0_x64-setup.exe", 1),
];

describe("selectInstallers", () => {
  it("finds each installer by the name the release workflow gives it", () => {
    expect(selectInstallers("1.2.0", complete)).toEqual({
      "macos-arm64": { url: "https://example.com/Knovum_1.2.0_aarch64.dmg", size: 3, format: "DMG" },
      "macos-x64": { url: "https://example.com/Knovum_1.2.0_x64.dmg", size: 2, format: "DMG" },
      "windows-x64": { url: "https://example.com/Knovum_1.2.0_x64-setup.exe", size: 1, format: "EXE" },
    });
  });

  it("never offers updater artifacts", () => {
    const installers = selectInstallers("1.2.0", [
      ...complete,
      asset("Knovum_aarch64.app.tar.gz"),
      asset("Knovum_aarch64.app.tar.gz.sig"),
      asset("latest.json"),
    ]);
    expect(Object.values(installers).map((installer) => installer.url)).not.toContain(
      expect.stringMatching(/tar\.gz|\.sig|latest\.json/u),
    );
  });

  it("fails a release with a platform missing", () => {
    expect(() => selectInstallers("1.2.0", complete.slice(0, 2))).toThrow(ReleaseError);
    expect(() => selectInstallers("1.2.0", complete.slice(0, 2))).toThrow("Knovum_1.2.0_x64-setup.exe");
  });

  it("fails installers built for a different version than the release", () => {
    expect(() => selectInstallers("1.3.0", complete)).toThrow(ReleaseError);
  });
});

describe("installerFileName", () => {
  it("follows Tauri's bundle naming", () => {
    expect(installerFileName("0.0.1", "macos-arm64")).toBe("Knovum_0.0.1_aarch64.dmg");
    expect(installerFileName("0.0.1", "windows-x64")).toBe("Knovum_0.0.1_x64-setup.exe");
  });
});

---
title: Install Knovum
description: Choose the correct installer and understand what happens on first use.
---

## Choose your build

| Computer               | Required system                                | Build             |
| ---------------------- | ---------------------------------------------- | ----------------- |
| Mac with Apple silicon | macOS 14 or later                              | Apple silicon DMG |
| Intel Mac              | macOS 14 or later                              | Intel DMG         |
| Windows PC             | Windows 10 version 2004 / build 19041 or later | x64 installer     |

Linux and Windows on ARM are not supported release targets. On a Mac, use **About This Mac** to identify the chip.

## Install

Download from the official Knovum website or the [product releases](https://github.com/madebyzan/knovum/releases).

- **macOS:** open the DMG, drag Knovum to Applications, then launch the installed application.
- **Windows:** run the x64 setup executable and follow the installer.

If the operating system reports an unverified or damaged package, stop and verify the download source. Do not disable system protections as a normal installation step.

## First use

Opening a Space or writing a note does not require a provider key. Local models are not all downloaded during installation. Starting a capability that requires a missing model prepares it and shows progress in Task Center. Initial preparation needs a network connection and disk space; subsequent inference uses installed models locally.

An application update is separate from your library. Export important Spaces before moving between computers or changing an installation you rely on.

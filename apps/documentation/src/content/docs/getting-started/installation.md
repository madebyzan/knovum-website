---
title: Install Knovum
description: Pick the right installer, and what happens the first time you open the app.
---

## Choose an installer

| Computer          | Requirement                              | Installer         |
| ----------------- | ---------------------------------------- | ----------------- |
| Apple silicon Mac | macOS 14 or later                        | Apple silicon DMG |
| Intel Mac         | macOS 14 or later                        | Intel DMG         |
| Windows PC        | Windows 10 version 2004 (19041) or later | x64 installer     |

Not sure which chip your Mac has? Open the Apple menu, choose **About This Mac** and look at **Chip**. Linux and Windows on ARM are not supported yet.

## Install

Download the installer from the Knovum website (**Website** at the top right of this page) or from the [GitHub releases page](https://github.com/madebyzan/knovum/releases).

- **macOS**: open the DMG, drag Knovum into **Applications**, then start it from **Applications**.
- **Windows**: run the x64 installer and follow the wizard.

:::caution[The installer is reported as damaged or unverified]
Stop and download it again from the official sources above. Do not turn off Gatekeeper or SmartScreen to get it installed.
:::

## The first launch

You can create Spaces, write notes, import sources and search straight away, without any AI account. Local models are not downloaded with the installer: the first time you use transcription, semantic search or a similar feature, Knovum downloads the model it needs and shows the progress in the **Tasks** panel. That step needs a network connection and some disk space; afterwards the model runs on your computer.

To have Knovum answer questions and generate documents, set up an [AI provider](../../guides/providers/) or a [desktop Agent](../../guides/agents/).

## Updates

Knovum checks for updates when it starts and every six hours after that. When a new version is available, you can read the release notes before deciding to download it. The update package's signature is verified, and the update is installed when you confirm the restart. Updates never touch your library.

## Next

[Your first Space](../first-space/): the whole path from sources to a conclusion, in ten minutes.

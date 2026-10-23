---
title: Manage local models
description: Which features use local models, when they download, and how to pick the right version for your computer.
---

Transcription, semantic search, image processing and speech synthesis use local models on your computer. They aren't downloaded with the app; each is prepared the first time you use a feature that needs it. Once downloaded, those features work offline and your material never leaves the machine.

## Where to manage them

Press <kbd>⌘/Ctrl</kbd> + <kbd>,</kbd> and go to **Intelligence → Local models**. Models are grouped under **Knowledge retrieval**, **Audio and speech** and **Images**, each with its purpose, file size and download status. You can search by model or feature, and filter by **Downloaded** or **Not downloaded**.

| Feature               | Models                                                                |
| --------------------- | --------------------------------------------------------------------- |
| Semantic search       | Qwen3 Embedding (fixed, used by the existing index)                   |
| Transcription         | Whisper Tiny, Small, Large V3                                         |
| Alignment             | Qwen3 Aligner and its quantized version, up to five minutes at a time |
| Speakers              | Sherpa, light and full precision                                      |
| Stem separation       | Spleeter, light and full precision; audio up to ten minutes           |
| Speech synthesis      | MOSS-TTS-Nano, VoxCPM2 and its quantized version                      |
| Background removal    | U²-Net, light and full                                                |
| Image upscaling       | Real-ESRGAN, light and full                                           |
| Repair selected areas | MI-GAN                                                                |
| Smart selection       | EfficientSAM Ti, S                                                    |
| Relative depth        | Depth Anything V2 Small and its quantized version                     |

## Choose a default

When a feature has several models, choose **Set as default** to make one the **Default for new operations**. In general, light versions are faster and smaller; full versions are more accurate and take longer.

Changing the default affects only new operations. Queued tasks, finished results and existing speech projects keep their original choice.

## Download and remove

- The first time you use a feature, its model downloads automatically, with progress in the **Tasks** panel. Files are verified after download, and a model is used only once verification passes.
- To prepare in advance, choose **Download** in the list.
- **Remove** models you rarely use to free disk space. Content you already generated is kept, and the model downloads again next time.
- If you see **Verification failed; download again**, choose **Download again**. Don't replace model files by hand.

## What your computer needs

- Core features need no dedicated graphics card. Apple silicon Macs use Metal to accelerate transcription and semantic search; other computers use the CPU.
- Voice cloning and design with VoxCPM2 need at least 32 GiB of memory. With less, use MOSS-TTS-Nano.
- Several large tasks at once run more slowly. When resources are tight, let other heavy tasks finish first or switch to a light model.

## On a new computer

Models aren't included in Space packages or library backups. On a new computer they download again the first time they're needed.

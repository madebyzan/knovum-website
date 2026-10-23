---
title: Speech and audiobooks
description: Read scripts aloud on your computer with preset, cloned or designed voices, and produce audiobooks and voice-overs.
---

Speech synthesis in Knovum runs on your computer. Use a preset voice, clone a voice from a recording, or design a new one from a description, then turn a script into speech or a whole audiobook.

## Prepare a voice

Voices live in **Settings → Voice management** and are available in every Space. Choose **Add voice**, then pick a **Voice source**:

| Source                   | How it works                                                                  |
| ------------------------ | ----------------------------------------------------------------------------- |
| **Preset voice**         | Pick one of the built-in voices                                               |
| **Clone from reference** | Choose 5–30 seconds of clear speech from one person; Knovum learns that voice |
| **Design a voice**       | Describe timbre, delivery, apparent age and tone to generate a new voice      |

When cloning, fill in **Reference transcript (optional)** and confirm **The transcript matches the recording** for steadier results.

You must listen to a candidate voice all the way through before saving it. The preview text includes dates and numbers by default, which is exactly what reveals unclear pronunciation or uneven pacing.

:::caution[Use only voices you have the right to use]
Get the person's consent before cloning someone else's voice.
:::

### Speech models

| Model               | Notes                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| MOSS-TTS-Nano       | Light Chinese and English; preset voices and reference cloning; CPU only, at normal speaking speed |
| VoxCPM2             | Cloning and voice design at full precision; needs at least 32 GiB of memory                        |
| VoxCPM2 (quantized) | Smaller download and disk footprint; still needs at least 32 GiB of memory                         |

The chosen model downloads automatically on first use, with progress in the **Tasks** panel.

### Voice revisions

Change a voice with **New revision**; earlier revisions stay in **Revision history**. Existing projects keep the revision they were made with, so editing a voice never changes them. Voices you no longer use can be archived; an archived voice can be deleted permanently only when no project uses it.

## Turn a script into speech

Select a text or Markdown resource and choose **Generate speech**. In the project, review the **Script**, choose a voice, **Preview** a passage, and generate when it sounds right.

## Make an audiobook

1. Select the script and create an **Audiobook** project, or use **Import node manuscript**.
2. Fill in title, author, narrator and cover under **Book details**.
3. Organize by chapter with **Add chapter** and **Add paragraph**, moving items up or down to reorder.
4. In **Role voices**, choose a voice for each role; unassigned paragraphs use the **Narrator**.
5. Open the **Pronunciation dictionary** and give exact readings for names and proper nouns.
6. Set **Paragraph pause (ms)** and **Chapter pause (ms)**. For a particular tone, add a **Delivery instruction**.
7. Under **Output settings**, choose format, sample rate and loudness. To embed the cover, use MP3 or M4B.
8. Preview representative paragraphs, especially names and numbers, then **Generate audiobook**.

Generation runs in the background; follow or cancel it in the **Tasks** panel.

## Check the result

**Inspect audio signal** scans the generated audio and marks silence, low or high levels, and peaks close to clipping. These are only places to review: deliberate pauses can be flagged too, and it doesn't judge how natural the voice sounds. Listening all the way through is what counts.

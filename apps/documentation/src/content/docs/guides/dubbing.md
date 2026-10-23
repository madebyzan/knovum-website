---
title: Dubbing and stem separation
description: Dub a video into another language, or split vocals from the background, all on your computer.
---

## Separate vocals and background

Select audio or video and choose **Separate vocals and background**. When it finishes, two new audio resources appear on the canvas, **Vocals** and **Background**, and the original is unchanged.

- It uses the local Spleeter model; choose the light or full-precision version under **Stem separation** in **Settings → Local models**.
- Up to 10 minutes at a time.

Listen to both tracks. Separation is rarely perfect: some accompaniment can remain in the vocals, and some dialogue in the background.

## Dub a video

### 1. Prepare the script

Select a video and create a **Video dubbing** project. The script can come from:

- **Use source transcript**: the video's own transcript, each line with its original timing.
- **Import SRT / WebVTT script**: an existing subtitle file.
- Lines you add yourself with **Add timed line**, entering start and end times.

### 2. Translate

To change language, choose the **Translation language** and **Translation model**, then **Translate script**. The translation replaces each line and the original is kept underneath, so you can compare line by line. Check every line, especially names and terms. Translation needs an AI provider.

### 3. Choose voices

Choose a voice for each role from **Voice management**; see [Speech and audiobooks](../speech-projects/). Use **Play original interval** to compare with the original and confirm pace and tone.

### 4. Mix

Under **Audio mix**, decide what happens to the original sound:

- **Mute original audio**: remove it completely.
- **Background audio**: use the separated background to keep music and ambience.
- **Preserve original sound outside source dialogue intervals**: replace only where people speak.
- **Voice gain (dB)** and **Background gain (dB)**: balance the two.

### 5. Generate

Choose **Generate dubbed video** and follow the progress in the **Tasks** panel. The result is a new video; the original is unchanged.

To hand off to post-production, **Dubbing delivery** exports a dialogue WAV and a background WAV as separate stems. For one video carrying several languages, select up to eight dubbed versions of the same source and generate a **Video with multiple audio tracks**; the selection order is the track order.

## How timing works

Dubbed lines are placed in script order and never overlap each other. When a translation runs longer than the original line, Knovum speeds it up within an allowed range; if it still doesn't fit, the next line is pushed back slightly rather than cut off. Dubbing never runs past the end of the picture.

Subtitle time ranges are a target, not a guarantee for every line. Watch the whole result, paying attention to fast dialogue, pauses and the ending.

---
title: Transcribe recordings
description: Turn audio and video into text on your computer; once proofread, it can be searched, questioned and cited to the second.
---

Recordings and video can be searched and cited once they are transcribed. Transcription in Knovum runs entirely on your computer: it needs no AI account, and the recording never leaves the machine.

## Start a transcription

1. Put the audio or video in a Space, or add an **Audio note** and record on the spot.
2. Select it and choose **Transcribe**.
3. Follow the progress in the **Tasks** panel. When it finishes, the resource shows **Transcribed**.

The first transcription downloads the speech recognition model; later ones start right away.

## Choose a transcription model

Choose the default model under **Transcription** in **Settings → Local models**:

| Model            | Best for                                                   |
| ---------------- | ---------------------------------------------------------- |
| Whisper Tiny     | Fast and light; less accurate on difficult recordings      |
| Whisper Small    | A balance of speed and accuracy                            |
| Whisper Large V3 | Most accurate, for strong accents and dense jargon; slower |

Changing the default only affects future transcriptions. Finished transcripts stay as they are.

## Proofread

Open the recording and turn on **Follow playback** so the text scrolls with the audio. Click any line and playback jumps there.

When you find a mistake, fix it with **Edit transcript segment**. Names, product names and technical terms are worth checking most: they are the most often misheard and the most often cited. Transcribing again never silently overwrites your corrections.

## Sharper timing

Transcripts are timed by segment. For word-level timing, select a few segments and choose **Align selected**: up to 8 segments and 5 minutes at a time. Editing a segment invalidates its word timing; align it again.

## Who is speaking

In **Speaker tracks**, choose **Identify speakers**. If you know how many people spoke, enter it in **Known speaker count (optional)** for steadier results. Recordings up to two hours are supported.

## Chapters and summary

In the recording's **Media knowledge**, choose **Generate chapters & summary** to split it into chapters and summarize each one. This needs an AI provider or a desktop Agent, and sends only the transcript text, never the audio.

## Add subtitles

Once a video is transcribed, **Add subtitles** produces a new video with burned-in subtitles and leaves the original untouched. See [Edit video](../video-editing/).

:::caution[Recordings in more than one language]
Each recording is transcribed in the language detected at its start. If the language changes partway through, the later part may come out in the first language. Check bilingual meetings and interviews against the recording.
:::

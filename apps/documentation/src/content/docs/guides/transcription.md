---
title: Transcribe recordings
description: Prepare local speech models, inspect timestamps and preserve manual edits.
---

## Start from owned media

Import an audio/video file or record an Audio Note. Start transcription for that resource. The first request prepares the required local Whisper resources and reports progress in Task Center. Plain transcription does not use a generative provider key and does not send media to that provider.

## Review and correct

Transcript segments retain source timestamps. Select a segment to seek the recording. Check names, jargon and uncertain phrases against the audio before relying on them as evidence.

Editing a segment advances its revision and invalidates that segment’s previous word timing. Existing current-source transcripts, including manual edits, are not silently replaced by a routine transcription retry. Optional summary and chapter generation is a separate explicit AI operation over transcript text.

## Optional enrichment

- **Speaker diarization:** separate optional processing; media up to two hours, automatic speaker count or a known count from 1 to 32.
- **Selected alignment:** optional word/character timing refinement for at most eight segments and 300 seconds.
- **Subtitles:** use current transcript cues; check wording and timing before creating the separate subtitled output.

## Language limitation

Transcription currently detects one language from the first speech window. Mixed-language media may render later passages into that language rather than preserve each original language. Do not assume a multilingual recording produces a faithful bilingual transcript.

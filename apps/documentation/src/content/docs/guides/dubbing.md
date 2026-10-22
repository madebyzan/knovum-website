---
title: Dub and separate audio
description: Review a timed script and control which background reaches the output.
---

## Separate before mixing if needed

On an audio/video source, source separation publishes vocals and background as two ordinary audio nodes with source relations. It uses the selected local Spleeter model and does not alter the original. Play each stem to inspect leakage; there is no promise that every dialogue sound is removed or every environmental sound preserved.

## Prepare dubbing

Open dubbing from the selected video; it resumes the latest project for that resource/operation. Prepare the timed script before generation. Translation commits the source script revision and returns translated lines for review. Choose voices and the available background/mute configuration explicitly.

Audition lines, correct translation and verify names. Generation and editing are gated while the matching translation result is pending; late results from changed revisions are not applied as current.

## Timing expectations

Dialogue is placed in script order without summing speech onto itself. The system can compress a line within its supported fitting limit; longer speech may delay the next line rather than be cut simply to hit a subtitle interval. Nothing is heard past the end of the picture.

Inspect the whole rendered video, especially rapid dialogue, pauses and the end. Subtitle intervals are timing targets, not a guarantee that every synthesized line exactly fits them. A published background is a selectable input, not a guarantee of perfect dialogue removal.

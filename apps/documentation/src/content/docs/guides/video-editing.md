---
title: Edit video
description: Build a timeline, save the project and render a separate video.
---

## Open and arrange

Open the editing action on a video resource. The project starts with its source clip, dimensions and measured cadence when available. It has a video track, audio track and text overlays, plus transitions and output settings.

Trim source in/out points and arrange clips on the timeline. Adjust available transform, opacity, clip volume and fades. Text overlays have an explicit time range and style. Check that a transition joins the intended clips rather than hiding a missing interval.

## Save is different from render

Saving keeps the editable project. Rendering creates a new derived video with a source relationship; it does not overwrite the source file. Choose the available output size and frame rate deliberately. Preview timing, aspect ratio, text placement and sound before rendering.

Leaving dirty document/video/speech editors offers Save, Discard or Cancel. If saving fails, the draft remains available. Resources open in editing tabs cannot be deleted or moved across Spaces until those sessions are resolved.

## Subtitles and dubbing

The separate Add subtitles action burns current transcript cues into a derived video; if no transcript exists, it recognizes speech locally first. The original is unchanged and no API key is needed for ordinary recognition.

For translated voices or dialogue, use the dedicated dubbing project instead of assuming the video editor automatically translates speech. Inspect the resulting audio and every subtitle boundary before delivery.

---
title: Edit video
description: Cut on a timeline, add text and transitions, and render a new video while the original stays untouched.
---

Select a video and choose **Edit video** to open the **Video editor**. Your edit is saved as a project you can keep working on; rendering creates a new video, and the original is never changed.

## The editor

- **Library**: **Media**, **Text** and **Transitions**. **Import media** adds video, images or audio.
- **Frame**: the preview, which you can zoom in, zoom out or **Fit the frame**.
- **Timeline**: video, audio and text tracks.
- **Inspector**: settings for the selected clip.

## Cut clips

Drag media onto the timeline, then select a clip:

| Action           | How                                                              |
| ---------------- | ---------------------------------------------------------------- |
| Split            | Move the playhead to the spot and press <kbd>S</kbd>             |
| Trim             | Drag either end, or enter **In (seconds)** and **Out (seconds)** |
| Duplicate clip   | <kbd>⌘/Ctrl</kbd> + <kbd>D</kbd>                                 |
| Delete           | <kbd>Backspace</kbd>                                             |
| Close gap        | Pull the following clips forward                                 |
| Volume and fades | **Volume**, **Fade in (seconds)**, **Fade out (seconds)**        |

**Framing** decides how a clip sits in the frame: **Fit entire image** or **Fill frame**, plus **Scale**, **Rotation** and **Opacity**.

## Text and transitions

- **Text**: press <kbd>T</kbd> to **Add text**. Pick one of the **Presets** (Plain, Outline, Shadow, Box), then set font, weight, size and color; drag the text in the frame to position it.
- **Transitions**: drag a dissolve, fade through black or white, wipe or slide from **Transitions** between two clips and set **Duration (seconds)**. Transitions overlap the neighboring clips, so the project gets shorter.

## Preview and shortcuts

| Key                              | Action                |
| -------------------------------- | --------------------- |
| <kbd>Space</kbd>                 | Play / pause          |
| <kbd>←</kbd> / <kbd>→</kbd>      | Previous / next frame |
| <kbd>Home</kbd> / <kbd>End</kbd> | Go to start / end     |
| <kbd>⌘/Ctrl</kbd> + <kbd>S</kbd> | Save project          |
| <kbd>⌘/Ctrl</kbd> + <kbd>Z</kbd> | Undo                  |

## Render

1. In **Output settings**, choose **Frame size and resolution**, **Frame rate** and **Background**.
2. Preview once: timing, aspect ratio, text placement and sound.
3. Choose **Render video**; progress appears in the **Tasks** panel.

When rendering finishes, the new video appears on the canvas, linked to the original as its source.

:::note[Saving and rendering are different]
<kbd>⌘/Ctrl</kbd> + <kbd>S</kbd> saves the editable project; only rendering produces a video file. If you close the editor without saving, Knovum asks **Save changes to this video?**.
:::

## Subtitles and dubbing

- To add subtitles, you don't need the editor: select the video and choose **Add subtitles**. Without a transcript it first transcribes on your computer, then creates a new video with subtitles.
- To dub a video into another language, see [Dubbing and stem separation](../dubbing/).

---
title: Edit images
description: Crop and color, remove backgrounds, upscale and repair; most of it runs on your computer, and the original is always kept.
---

Select an image to edit it directly. Image operations in Knovum come in two kinds:

- **Edits**: crop, rotate and adjust color. They change this image; choose **Apply** to confirm.
- **Generations**: background removal, upscaling, repair, cut-outs, new views and relative depth. Each creates a new image next to the original, which stays unchanged.

## Crop, rotate and adjust

- **Crop**: crop freely, or use a preset ratio such as **Square**, **Story**, **Portrait** or **Landscape**. With **Lock crop aspect ratio** on, dragging keeps the shape.
- **Flip and rotate**: **Rotate clockwise**, **Flip horizontal**, **Flip vertical**, or enter a **Rotation angle**.
- **Adjust**: four groups of sliders: **Light** (exposure, contrast, highlights, shadows, whites, blacks), **Color** (saturation, vibrance, temperature, tint), **Texture** (sharpening, clarity, grain) and **Effects** (vignette, soft light, glow).

When you are happy, choose **Apply** to make one undoable edit. If you leave without applying, Knovum asks **Apply image changes?**. Exports use the applied result.

## Runs on your computer

These use local models. They download on first use, then work offline, and the image never leaves your computer:

| Operation             | What it does                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Remove background** | Removes the background and creates a new image with transparency                                              |
| **Upscale**           | Outputs a 2K, 4K or 8K version, good for small images and blurry screenshots                                  |
| **Select object**     | Click the subject, refine with **Exclude point**, **Draw a box** and **Refine with brush**; up to six prompts |
| **Cut out**           | Saves the selected object as its own image                                                                    |
| **Repair**            | Paint over what you don't want with the **Eraser**, then **Remove and generate** to fill it in                |
| **Relative depth**    | Generates a depth map, near parts brighter and far parts darker                                               |

A selection is temporary; a new image is created only when you choose **Cut out** or **Remove and fill**. Repair supports images up to 16 megapixels and 16,384 pixels on each side.

## Needs an AI provider

- **Repair by description**: in the **Eraser**, switch to **Describe** and write what to remove, such as “remove the watermark in the bottom right”.
- **New view**: adjust **Rotation**, **Tilt** and **Zoom** for the **Subject** or **Camera**, from **Wide angle** to **Close-up**, to generate the same scene from another angle.

Both need a model that supports image editing. Ordinary text models can't edit images; without a suitable model you'll see **Check the image model and credential settings**.

## Comment on an image

Use **Comment** to annotate an image: **Point comment**, **Region comment** or **Draw a comment**. Choose **Add to conversation** and the Agent receives the location and content of each mark, which is ideal for “make the boxed area blue”.

:::note[When you look at the result]
Upscaled and repaired details are reconstructed by AI. They work for presentation but don't prove the original contained them. A depth map shows relative distance and can't be used to measure real distances.
:::

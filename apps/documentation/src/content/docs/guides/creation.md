---
title: Create from selection
description: Select your sources, say what you need, and generate a document, image or video that remembers which sources it used.
---

When you create in Knovum, your material is whatever you select. The result is a new resource that remembers which sources it used; the originals are never changed.

## Generate a document, image or video

1. Select the material on the canvas: notes, web pages, transcribed recordings, images, up to 32 items.
2. Choose **Create from selection**.
3. Under **Create**, choose **Document**, **Image** or **Video**.
4. In **What do you need?**, say exactly what you want, for example “a two-page findings memo, one section per reason, each with the original quote”.
5. For images and video, set the **Aspect ratio**; for video, also the **Duration**. Choose **Create**.

Progress appears in the **Tasks** panel. When it finishes, the result lands on the canvas next to its material.

:::note[What it needs]
Documents need a model for text generation; images and video need models for image or video generation. Under **By feature** in **Settings → Feature Models**, you can assign separate models to **Image creation** and **Video creation**.
:::

## One-step actions

When you select a resource, Knovum offers actions that suit it. Common ones:

| Selection         | Actions                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------ |
| Sources, notes    | Generate document, Draft video script, social copy                                         |
| Meeting recording | Summarize meeting                                                                          |
| Image             | Remove background, Split layers, Upscale, repair, Cut out object, New view, Relative depth |
| Video             | Add subtitles                                                                              |

Background removal, upscaling, repair, cut-outs and relative depth use local models and run on your computer; see [Edit images](../image-editing/).

## Where a result came from

Select a generated resource and look in **Details**:

- **Source knowledge**: which sources, in which version, were used to generate it.
- **Citations · N**: the original passage behind each statement in a document.

If a source changes later, the result is not silently rewritten. Instead it notes that some sources changed after it was created, and you decide whether to regenerate from the new version.

Generated content needs checking like everything else: look at the details an image changed, and at each statement in a document against its source.

## Create with a desktop Agent

For more complex deliverables, such as a slide deck or a web page, hand the job to a desktop Agent:

1. Choose **Create with Agent**, describe what the Agent should create, and **Attach context** if needed. The current Space's knowledge is connected to the Agent automatically through MCP.
2. Choose **Run Agent**.
3. When it finishes, review the files, then **Import N files** into the Space or **Discard results**.

## When creation fails

A failed item stays on the canvas marked **Creation failed**; **Remove failed item** and try again. Knovum never quietly retries with another account or provider after a failure.

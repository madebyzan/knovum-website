---
title: Edit and transform images
description: Distinguish saved image edits from new AI-derived resources.
---

## Edit the same image

Select an image and open its contextual editing tools. Crop, rotate, flip and deterministic adjustments belong to the original node’s edit session. Preview the change, then Apply or Cancel. Applied edits are one history operation and resource export uses the current applied result.

## Produce a separate result

Background removal, upscaling, repair, smart-selection extraction and relative-depth estimation use local models and create derived resources. Text-described removal and multi-angle generation can use compatible explicitly chosen remote targets. The operation decides which execution targets are valid; a general text model is not automatically an image-edit model.

1. Select the source and the appropriate operation.
2. Set any required mask, points, rectangle or parameters.
3. Generate and watch preparation/execution progress.
4. Inspect the newly published resource and its source relation.

Successful derivations publish automatically; they do not need a second “add result” click. The original source remains available.

## Smart selection and depth

Points, exclusion points, a rectangle and brush additions are temporary selection state. Merely selecting does not create a new asset; Extract or Repair does.

Depth output is a 16-bit PNG containing relative inverse-depth values: brighter means nearer, not a measured distance. Preserve the original PNG. Treat it as analysis data, not a photo to color-adjust. Depth-based blur is not an available validated operation.

Check fine edges, hair and repaired details at useful magnification. AI reconstruction is not proof of what was originally present.

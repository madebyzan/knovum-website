---
title: Create from selection
description: Produce new resources without losing the input trail.
---

## Select inputs, then an intent

Select the relevant sources and use **Create from selection**. Available intents include document/image/video generation, background removal, layer splitting and subtitles. The actual choices depend on the selected resource and compatible execution targets.

A text-to-image model is not necessarily an image-edit model. Use the operation’s compatible choices rather than assuming every configured model supports every intent.

## Local and provider-backed work

Local image operations prepare their required models on demand. Image/video generation uses a compatible configured provider; some Agent tasks use an explicitly chosen external executor. An execution failure does not authorize switching to a different account or provider silently.

Watch Task Center or the Run surface for preparation, execution, review and failure. Cancellation does not mean every already committed output disappears; inspect the final operation state.

## Inspect the trail

A derived output is a separate resource. Its derivation records the action, input identities and revisions, execution identity and output. A source changing later does not silently rewrite the generated result.

Compare the output with the original, especially for generated statements or altered visual details. Exporting the output writes a file outside Knovum; it is not another derivation.

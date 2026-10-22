---
title: Manage local models
description: Understand preparation, resource requirements and frozen model choices.
---

## Prepare only what you use

Settings organizes built-in models by knowledge, audio and image capabilities. It shows download/installed sizes, preparation progress, verification and removal of idle optional resources. Starting a capability also prepares its required resource; you do not need to install every model first.

Preparation is not inference. A download may finish before verification or a task begins. Task Center distinguishes those phases. CPU/GPU choice is managed by the application; a failed GPU request is not silently retried on CPU or another model.

## Choose with the machine in mind

Core knowledge indexing does not require a discrete GPU. Apple silicon has supported Metal paths for embeddings and transcription; other supported targets use their admitted CPU paths. CUDA is not a shipped backend.

Optional VoxCPM2 voice work requires at least 32 GiB physical memory and adequate currently available memory. The alignment profiles also reserve significant memory. A smaller model download is not a measured promise of lower RAM or faster rendering. If admission fails, stop competing heavy work or choose an appropriate new operation rather than forcing the task.

## Changes affect new work

Changing a default selects the model for new requests. Queued jobs, accepted results, existing speech projects and immutable voices retain their chosen model identity. Removing an idle model does not change the preference; its next use prepares the same resource again.

Never manually replace weight files or modify private model directories. Verification failures should be handled through the visible preparation controls. To move knowledge to another computer, export a Space or library backup; model downloads are a separate preparation step.

---
title: FAQ
description: Short answers about cost, privacy, AI, files and system requirements.
---

## Getting started

### What does Knovum do?

You bring recordings, web pages, documents and notes into one Space, transcribe and search them on your computer, then ask them questions. Every answer comes with its sources; open one and you're at the original, so you can check each statement.

### How is it different from a notes app or a chatbot?

A notes app stores your material; a chatbot gives you an answer. Knovum joins the two: answers come only from your own material, and every statement says where it came from.

### Does it cost anything?

It's free for personal, non-commercial use. The source code is published on GitHub under the Knovum Personal Non-Commercial License 1.0.

### Which systems are supported?

macOS 14 or later on Apple silicon and Intel, and 64-bit Windows 10 version 2004 or later. See [Install Knovum](../../getting-started/installation/).

### Do I need a dedicated graphics card?

No. Core features run on an ordinary computer, and Apple silicon Macs use Metal to accelerate transcription and semantic search. Voice cloning and design need at least 32 GiB of memory; see [Manage local models](../../guides/local-models/).

## Privacy and network

### Where is my material stored?

On your computer. The library, copies of imported files and the search indexes are all local. See [Privacy and AI boundaries](../privacy/).

### Can I use it offline?

Once models are downloaded, editing, keyword search, semantic search, transcription and local image processing all work offline. Adding web pages, downloading a model for the first time and using cloud AI need a connection.

### What is sent to an AI provider?

Only what the action needs, such as the sources you added to a question, and only to the provider you chose for that action.

## AI and models

### Do I need an API key?

Not for organizing, searching or transcribing. Answering questions and generating documents, images and video need an AI provider or a desktop Agent. See [Set up AI providers](../../guides/providers/).

### Which providers can I connect?

OpenAI, Anthropic, Google Gemini, DeepSeek, Qwen, Zhipu, Moonshot (Kimi), Doubao and more, seventeen cloud services in all, plus any OpenAI-compatible API and Ollama running locally.

### I already use Claude Code or Codex. Can I use it?

Yes. Enable it in settings and you can choose it in conversations and creation, on its own account. See [Use desktop Agents](../../guides/agents/).

### Why is the first transcription slower?

The first time, the speech recognition model has to be downloaded and verified; the **Tasks** panel shows the progress. Transcriptions after that start right away.

## Files and content

### What can I import?

Web pages, Markdown, PDF, Word, PowerPoint, Excel, images, audio, video and code, up to 8 GiB per file. Archives are stored as ordinary files and not unpacked. See [Collect sources](../../guides/capture/).

### If I change the original file, does Knovum update?

No. Knovum keeps the copy made at import. When the original has a new version, import it again.

### Can it transcribe recordings that mix languages?

Each recording is transcribed in the language detected at its start. Check any part where the language changes against the recording.

## Moving and keeping

### What if I change computers?

Use **Export Space package…** for the Spaces you need and **Import Space package…** on the new computer. You can also move everything with a library backup, under the conditions in [Back up and restore the library](../backup/). See also [Export and move](../export/).

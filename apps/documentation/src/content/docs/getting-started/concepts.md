---
title: Core concepts
description: Spaces, resources, citations and Agents. Learn these few words and every other page reads easily.
---

Knovum has a small vocabulary, and every word maps to something you can see on screen. Learn them first, then start working.

## Spaces and the Inbox

A **Space** is a workspace for one subject: a research question, a project, a course. Sources, notes and conclusions sit on one infinite canvas, next to each other and connected to each other. Press <kbd>⌘/Ctrl</kbd> + <kbd>T</kbd> to create a New Space.

The **Inbox** is a special Space for collecting things quickly. Pages, files and ideas you have not placed yet go here first; later, use **Move to Space** to put them where they belong.

## Resources

Everything on the canvas is a resource: notes, text, Markdown documents, web pages, images, audio, video, files and code.

When you import a file, Knovum stores its own copy in your library. The original on your computer stays as it is, and the two are not synchronized afterwards.

## Organizing the canvas

| Name        | What it does                                                     |
| ----------- | ---------------------------------------------------------------- |
| **Section** | A named area of the canvas that keeps related material together. |
| **Group**   | Binds several objects so they move and act together.             |
| **Tag**     | A label independent of position, used for filtering.             |
| **Scene**   | Saves the current viewport so you can return to it in one step.  |
| **Outline** | A list of everything in the Space; click an item to go to it.    |

## Conversations and Agents

You ask questions in the **Conversation** panel. Answers come from the Agent you choose:

- **Knovum Agent**: the built-in Agent. It uses the models you added under **AI Providers** with **Use for the built-in Agent** turned on.
- **Desktop Agents**: tools already installed and signed in on this computer, such as Claude Code, Codex or Gemini CLI, using their own accounts.

## Citations

When an Agent answers, it lists its **Sources**. Each source points to an exact location: a page in a PDF, a passage in a document, a time range in a recording, lines in a file of code. Choose **Locate at source** to open the original right there.

If a source changes later, the citation is marked **Evidence source version has changed** and keeps the text the answer relied on at the time. You can always see what a conclusion was originally built on.

## Structured knowledge

When an argument takes shape, you can record it explicitly. Knovum provides six knowledge objects, **Claim, Evidence, Question, Decision, Concept and Experiment**, and you can define your own under **Manage knowledge types**. Objects are connected by relations that carry meaning, such as **Supports**, **Contradicts**, **Answers**, **Depends on** and **Derives from**.

**Knowledge checks** scans a Space and points out what needs attention: claims without support, accepted claims that are contradicted, evidence without a source, and citations whose source has changed.

## Local models

Transcription, semantic search, background removal, image upscaling, speaker identification and more run on local models on your computer. A model is downloaded the first time you use a feature that needs it; after that, the feature works offline.

## Tasks

Long-running work such as downloading models, transcribing and generating content appears in the **Tasks** panel with its progress. You can keep working while a task runs, or cancel it from there.

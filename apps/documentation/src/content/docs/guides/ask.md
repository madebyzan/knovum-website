---
title: Ask and check citations
description: Have an Agent answer only from the sources you give it, then check every source against the original.
---

When you ask in Knovum, the answer comes from your own sources and every statement carries a source. Your part is twofold: give it the right material, then check the citations.

:::note[You need]
An Agent that can answer: add a model under [AI Providers](../providers/) and turn on **Use for the built-in Agent**, or enable a [desktop Agent](../agents/).
:::

## 1. Choose an Agent

Open the **Conversation** panel and use **Choose an Agent**:

- **Knovum Agent**: the built-in Agent, using the models where you turned on **Use for the built-in Agent**. Only models that support tool calls can be turned on.
- **Desktop Agents**: Agents installed and signed in on this computer, using their own accounts and subscriptions.

If the list is empty, choose **Configure models and Agents…** to set one up.

## 2. Give it material

The closer the scope to the question, the better the answer and the easier the checking. Choose **Add resource**:

- **Reference canvas content**: pick resources from the current Space.
- **Add current selection**: add whatever is selected on the canvas. Selecting a section brings everything in it.
- **Add local file**: attach an image, PDF or document for this conversation only, without importing it. Images up to 10 MiB, other files up to 20 MiB.

A conversation can hold up to 32 items. Shortcut: select content on the canvas and press <kbd>⌘/Ctrl</kbd> + <kbd>Enter</kbd> to **Ask question**.

## 3. Ask clearly

A good question says what you want and how the answer should justify itself:

> Do these three reports agree on next year's budget growth?
> Quote the original for each point; where the reports differ, list each one's position.
> If the sources don't mention something, say so.

An empty conversation also offers three starting points: **Find sources**, **Create a document** and **Compare ideas**.

While the Agent works, it shows its **Plan** and each step. Afterwards, expand the activity record to see what it searched and read.

## 4. Check the citations

Below the answer you'll find **Sources · N**. Each source points to an exact place: a PDF page, a passage, a time range in a recording, lines of code.

Choose **Locate at source** for each one and ask: **does the original really say this?** However fluent the answer, only what you have checked counts. Remove statements that don't match, or mark them as unconfirmed.

:::caution[The source has changed since]
The citation is marked **Evidence source version has changed**. It keeps the text the answer relied on at the time, not the latest version of the source. Ask again if you need a judgment based on the new version.
:::

## 5. Keep what's useful

- **Extract as evidence**: turn a checked passage into an evidence object on the canvas, which you can then connect to claims; see [Structured knowledge](../knowledge/).
- **Generated content**: documents or images the Agent creates are placed on the canvas directly; choose **Locate result** to find them.
- **Try another direction**: if you don't like an answer, choose **Branch here** on that message. The original conversation stays as it was.

## Conversation extensions

In **Conversation extensions**, choose plugins, personal Skills or MCP connections for this conversation. The bundled plugins include:

| Plugin            | What it does                                                      |
| ----------------- | ----------------------------------------------------------------- |
| Space knowledge   | Read, organize and publish Space knowledge with traceable sources |
| Evidence research | Compare sources and prepare research or decision briefs           |
| Meeting notes     | Extract decisions and action items from meeting transcripts       |
| Document delivery | Prepare source-grounded reports in the format you need            |
| Study companion   | Turn Space material into study guides, exercises and review plans |

GitHub, Notion and Linear work plugins are available once you connect an account. Before an external service is accessed, Knovum asks with **External operation needs approval**, and you choose **Allow** or **Deny**. See [MCP and extensions](../mcp/).

## Managing conversations

**New conversation** starts a new topic. In **Conversation history** you can search, archive and export earlier conversations. Each Space keeps its own conversations.

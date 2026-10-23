---
title: Your first Space
description: One question, two sources and a conclusion you have checked yourself. The whole Knovum workflow in ten minutes.
---

This tutorial answers one question from two sources and walks through the core loop of Knovum: collect sources, read them yourself, ask, check every citation, and write down the conclusion.

:::note[You need]
The address of an article or a document, plus a second source about the same question. Importing, organizing and searching need no AI account; asking in step 5 needs an [AI provider](../../guides/providers/) or an enabled [desktop Agent](../../guides/agents/).
:::

The example question is: **why do people stop after a trial?** Use your own question if you have one.

## 1. Create a Space

Press <kbd>⌘/Ctrl</kbd> + <kbd>T</kbd> for a New Space and rename it “Trial research”.

Double-click an empty spot on the canvas to create a note. Write the question and what would count as an answer:

> Question: why do people stop after a trial?
> Needed: specific reasons, the source for each, and what we still don't know.

:::tip[Checkpoint]
The canvas has one note with the question. Don't bring in everything yet; two sources are enough to get through the workflow.
:::

## 2. Add your sources

Open **Add content** on the canvas:

- A web page: choose **Add website** and paste the address. Knovum saves the link and captures the title, summary and readable text.
- A file: choose **Import files…**, or drop the file onto the canvas. PDF, Word, PowerPoint and Markdown all work.

Open each source and make sure you can read its text, not only its title. Text extraction for PDF and Office documents runs in the background; its progress appears in the **Tasks** panel.

:::tip[Checkpoint]
Both sources open, and you can read the passages you intend to cite.
:::

## 3. Mark the sources for this question

Select both sources, right-click and choose **Create section**, and name it “Evidence”. When you ask later, selecting this one section brings along everything in it.

As the Space grows, use the **Outline** to find things: click any item and the canvas moves to it.

## 4. Find a passage yourself first

Press <kbd>⌘/Ctrl</kbd> + <kbd>F</kbd> to open **Find** and search for a word you expect to appear, such as “price” or “import”. Open a result and read the passage.

Having read the original yourself before you ask is what lets you judge whether the Agent's answer holds up.

## 5. Ask your sources

Open the **Conversation** panel and pick **Knovum Agent** or an enabled desktop Agent in **Choose an Agent**. Select the “Evidence” section, choose **Add resource** → **Add current selection**, then type:

> What reasons for abandoning the trial do these sources mention?
> Quote the original text that supports each reason.
> Separate what the sources say from what you infer, and say so when sources conflict or say too little.

The answer lists its **Sources**. Choose **Locate at source** for each one and ask yourself: does the original really say this?

:::tip[Checkpoint]
You have seen the original of every statement you intend to keep. Remove anything that doesn't match, or mark it as unconfirmed.
:::

## 6. Write down the conclusion

When a passage is worth keeping, use **Extract as evidence** to turn it into an evidence object on the canvas.

Next to the “Evidence” section, create a note in three parts: **what the sources support**, **what is still uncertain**, **what to do next**.

To record the argument more rigorously, create a claim for each conclusion and connect the evidence to it with **Supports** or **Contradicts**; see [Structured knowledge](../../guides/knowledge/). When you need a formal document, select the material and use [Create from selection](../../guides/creation/).

## If something doesn't work

| Symptom                                      | Check first                                                                          |
| -------------------------------------------- | ------------------------------------------------------------------------------------ |
| An imported document shows only a title      | Whether text extraction has finished in the **Tasks** panel                          |
| Something said in a recording can't be found | Whether the recording has been transcribed                                           |
| No **Semantic search**                       | It downloads a local model the first time; see [Find sources](../../guides/search/)  |
| No Agent to choose                           | Whether a model has **Use for the built-in Agent** on, or a desktop Agent is enabled |
| A citation doesn't match the original        | Whether the source was edited after the answer                                       |

## Next

- [Interview research: from recordings to findings](../../tutorials/interviews/): the same workflow with recordings, transcripts and speakers.
- [Meetings and lectures: from a recording to notes](../../tutorials/meetings/): from one recording to confirmed decisions and owners.

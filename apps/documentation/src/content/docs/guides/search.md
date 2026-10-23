---
title: Find sources
description: Search exactly by keyword or by meaning with semantic search, in one Space or across all of them.
---

Knovum has two ways to search, and both run on your computer.

| Method              | Best when                                                             | What it needs                          |
| ------------------- | --------------------------------------------------------------------- | -------------------------------------- |
| **Keyword**         | You remember the exact words, a name or a term                        | Nothing; it works from the start       |
| **Semantic search** | You remember only the gist, or want similar ideas phrased differently | A local model, downloaded on first use |

## Find in the current Space

Press <kbd>⌘/Ctrl</kbd> + <kbd>F</kbd> to open **Find** and type a keyword. Results cover notes, web pages, transcripts, file contents and tags. Choose a result and the canvas moves to it; for a recording, the result shows the time range.

## Search all Spaces

When you don't remember which Space something is in, press <kbd>⌘/Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> to **Search all Spaces**.

## Search by meaning

Turn on **Semantic search** in the search box. The first time, Knovum downloads the local embedding model Qwen3 Embedding and indexes your content; the **Tasks** panel shows **Indexing content for semantic search**. After that, describe what you are looking for in a sentence, such as “where users complain that getting started is hard”.

The model and the index for semantic search both live on your computer. No AI account is needed and nothing is sent out.

## Related content

Select a resource and open **Related content** in **Details**. Knovum finds other material in the Space with similar meaning. These are suggestions only; nothing is connected on the canvas automatically.

## When nothing turns up

1. **Processing isn't finished**: document text and recording transcripts can't be found until extraction or transcription completes. Check the **Tasks** panel.
2. **A file you just edited**: Knovum rereads files edited in other apps when its window regains focus. Wait a moment and search again.
3. **Semantic search returns nothing**: make sure indexing has finished. If needed, **Rebuild retrieval index**.

:::note[Match scores]
Semantic search ranks by similarity. A top result is close in meaning, which doesn't make it correct; open the original and read it.
:::

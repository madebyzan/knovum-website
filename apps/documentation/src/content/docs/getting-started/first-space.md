---
title: Your first Space
description: Complete one small research workflow, from a question to a checked answer and a portable result.
---

## Before you begin

Install and open Knovum. Prepare one short article or Markdown file and a second source about the same question. No provider key is needed for importing, organizing, keyword search or export. For a generated answer, configure an [AI provider](../../guides/providers/) or [desktop Agent](../../guides/agents/) first.

This example asks: **Why do people stop using our trial?** Replace it with your own question. The example titles and text below are practice material, not built-in product content.

## 1. Create a bounded workspace

Create a Space from the library and name it **Trial research**. Add a note containing your question and what would count as enough evidence.

A useful starting note:

> Question: Why do people stop using our trial?
> Need: specific reasons, the source of each reason, and what is still unknown.
> Do not treat one interview as representative of all users.

**Checkpoint:** the Space has a meaningful name and your question is visible. Do not import the entire library yet; two relevant sources are enough to learn the workflow.

## 2. Bring in the evidence

Use **Add Website** to save your article URL or **Import Files** to select the document. Add the second source. If you use audio, start [transcription](../../guides/transcription/) and wait for it to finish.

Open each resource and confirm that the body text or transcript is present. A saved filename is not evidence that extraction finished. Files are managed copies, not a synchronized link to the external original.

**Checkpoint:** you can read the actual passage you intend to use. If only a title appears, check the import/extraction task before proceeding.

## 3. Make the scope explicit

Put the relevant material in a Section named **Evidence**. Keep your working question separate. Use a Group only when you need to move several objects together; it serves a different purpose from a Section.

Use Outline Locate if you lose a source on the canvas. It reveals the containing Group or Section instead of creating another copy.

**Checkpoint:** you know exactly which material belongs to this question and can return to it through the Outline.

## 4. Find a passage before generating

Try a distinctive keyword from your question or source. Open a result and compare the matched passage with the original.

Use semantic search only after explicitly preparing its embedding model and index. For this first workflow, keyword search is sufficient and removes model readiness as a possible source of failure.

**Checkpoint:** at least one relevant passage has been read directly, without relying on a generated summary.

## 5. Ask a question you can audit

Select the relevant sources and use that scope in the question/conversation surface. Select an available execution target. Try:

> What reasons for stopping the trial appear in these sources?
> For each reason, cite the supporting passage.
> Distinguish what the sources say from your interpretation.
> If the sources disagree or leave a gap, state that explicitly.

Open every citation that matters to the answer. Does the source say what the answer claims? Is the quote current, or a historical detached citation? A fluent answer and a plausible link are not sufficient verification.

**Checkpoint:** you can independently justify the main conclusion. If a citation cannot be verified, exclude that assertion or label it unresolved.

## 6. Save a conclusion, not just a response

Write a note with three parts: **what the evidence supports**, **what remains uncertain**, and **what to do next**. Keep relevant links or relations visible. For a more formal result, create a document from the selected material and inspect its input trail.

Export the document when you need to share a deliverable. Export the whole Space as `.knovumspace` when you need to preserve its content, assets and relationships or move it to another computer.

**Checkpoint:** open the delivered file or import the package into a new Space and check it. Exporting one document is not backing up the workspace.

## If something blocks you

| Symptom                            | First check                                          |
| ---------------------------------- | ---------------------------------------------------- |
| Imported document has no body      | Import/extraction progress and supported format      |
| Recording has no searchable speech | Transcription task, not provider configuration       |
| Semantic search is unavailable     | Local embedding preparation and current index        |
| Ask fails                          | Selected executor, credentials and operation support |
| Citation no longer matches         | Source revision and detached/current status          |
| Export is unavailable              | Resource readiness and the formats actually offered  |

Keep the originals. Do not delete the database to fix a failed operation. Continue with [structured knowledge](../../guides/knowledge/) or [export and transfer](../../guides/export/).

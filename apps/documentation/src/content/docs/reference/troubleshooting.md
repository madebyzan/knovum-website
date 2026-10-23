---
title: Troubleshooting
description: The most common problems, by symptom, with the steps to fix them.
---

Most problems leave a clue in the **Tasks** panel: it shows whether each piece of background work is downloading, queued, running, needs setup or has failed. Look there first.

## A feature keeps waiting

**Symptom**: transcription, semantic search or image processing never seems to finish.

1. Open the **Tasks** panel and look at the task's status.
2. **First use needs … of local resource downloads** or **Verifying integrity…**: the model is being prepared. The first time needs a download, so stay online and make sure there's enough disk space.
3. **Needs setup**: this feature needs you to choose a model first; follow the prompt to settings.
4. **Failed**: open it to see why, fix the cause and try again.

## Sources can't be found

1. Try a keyword search first, to rule out semantic search not being ready.
2. Make sure the document's text was extracted: select the resource and check **Extracted text** and **Document processing** in **Details**.
3. Recordings and video must be transcribed before what's said in them can be found.
4. For a file you just edited in another app, switch back to Knovum and wait a moment while it rereads the file.

## No Agent to choose, or answers fail

1. No Knovum Agent in **Choose an Agent**: under **AI Providers**, turn on **Use for the built-in Agent** for a model that supports tool calls.
2. Authentication fails: check the API key, and whether API access is enabled in the provider's console.
3. Rate limit or quota: a limit on the provider's side; wait, or raise the quota.
4. A desktop Agent fails: first confirm it runs and is signed in on its own in a terminal.

## Image or video generation fails

Working text doesn't mean images and video work too. Make sure you added models that support **Image generation** or **Video generation**, and assigned them to **Image creation** and **Video creation** under **Feature Models**.

## A resource can't be deleted or moved

While a document or video is open in an editor tab, Knovum protects it. Close that tab, save or discard changes when asked, then delete or move it.

## Export fails

Wait until the resource has finished processing, and make sure the format you chose is supported for it. Complex Office layouts may not convert completely; use the original file when you need the exact layout.

## Installation or launch fails

- Download the installer again from the website or the GitHub releases page. Don't turn off Gatekeeper or SmartScreen to get it installed.
- If launch fails, the screen offers **Reload UI** and reset options. Resetting settings clears preferences and saved provider keys; the content of your Spaces is kept.

:::danger[Don't delete data files by hand]
Deleting Knovum's data folder or database files to “fix” a problem loses your material. Back up first, then ask for help.
:::

## Report a problem

When you open an issue on [GitHub](https://github.com/madebyzan/knovum/issues), include your system version, the Knovum version (**Settings → About**), steps to reproduce and the error message. Before taking screenshots, cover API keys, private content and personal file paths.

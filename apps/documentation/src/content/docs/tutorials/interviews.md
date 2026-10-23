---
title: "Interview research: from recordings to findings"
description: Turn a few interview recordings into a findings memo where every finding links to the moment someone said it.
---

This tutorial starts with a handful of user interviews and ends with a findings memo. Every finding in the memo links back to the second in the recording where someone said it.

:::note[You need]
Two to five interview recordings (audio or video) and one question you want answered. Transcription runs on your computer and needs no AI account; asking in step 6 needs an [AI provider](../../guides/providers/) or an enabled [desktop Agent](../../guides/agents/).
:::

## 1. Create a Space

Create a Space called “Interview research”. Double-click the canvas to write a note with the question and what a good answer looks like:

> Why do teams stop using the product after the trial?
> For each reason: who said it, and in how many interviews.

## 2. Import the recordings

Drop all the recordings onto the canvas, or choose **Import files…** in **Add content**. Each recording becomes an audio or video resource on the canvas.

Select them all, right-click, choose **Create section** and name it “Interviews”. When you ask later, selecting this section brings every recording along.

## 3. Transcribe

Select a recording and choose **Transcribe**. The first time, Knovum downloads the speech recognition model and shows the progress in the **Tasks** panel; after that, transcription starts right away. Transcribe each recording.

To know who said each line, choose **Identify speakers** in the transcript's **Speaker tracks**. If you know how many people took part, enter it in **Known speaker count (optional)** for steadier results. Recordings up to two hours are supported.

:::tip[Choosing a transcription model]
The default model balances speed and accuracy. For heavy accents or a lot of jargon, set the default transcription model to Whisper Large V3 in **Settings → Local models**; it takes longer.
:::

## 4. Proofread the transcripts

Open a recording and turn on **Follow playback** to read along as you listen. Click any line and playback jumps there. Listen to the important passages and fix names and product terms. The more accurate the transcript, the more useful every citation that follows.

## 5. Look before you ask

Use **Search transcript**, or press <kbd>⌘/Ctrl</kbd> + <kbd>F</kbd> in the Space, and search for words you expect, such as “import” or “price”. Open a few results and listen. Knowing the interviews yourself is what lets you judge the answer.

## 6. Ask the question

Open the **Conversation**, choose an Agent, select the “Interviews” section, choose **Add resource** → **Add current selection** and ask:

> What reasons do teams in these interviews give for leaving after the trial?
> Quote the words that support each reason and count how many interviews mention it.
> List reasons that come up only once separately.

Each source in the answer points to a time range in a recording. For the ones your conclusions depend on, choose **Locate at source** and listen. Keep what the recording really says; remove what it doesn't, or mark it as unconfirmed.

## 7. Record the findings

Create a **Claim** for each reason that holds up, for example “Teams leave when the data they imported disappears at the end of the trial”. Turn the supporting quotes into **Evidence** with **Extract as evidence** and connect them to the claim with **Supports**; when an interview says the opposite, connect it with **Contradicts**.

Open **Knowledge checks**. It lists claims that still lack support, so nothing in the memo rests on a single impression.

## 8. Write the memo

Select the claims and evidence and use [Create from selection](../../guides/creation/) to draft a document, or write it yourself. A generated document records which sources it used, and tells you if those sources change later.

## What you end up with

- Searchable transcripts, every line tied to a time in the recording.
- Findings expressed as claims, each with the quotes that support or contradict it.
- A findings memo where every statement traces back to what an interviewee actually said.

:::caution[Interviews in more than one language]
Transcription detects one language per recording. If an interview switches languages, the later part may be transcribed in the first language; check it against the recording.
:::

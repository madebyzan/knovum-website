---
title: Collect sources
description: Bring web pages, documents, images, recordings and video into a Space, and make sure Knovum can read what's inside.
---

Sources can be searched and cited only once they are in a Space. This page covers how to bring each kind in, and how to confirm Knovum really read the content.

## Three quickest ways

- **Drop**: drag files from the desktop, Finder or File Explorer onto the canvas.
- **Paste**: copy text, an image or an address and paste it on the canvas.
- **Double-click**: double-click an empty spot to create a note and start writing.

For more options, open **Add content** on the canvas.

## Save a web page

In **Add content**, choose **Add website** and paste the address. Knovum keeps the link and captures the title, summary and readable text, so the page can be searched and cited.

If capturing fails, the link is still kept; choose **Refresh web content** in **Details** to try again. Pages behind a sign-in usually can't be captured. Knovum stores the readable text, not an offline copy of the whole site, and keeps the original address so you can go back and check.

## Import files

Choose **Import files…**, or drop the files in. Common formats all work:

| Type                         | What you can do after importing                                |
| ---------------------------- | -------------------------------------------------------------- |
| Markdown                     | Edit it directly in Knovum                                     |
| PDF, Word, PowerPoint, Excel | Text is extracted for search and citation                      |
| Images                       | With a vision model, recognize what's shown and the text in it |
| Audio, video                 | Transcribe to searchable text on your computer                 |
| Code                         | Cite by line number                                            |

Knovum stores a copy of each imported file in its library and leaves the original on your computer untouched. The two don't stay in sync: when the original has a new version, import it again.

## Confirm the content is readable

After import, text extraction, transcription and similar processing run in the background, with progress in the **Tasks** panel. Select the resource and open **Details**:

- **Extracted text**: the text Knovum read from the document.
- **OCR recognized text**: text recognized in an image.
- **Document processing**: how many pages have been extracted. Image-only pages in scanned PDFs are listed separately.

Only content Knovum can read can be found and cited. Checking this before you ask saves a lot of confusion.

## Limits

- A single file can be up to 8 GiB.
- Text extraction stops at 128 MiB and 2,000 PDF pages; larger files can still be imported and opened, but are not fully extracted.
- Archives are stored as ordinary files. They are not unpacked, and their contents are not searched.
- Files such as `.env` that may contain secrets don't get a searchable text preview.

## Edit in another app

Select the resource and choose **Open in external editor**. After you save in the other app, Knovum reads the content again the next time it starts or its window regains focus.

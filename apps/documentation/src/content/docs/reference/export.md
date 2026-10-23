---
title: Export and move
description: Export a piece of work in a common format, take a whole Space to another computer, or exchange canvases with other tools.
---

## Pick by purpose

| You want to                                | Use                               |
| ------------------------------------------ | --------------------------------- |
| Hand a document, image or video to someone | Resource export                   |
| Move a whole Space to another computer     | Space package (`.knovumspace`)    |
| Exchange a canvas with JSON Canvas tools   | JSON Canvas (`.canvas`)           |
| Back up the entire library                 | [Back up and restore](../backup/) |

## Export a resource

Select the resource, choose **Export**, pick a format, name it and save. The formats available depend on the resource:

| Resource | Formats                                                     |
| -------- | ----------------------------------------------------------- |
| Document | Markdown, plain text, HTML, Word, PDF, presentation (.pptx) |
| Image    | PNG, JPEG, WebP, TIFF                                       |
| Audio    | WAV, MP3, AAC (.m4a), FLAC                                  |
| Video    | MP4, QuickTime (.mov), Matroska (.mkv), or audio only       |

Markdown documents can also use **Export Markdown** directly. Image exports use the result after your applied edits.

Document conversion keeps the content structure, such as headings, paragraphs, lists and tables, and lays it out again for the target format. Page breaks and layout won't necessarily match an original Office file; when you need the exact layout, use the original.

## Move a Space to another computer

1. In the library, choose **Export Space package…** from the Space's menu and save the `.knovumspace` file.
2. Install Knovum on the new computer and choose **Import Space package…**.
3. The import creates a new Space. Keep the package file until you have confirmed everything is there.

A Space package holds everything in that Space: resources and their original files, the canvas, knowledge objects and relations, generation records, citations, and the voices its speech projects use. It doesn't include app settings, credentials or local models; set those up again on the new computer.

## JSON Canvas

**Export JSON Canvas…** and **Import JSON Canvas…** exchange canvas layouts with other tools that support JSON Canvas. The format describes positions and connections on the canvas only and isn't a complete knowledge backup. The resources a `.canvas` file refers to sit in a folder next to it; move them together.

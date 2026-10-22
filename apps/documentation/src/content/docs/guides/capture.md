---
title: Capture sources
description: Save websites, import files and distinguish originals from managed copies.
---

## Save a website

Use **Add Website** with an HTTP/HTTPS URL or a domain-like address. The address is saved first; page title, site identity, preview and readable article text are prepared when available. A failed metadata refresh retains the previously saved content.

Capture is not a complete offline mirror of a website. A page that requires login or does not expose readable article content may not yield the text you expect. Keep the original URL for verification.

## Import files

Use **Import Files** to select regular files. Knovum copies file assets into its private storage. Markdown becomes editable Space content. PDF and supported Office formats provide extracted text and available system previews; specialist editing remains in the associated desktop application.

- Single resource files are limited to 8 GiB.
- Directory import is not supported.
- Archives remain opaque files: importing a ZIP does not expand or index its contents.
- Known credential-bearing files such as `.env` are not added to searchable text previews.

Import capacity is not extraction capacity. Semantic document parsing has narrower budgets, including a 128 MiB input limit and a 2,000-page PDF limit.

## Understand the copy

Opening an imported resource opens Knovum’s managed copy, not necessarily the file you originally selected. Changes made to that private copy in an external editor are re-inspected when Knovum starts or regains focus. Do not assume the external original and the managed copy are synchronized.

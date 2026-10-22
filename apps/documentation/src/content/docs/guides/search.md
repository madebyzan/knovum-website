---
title: Find your material
description: Choose keyword or semantic search and check indexing readiness.
---

## Start with keywords

Keyword search runs locally and needs no provider connection or model download. Use distinctive names or phrases. Space Find searches the current scope; global search can search across active Spaces.

Search can only find what is available: an imported document without extracted text or a recording without a transcript has less searchable material than its original file may contain.

## Search by meaning

Semantic search uses the local Qwen3 embedding model. Preparing semantic search explicitly downloads and verifies that model if necessary, then indexes eligible content. Simply opening a Space does not automatically download missing embedding weights.

Allow preparation and indexing to finish. A pending index is different from a provider authentication error; keyword search remains a useful first diagnostic.

## Inspect a match

Open the matched source and check its passage or location. A search score ranks matches; it is not a probability that the content is true. Related Content also requires prepared embeddings and indexing.

If a recently changed file is missing, first confirm Knovum has re-inspected its managed copy and completed extraction. Do not delete your library to rebuild a search result.

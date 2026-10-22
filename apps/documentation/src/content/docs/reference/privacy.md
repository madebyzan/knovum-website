---
title: Privacy and AI boundaries
description: Understand what stays local, what can leave, and how credentials are stored.
---

## What stays local

Space structure, managed assets, extracted text and search indexes are stored on your computer. Keyword search, embedding inference and ordinary speech transcription run locally once their required resources are installed.

Local storage does not automatically mean encrypted storage. Protect the device and exported packages with appropriate operating-system security and disk encryption.

## Network boundaries

| Operation                                   | Network use                                                           |
| ------------------------------------------- | --------------------------------------------------------------------- |
| Save a website                              | Fetches the requested site and available preview resources            |
| Prepare local models/tools                  | Downloads verified resources                                          |
| Provider-backed generation or understanding | Sends the context required by the selected operation to that executor |
| External Agent                              | Uses that Agent’s own authentication and tool permissions             |

A model installed through Ollama or another local endpoint is different from a hosted provider, but you must still check that endpoint’s actual configuration. “Local-first” does not guarantee every configured executor is local.

## Credentials

Provider keys and Sensitive Information secret values belong to a separate local credential database. Canvas content stores descriptive status rather than the secret value. Duplicating a credential object does not duplicate its secret.

Before sharing exported JSON, documents or Space packages, inspect what they contain. Avoid putting actual credentials into ordinary notes or prompts; those are content, not protected credential fields.

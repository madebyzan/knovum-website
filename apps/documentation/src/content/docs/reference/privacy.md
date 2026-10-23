---
title: Privacy and AI boundaries
description: What stays on your computer, what is sent out and to whom, and how keys are stored.
---

## What stays on your computer

- Every Space, the canvas structure and everything you write.
- Copies of imported files and the text extracted from them.
- Search indexes, including the semantic search index.
- Work done by local models: transcription, speaker identification, semantic search, background removal, upscaling, repair, speech synthesis and stem separation.

Once their models are downloaded, these features run fully offline.

## When Knovum goes online

| What you do                            | Sent to                                | What is sent                                        |
| -------------------------------------- | -------------------------------------- | --------------------------------------------------- |
| Add or refresh a web page              | That website                           | An ordinary page request                            |
| Use a local feature for the first time | The model download source              | A download request; files are verified afterwards   |
| Ask or generate with an AI provider    | The provider you chose for that action | What the action needs, such as the selected sources |
| Use a desktop Agent                    | That Agent and the services it uses    | Determined by the Agent's own configuration         |
| Use an MCP connection                  | That MCP server                        | The arguments of tools you allowed                  |
| Check for updates                      | Knovum's release service               | A version check                                     |

Knovum never sends your material to a provider without your knowledge, and never quietly retries with another provider when one fails.

## Keys and credentials

API keys, connection tokens and other secrets are kept in a separate credential store on your computer, never in Space content or logs. A credential node on the canvas holds only a name and its configuration status; duplicating the node doesn't copy the secret.

Neither Space packages nor library backups contain credentials. After restoring a backup, enter the keys for your providers and connections again.

## What to keep in mind

- **Local isn't encrypted**: your material is stored on your computer and Knovum doesn't encrypt it separately. Use the system's disk encryption (FileVault on macOS, BitLocker on Windows) to protect the computer and exported files.
- **A “local” endpoint may not be local**: an Ollama server on a remote machine is still remote, whatever you name it.
- **A key in a note is ordinary content**: it can be searched and exported with the Space. Put keys only in credential fields.
- **Look before you share**: check what an exported Space package, document or JSON file contains before sharing it.

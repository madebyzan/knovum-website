---
title: Configure AI providers
description: Connect an account, choose compatible models and test the actual operation.
---

## Before connecting

You need an account with the chosen provider, any required API entitlement and a valid credential. A subscription to a provider’s chat website is not necessarily an API subscription. Check pricing and data handling with the provider before sending private content.

## Set up a connection

1. Open Settings and the AI provider connection area.
2. Add a connection and choose the provider from the available catalog.
3. Give it a recognizable name. Enter the endpoint if that provider or compatible service requires one.
4. Enter the key in the credential field, not in an ordinary note. Save the connection.
5. Configure available models and select the appropriate target when asking or creating.
6. Run a small non-sensitive task of the exact kind you intend to use.

Multiple connections let you distinguish accounts and endpoints. A custom OpenAI-compatible endpoint is not a guarantee that it implements image editing, video generation or every request shape.

## Diagnose by operation

A successful text answer only verifies that text operation. Check model capability, endpoint, entitlement and credentials independently when images or video fail. Rate limits and exhausted credit are provider-side conditions. Knovum does not silently route a failed request through a different account.

Changing a secret field and saving replaces its stored value; leaving it unchanged retains the existing value. Do not paste keys into screenshots or issue reports.

## Local endpoints

Ollama or another compatible local service must actually be running and reachable at the configured endpoint. Its models and operation support are managed by that service, not by Knovum’s built-in local model installer. A remote hostname remains a remote service even if you label the connection “local”.

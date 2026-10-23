---
title: Set up AI providers
description: Connect an AI account you already have, add models, then assign the right model to writing, conversation, images and more.
---

Organizing, searching and transcribing need no AI account. To have Knovum answer questions and generate documents and images, connect a provider you already use. There are three steps: add the provider, add models, assign them to features.

:::note[You need]
An account with the provider and an API key. Chat subscriptions on the web usually don't include API access; enable it separately in the provider's developer console.
:::

## Supported providers

OpenAI, Anthropic, Google Gemini, DeepSeek, Qwen (DashScope), Zhipu, Moonshot (Kimi), Doubao, MiniMax, StepFun, SiliconFlow, Kling, xAI Grok, Mistral, Groq, Together, OpenRouter and Ollama. Any other service with an OpenAI-compatible API can be connected as well.

## 1. Add a provider

1. Press <kbd>⌘/Ctrl</kbd> + <kbd>,</kbd> to open settings and go to **Intelligence → AI Providers**.
2. Choose **Add provider** and pick yours under **Model provider**.
3. Give it a recognizable **Connection name**, such as “OpenAI · Work”.
4. Paste your key into **API key**. For an OpenAI-compatible API or Ollama, also fill in the **API base URL**.
5. Save.

You can add several connections for the same provider to keep accounts apart.

## 2. Add models

Under the connection, choose **Add model**:

- **Provider model identifier**: the model ID from the provider's documentation, such as `deepseek-chat`.
- **Model display name**: the name shown in Knovum.
- **Supported capabilities**: tick what the model really supports: **Text generation**, **Visual understanding**, **Image generation**, **Video generation**.
- **Use for the built-in Agent**: when on, this model can drive the Knovum Agent in conversations. Only models that support tool calls can be turned on; context and output limits are recognized automatically.

## 3. Assign to features

Go to **Intelligence → Feature Models**:

- The **Default model** under **Global default** serves every feature without its own setting.
- Under **By feature**, assign a model or Agent to **Writing**, the built-in Agent, **Visual understanding**, **Translation**, **Image creation** and **Video creation**.

For example: a fast, inexpensive model for everyday writing, a vision model for visual understanding, and a dedicated image model for image creation.

## Test with a real task

Try the feature you actually intend to use on a non-sensitive source. A successful text answer only proves text generation works; try images and video separately, since they usually involve different models and permissions.

## Cost and usage

Calls to a provider's models are billed at that provider's prices. **Intelligence → Usage** shows built-in AI token usage and activity for the past year; only services that report usage are counted.

## How keys are stored

API keys are kept in a dedicated credential store on your computer, never in Space content or logs. When you edit a connection, the key field reads **Key saved; leave blank to keep it**; to delete it, choose **Remove saved key**.

Don't put keys in notes or prompts: there they become ordinary content that can be searched and exported.

## Ollama and other local services

When Ollama runs on your own computer, requests never leave it. Choose Ollama when adding, make sure the service is running and the **API base URL** is reachable. Note that an Ollama server on a remote machine is still remote, whatever you name it.

## When a connection fails

| Symptom                       | Check first                                                             |
| ----------------------------- | ----------------------------------------------------------------------- |
| Authentication fails          | Whether the API key is correct and API access is enabled                |
| Text works, images don't      | Whether an image model is added with **Image generation** ticked        |
| No Agent in the conversation  | Whether a model has **Use for the built-in Agent** turned on            |
| Rate limit or quota exhausted | Your quota with the provider; Knovum never retries with another account |

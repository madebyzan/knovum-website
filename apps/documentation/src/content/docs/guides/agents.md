---
title: Use desktop Agents
description: Let Claude Code, Codex, Gemini CLI and other Agents already on your computer work directly with the material in your Spaces.
---

If you already use an AI Agent, you don't need to configure separate models for Knovum. Enable it and you can choose it in conversations and creation, running on its own account and subscription.

## Supported Agents

Claude Code, Codex, Gemini CLI, GitHub Copilot, Cursor, Cline, OpenCode, Qwen Code, Qoder CLI, Kimi CLI, Auggie CLI and Antigravity.

## 1. Install and sign in

First install the Agent on this computer and sign in, following its official instructions. Knovum connects to it over ACP (Agent Client Protocol) in one of three ways; settings tell you which one each Agent uses:

| Method                | What it needs                                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| Direct ACP            | The official CLI with ACP support, with its directory on your PATH                                          |
| ACP adapter           | The official CLI and Node.js (npx); the adapter downloads on first run                                      |
| Standalone ACP server | The official ACP package downloaded separately, with its files kept together and its directory on your PATH |

Each Agent has links to its connection help and official guidance.

## 2. Enable it in Knovum

1. Open settings and go to **Intelligence → Desktop Agents**.
2. Choose **Check Agents**. Each Agent shows **Command detected**, **App found; command unavailable** or **Command entry not detected**.
3. Choose **Enable** for a detected Agent.

The check only confirms the command is available, not that you're signed in. If the first use after enabling fails, make sure the Agent works on its own in a terminal.

## 3. Use it

- **Conversation**: pick it in **Choose an Agent** and ask as usual; see [Ask and check citations](../ask/).
- **Creation**: choose **Create with Agent** to have it produce slides, web pages, code and other files. You review them before importing into the Space; see [Create from selection](../creation/).
- **Per feature**: under **Intelligence → Feature Models**, you can also hand a feature to a desktop Agent.

When you create with an Agent, the current Space's knowledge is connected to it automatically through MCP, so it can search and cite the material in the Space.

:::caution[Enabling means trusting]
Once enabled, an Agent uses its own tools, MCP servers and Skills directly, without asking about each one. What it can do depends on how you configured that Agent. Enable only Agents you trust, scope your requests clearly, and review the files it produces before using them.
:::

## Cost

Desktop Agents bill through their own accounts, not through Knovum, and aren't counted in the token usage under **Usage**.

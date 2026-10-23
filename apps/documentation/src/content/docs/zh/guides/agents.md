---
title: 使用桌面 Agent
description: 让已经装在电脑上的 Claude Code、Codex、Gemini CLI 等 Agent 直接处理你空间里的资料。
---

如果你已经在用某个 AI Agent，不必再为 Knovum 单独配置模型。启用它之后，就能在对话和创作里选它，它用的是自己的账号和订阅。

## 支持的 Agent

Claude Code、Codex、Gemini CLI、GitHub Copilot、Cursor、Cline、OpenCode、Qwen Code、Qoder CLI、Kimi CLI、Auggie CLI 和 Antigravity。

## 1. 安装并登录

先按照 Agent 官方的说明，在这台电脑上安装它并完成登录。Knovum 通过 ACP（Agent Client Protocol）与它连接，有三种方式，设置里会注明每个 Agent 用哪一种：

| 方式            | 需要什么                                                   |
| --------------- | ---------------------------------------------------------- |
| 直接 ACP 接入   | 安装支持 ACP 的官方 CLI，并把命令目录加入 PATH             |
| ACP 适配器      | 官方 CLI 和 Node.js（npx）；首次运行会联网下载适配器       |
| 独立 ACP 服务端 | 单独下载官方 ACP 包，保留配套文件，并把服务端目录加入 PATH |

每个 Agent 旁边都有「接入说明」和「官方说明」链接。

## 2. 在 Knovum 中启用

1. 打开设置，进入「智能能力 → 桌面 Agent」。
2. 点「检查 Agent」。每个 Agent 会显示「已检测到命令」「已找到应用，命令不可用」或「未检测到命令入口」。
3. 对已检测到的 Agent 点「启用」。

检查只确认命令是否可用，不验证登录状态。启用后第一次使用失败时，先在终端里确认这个 Agent 本身能正常工作。

## 3. 使用

- **对话**：在「对话」里「选择 Agent」，选中它，像平常一样提问，见[提问与核查引用](../ask/)。
- **创作**：选「使用 Agent 创作」，让它生成演示文稿、网页、代码等文件。你检查之后再导入空间，见[用选中项创建](../creation/)。
- **按功能指定**：在「智能能力 → 功能模型」里，也可以把某项功能交给一个桌面 Agent。

用 Agent 创作时，当前空间的知识会通过 MCP 自动连接给它，它能直接检索和引用空间里的资料。

:::caution[启用意味着信任]
启用后，Agent 会直接使用它自己的工具、MCP 服务和 Skills，不再逐项请求确认。它能做什么，取决于你在这个 Agent 里的配置。只启用你信任的 Agent，给任务时说清楚范围，用之前检查它生成的文件。
:::

## 费用

桌面 Agent 使用它自己的账号计费，不经过 Knovum，也不计入「使用情况」里的 Token 用量。

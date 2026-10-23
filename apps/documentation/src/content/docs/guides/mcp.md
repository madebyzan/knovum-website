---
title: MCP and extensions
description: Plugins, Skills and MCP connections let the Agent reach GitHub, Notion and other outside sources, with permissions always in your hands.
---

Extensions give the Agent in a conversation more abilities: writing meeting notes in a set format, looking into a GitHub repository, or calling your own MCP server. Everything is managed in one place: **Intelligence → Extensions** in settings.

| Type       | What it is                                                                                |
| ---------- | ----------------------------------------------------------------------------------------- |
| **Plugin** | A bundle of abilities, which may include Skills, MCP servers and apps, enabled as a whole |
| **Skill**  | A set of instructions telling the Agent how to handle a kind of task                      |
| **MCP**    | A server that provides tools and resources, such as a database or an internal system      |
| **App**    | An outside account connection that comes with a plugin, such as GitHub, Notion or Linear  |

## Use them in a conversation

In the conversation's **Conversation extensions**, choose plugins, personal Skills or individual MCP connections. Selecting a plugin activates the Skills and servers it contains.

Enabling an extension only makes it available. When the Agent actually needs an outside service, Knovum still asks with **External operation needs approval**, and you choose **Allow** or **Deny**.

## Plugins

Knovum comes with eight plugins marked **Bundled with Knovum**: Space knowledge, Evidence research, Meeting notes, Document delivery, Study companion, and GitHub, Notion and Linear work.

To install more:

1. Browse the catalog in **Discover plugins**, or choose **Install from source** and pick a local folder or a remote address. Plugins from Git can specify a Git reference and a **Package subdirectory**.
2. Choose **Preview** and look at **Review installation** to see what the plugin contains.
3. When it looks right, choose **Install**.

Installing never starts a server or authorizes an account; connections and tool permissions are set up separately. Later you can **Check for updates**, and an update also lists the components it adds and removes before you accept it.

:::caution[Check where it comes from]
For a plugin marked **Publisher identity unverified**, make sure you trust the source before installing. A plugin's instructions shape how the Agent behaves; a familiar name doesn't make the content trustworthy.
:::

## Skills

In **Skills**, choose **Create Skill** and write the **Instructions**, or **Import directory** to use an existing Skill folder. Skills that come with a plugin are switched on and off with the plugin; to change one, **Copy as personal Skill** first.

## Add an MCP server

1. In **MCP**, choose **Add MCP server** and name it.
2. Choose the **Transport**:
   - A local program: choose the installed server's executable (an absolute path) and enter **Arguments** one per field. Each field is one complete argument and is never parsed by a shell.
   - HTTP: enter the **Server URL**. For an address on this computer or your local network, turn on **Allow access to the configured localhost or LAN address**.
3. Choose the **Authorization**: **No authorization**, sensitive headers and environment variables, or OAuth. Tokens and other credentials are entered separately after saving; don't put them in the ordinary configuration.
4. **Add connection**, then choose **Check connection and read catalog** to confirm you can see the server's tools and resources.

## Control tool permissions

Under each connection's **Tool permissions**, every tool starts as **Deny**. Set an **Invocation policy** for each:

- **Deny**: the Agent can't call it.
- **Confirm each invocation**: you're asked before each call.
- **Allow**: called directly.

For tools that truly only read, tick **Reviewed as read-only**. Research tasks can use only tools you have reviewed as read-only. A server's own “read-only” claim is for reference; the judgment is yours.

## Cost

Outside services may charge separately, and that isn't counted in Knovum's token usage.

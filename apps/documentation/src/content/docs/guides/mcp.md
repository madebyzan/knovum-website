---
title: MCP and extensions
description: Configure process or HTTP connections without confusing tools with model providers.
---

## What a connection means

MCP exposes tools/resources to a compatible Agent. It is not a model provider key and does not itself make a disconnected Agent usable. Start in the extensions area for the Agent you intend to use.

## Configure the transport

- **Local process:** specify the executable command, arguments and required environment values. Use the server’s official installation instructions; commands must work on the actual computer.
- **HTTP:** supply the server endpoint and its required headers/authentication. Check that the target Agent supports that configuration.

Name the connection, save it and verify its displayed availability. Test a harmless read-only tool before allowing modifications. Process servers run local software; remote servers can receive tool arguments. Neither boundary should be treated as automatically safe.

## Skills and plugins

Inspect what an extension installs and which executor owns it. Instructions can influence the Agent’s behavior; a familiar name is not a trust guarantee. Keep sensitive values in the intended configuration fields, never public documentation or issue screenshots.

When troubleshooting, distinguish missing executable, invalid endpoint, unavailable authentication and unsupported executor configuration. Do not paste a server example unchanged if it contains someone else’s path or credential.

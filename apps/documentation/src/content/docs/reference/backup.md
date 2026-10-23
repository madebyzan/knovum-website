---
title: Back up and restore the library
description: Make one complete backup of your whole library, and restore it exactly when you need to.
---

A library backup holds all of Knovum's data. Use it for a regular safety copy, or before reinstalling the system. To move a single Space, a [Space package](../export/) is the better fit.

## What a backup contains

| Included                      | Not included                             |
| ----------------------------- | ---------------------------------------- |
| Every Space and its resources | Provider keys and connection credentials |
| Usage history and preferences | Downloaded local models                  |
| Voices and speech resources   | Runtimes, caches and logs                |
| Installed extensions          |                                          |

## Create a backup

1. Let running tasks in the **Tasks** panel finish, or cancel them. A backup can't start while tasks are running.
2. Open settings, go to **Data & archives → Data**, choose **Create backup** and pick where to save it.
3. Confirm **Restart Knovum to create this backup?**. Knovum saves unsaved changes, restarts into maintenance mode, writes the backup and then continues starting up.
4. **Backup created** means you are done. Keep the backup file outside Knovum's data folder, for example on an external drive.

## Restore a backup

:::caution[Restoring replaces all current data]
Restoring doesn't merge: the current library is replaced as a whole by the backup's contents. Before restoring, export any Space you want to keep as a Space package.
:::

1. In **Data & archives → Data**, choose **Restore backup** and pick the backup file.
2. Read the confirmation and confirm the restart. Knovum verifies the whole backup first and replaces the data only if verification passes; if restoring fails, it rolls back to the previous state automatically.
3. When it's done, enter your provider and connection keys again. Local models download again the first time they're used.

A backup must match the current version of Knovum and be restored to its original data location. To move content between computers or installations, use Space packages.

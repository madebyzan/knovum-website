---
title: Back up and restore the library
description: Use the current whole-library backup and distinguish it from Space import.
---

## Choose the right scope

Space packages import into a new Space. A library backup restores application knowledge as a whole. They are different operations; do not use restore when you only want to add one Space.

## Create a backup

1. Finish or stop running tasks; backup/restore controls are blocked while tasks are active.
2. Open Settings → the data backup area.
3. Choose Backup, select a `.knovum-backup` destination and confirm.
4. Resolve any unsaved editors. The operation restarts the application to perform maintenance.
5. Keep the archive outside the application’s private data directory and verify the reported result.

The current backup includes application settings, retained library content, required managed assets and voice resources. Credentials, downloaded models/runtimes, caches and logs are excluded.

## Restore deliberately

Choose an existing backup in the restore area, read the destructive confirmation and resolve unsaved work. Restore replaces the application data set; it is not an additive import. The current format requires the original canonical application-data location; it is not a general cross-location migration format.

Restore removes existing credentials along with excluded local resources. Re-enter provider credentials and prepare needed models afterwards. Preserve your current important Spaces separately before replacing the library. An unsupported format is rejected rather than silently converted.

---
title: Keyboard and editing
description: Use navigation shortcuts without overriding text editing.
---

## Canvas tools

| Key                               | Action                             |
| --------------------------------- | ---------------------------------- |
| V                                 | Select                             |
| H                                 | Pan                                |
| N                                 | Sticky note                        |
| T                                 | Text                               |
| F2                                | Rename a selected persisted object |
| Space + drag / middle-button drag | Pan the canvas                     |

Single-letter tools yield while typing. Rename commits with Enter and cancels with Escape. Text editing and canvas selection are different responders; copy follows the focused editing context rather than always copying a canvas node.

## Editing safely

Undo history retains 100 edits per Space; a fresh edit discards the redo branch. Closing a dirty editor asks Save, Discard or Cancel. Cancelling leaves the editor open, and failed saves do not discard its draft.

Use Outline Locate to reveal a target inside its containing Group/Section. Avoid interpreting a hidden object as deleted merely because the current view is elsewhere.

The documentation search shortcut is Cmd/Ctrl+K. It belongs to this website, not a claim that every product surface uses the same shortcut.

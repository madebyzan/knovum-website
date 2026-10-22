# Editorial verification ledger

These are user-facing guides, not a copy of the desktop engineering handbook. This initial edition
covers installation, first Space, capture, organization, search, grounded questions, structured
knowledge, transcription, creation, export, privacy and troubleshooting in English and Chinese.

## Verified implementation sources

Sources below refer to the sibling **desktop product repository**, not this website repository.

| Guide family             | Product evidence inspected                                                                    |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| Installation             | `docs/installation.md`, `docs/platform-matrix.md`, product installer rules                    |
| Capture and organization | `docs/spaces.md`, especially managed copies, canvas tools, Groups/Sections, editor protection |
| Search and citations     | `docs/knowledge.md`, `docs/local-models.md`, `docs/commands.md`                               |
| Local transcription      | `docs/local-models.md`, media transcript contract in `docs/spaces.md`                         |
| Creation                 | `docs/spaces.md`, SpaceAction and derivation commands in `docs/commands.md`                   |
| Export and portability   | `docs/resource-export.md`, package/JSON Canvas behavior in `docs/spaces.md`                   |
| Privacy                  | `docs/secrets.md`, `docs/data-ownership.md`, Sensitive Information boundary                   |
| Shortcuts and settings   | `src/features/spaces/commands/`, `src/features/settings/ai/settings-definition.ts`            |

## Important corrections to older summaries

- Whole-library backup is implemented in Settings and the Rust backup subsystem. It is distinct from automatic backups; older Space notes saying it was removed are not authoritative.
- Do not claim scanned-PDF OCR happens automatically: current document extraction does not run an AI job after parsing.
- Document export reflows semantic content; it does not preserve arbitrary Office layout.
- Opening a Space does not download a missing embedding model; semantic preparation is explicit.
- Transcription currently detects one language, so mixed-language recording limitations must remain visible.
- Imported files are managed copies, not a promised sync relationship with external originals.

## Publication standard

Update both languages with the same behavior change. Check code whenever engineering notes disagree.
Use real product screenshots only after obtaining and verifying them; do not pass illustrated website
demos off as screenshots. Video/image editing, speech projects, dubbing, provider setup, local model management, desktop
Agents, MCP/extensions, backup/restore and keyboard reference now have dedicated paired chapters.
Backup verification reads `src/features/settings/backup/use-backup-operations.ts`,
`src-tauri/src/backup/` and the current backup contract in `docs/desktop-foundation.md`.
Video verification reads `src/features/spaces/video-editing/project.ts` and its model schema.
MCP transport verification reads the extension connection endpoint components.

## Generated HTML validation

Starlight and rendered Markdown emit both legal HTML5 void-element spellings and HTML5-valid
`_top` IDs; this application’s validator accepts those conventions. Vendor theme/menu buttons rely on the HTML default button type outside
forms. The static output also contains responsive desktop/mobile navigation duplicates; static
`unique-landmark` cannot account for their CSS visibility. Those two recommendations are not used as
static gates for vendor markup. Browser axe checks retain label, landmark and accessible-name tests
on rendered desktop and mobile pages. Project-owned search buttons still declare explicit types.

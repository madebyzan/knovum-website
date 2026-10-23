/**
 * The manual's reading order. Groups follow the reader's progress: get started, learn by doing a
 * complete piece of work, look up a feature, then reference material for occasional tasks.
 */
export const SIDEBAR = [
  {
    label: "Start here",
    translations: { "zh-CN": "开始使用" },
    items: [
      "index",
      "getting-started/concepts",
      "getting-started/installation",
      "getting-started/first-space",
    ],
  },
  {
    label: "Tutorials",
    translations: { "zh-CN": "场景教程" },
    items: ["tutorials/interviews", "tutorials/meetings"],
  },
  {
    label: "Work with sources",
    translations: { "zh-CN": "资料与知识" },
    items: [
      "guides/capture",
      "guides/organization",
      "guides/transcription",
      "guides/search",
      "guides/ask",
      "guides/knowledge",
    ],
  },
  {
    label: "Create",
    translations: { "zh-CN": "创作" },
    items: [
      "guides/creation",
      "guides/image-editing",
      "guides/video-editing",
      "guides/speech-projects",
      "guides/dubbing",
    ],
  },
  {
    label: "AI and models",
    translations: { "zh-CN": "AI 与模型" },
    items: ["guides/providers", "guides/local-models", "guides/agents", "guides/mcp"],
  },
  {
    label: "Reference",
    translations: { "zh-CN": "参考" },
    items: [
      "reference/faq",
      "reference/privacy",
      "reference/shortcuts",
      "reference/export",
      "reference/backup",
      "reference/troubleshooting",
    ],
  },
];

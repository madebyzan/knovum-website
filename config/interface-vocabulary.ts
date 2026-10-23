/**
 * Words the desktop app does not use, mapped to the label people actually see on screen. Website copy
 * and documentation must name things the way the interface does, or readers cannot find them.
 * Sourced from the app's `src/foundation/i18n/locales/{en,zh-CN}` catalogues.
 */
export const RETIRED_TERMS = {
  en: {
    "Knowledge Health": "Knowledge checks",
    "Task Center": "Tasks",
    "saved view": "scene",
  },
  zh: {
    Space: "空间",
    Inbox: "收集箱",
    知识健康: "知识检查",
    主张: "观点",
    反驳: "反证",
    任务中心: "「任务」面板",
    便笺: "便签",
    区段: "分区",
    保存视图: "场景",
    Portal: "空间入口",
    转写: "转录",
    音频笔记: "录音笔记",
  },
} as const satisfies Record<"en" | "zh", Record<string, string>>;

export type VocabularyLocale = keyof typeof RETIRED_TERMS;

const HAN = /\p{Script=Han}/u;

function pattern(term: string): RegExp {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // Chinese has no word boundaries; Latin terms must stand alone so "Spaces" ≠ "Space" inside a URL slug.
  return HAN.test(term)
    ? new RegExp(escaped, "u")
    : new RegExp(`(?<![\\p{L}/-])${escaped}(?![\\p{L}/-])`, "iu");
}

/** Retired terms that appear in `text`. Accepted labels that contain a retired word are not matches. */
export function findRetiredTerms(text: string, locale: VocabularyLocale): string[] {
  const vocabulary: Readonly<Record<string, string>> = RETIRED_TERMS[locale];
  const masked = Object.values(vocabulary).reduce((current, label) => current.replaceAll(label, " "), text);
  return Object.keys(vocabulary).filter((term) => pattern(term).test(masked));
}

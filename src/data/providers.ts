/**
 * AI providers Knovum connects to, by their own product names, with their marks from LobeHub's
 * brand icon set. A provider added here is drawn everywhere providers are listed.
 */
import anthropic from "@lobehub/icons-static-svg/icons/anthropic.svg?raw";
import deepseek from "@lobehub/icons-static-svg/icons/deepseek.svg?raw";
import doubao from "@lobehub/icons-static-svg/icons/doubao.svg?raw";
import gemini from "@lobehub/icons-static-svg/icons/gemini.svg?raw";
import grok from "@lobehub/icons-static-svg/icons/grok.svg?raw";
import groq from "@lobehub/icons-static-svg/icons/groq.svg?raw";
import kling from "@lobehub/icons-static-svg/icons/kling.svg?raw";
import minimax from "@lobehub/icons-static-svg/icons/minimax.svg?raw";
import mistral from "@lobehub/icons-static-svg/icons/mistral.svg?raw";
import moonshot from "@lobehub/icons-static-svg/icons/moonshot.svg?raw";
import ollama from "@lobehub/icons-static-svg/icons/ollama.svg?raw";
import openai from "@lobehub/icons-static-svg/icons/openai.svg?raw";
import openrouter from "@lobehub/icons-static-svg/icons/openrouter.svg?raw";
import qwen from "@lobehub/icons-static-svg/icons/qwen.svg?raw";
import siliconcloud from "@lobehub/icons-static-svg/icons/siliconcloud.svg?raw";
import stepfun from "@lobehub/icons-static-svg/icons/stepfun.svg?raw";
import together from "@lobehub/icons-static-svg/icons/together.svg?raw";
import zhipu from "@lobehub/icons-static-svg/icons/zhipu.svg?raw";

import { parseBrandLogo, type BrandLogo } from "@/lib/brand-logo";

export interface Provider {
  readonly name: string;
  readonly logo: BrandLogo;
}

export const providers: readonly Provider[] = [
  { name: "OpenAI", logo: openai },
  { name: "Anthropic", logo: anthropic },
  { name: "Google Gemini", logo: gemini },
  { name: "DeepSeek", logo: deepseek },
  { name: "Qwen", logo: qwen },
  { name: "Zhipu", logo: zhipu },
  { name: "Moonshot", logo: moonshot },
  { name: "Doubao", logo: doubao },
  { name: "MiniMax", logo: minimax },
  { name: "StepFun", logo: stepfun },
  // SiliconFlow's model platform is SiliconCloud, and carries its mark.
  { name: "SiliconFlow", logo: siliconcloud },
  { name: "Mistral", logo: mistral },
  { name: "Groq", logo: groq },
  { name: "Grok", logo: grok },
  { name: "Together", logo: together },
  { name: "OpenRouter", logo: openrouter },
  { name: "Kling", logo: kling },
  { name: "Ollama", logo: ollama },
].map(({ name, logo }) => ({ name, logo: parseBrandLogo(logo) }));

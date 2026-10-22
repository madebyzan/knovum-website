/**
 * The on-device capabilities, as facts. Model names are the same in every language; a
 * capability's name and its group's description are copy and live in each dictionary under the same
 * id. Adding a capability is one line here and its name in each dictionary; everything that lists
 * capabilities, and every count of them, follows.
 */

/** What a capability works on. Each group is shown with a live demo of its own. */
export const CAPABILITY_GROUPS = ["audio", "image", "search"] as const;

export type CapabilityGroup = (typeof CAPABILITY_GROUPS)[number];

interface Capability {
  readonly id: string;
  readonly group: CapabilityGroup;
  /** `null` when the capability is composed from the others rather than backed by one model. */
  readonly model: string | null;
}

export const capabilities = [
  { id: "transcription", group: "audio", model: "Whisper + Silero VAD" },
  { id: "diarization", group: "audio", model: "Pyannote 3.0 + ERes2Net" },
  { id: "separation", group: "audio", model: "Spleeter" },
  { id: "speech", group: "audio", model: "MOSS-TTS-Nano, VoxCPM2" },
  { id: "alignment", group: "audio", model: "Qwen3 Forced Aligner" },
  { id: "backgroundRemoval", group: "image", model: "U²-Net" },
  { id: "upscaling", group: "image", model: "Real-ESRGAN" },
  { id: "inpainting", group: "image", model: "MI-GAN" },
  { id: "smartSelection", group: "image", model: "EfficientSAM" },
  { id: "depth", group: "image", model: "Depth Anything V2" },
  { id: "layerSplitting", group: "image", model: null },
  { id: "embeddings", group: "search", model: "Qwen3-Embedding-0.6B" },
] as const satisfies readonly Capability[];

export type CapabilityId = (typeof capabilities)[number]["id"];

export type CapabilityOf = (typeof capabilities)[number];

/** The capabilities in a group, in the order they are listed above. */
export function capabilitiesIn(group: CapabilityGroup): readonly CapabilityOf[] {
  return capabilities.filter((capability) => capability.group === group);
}

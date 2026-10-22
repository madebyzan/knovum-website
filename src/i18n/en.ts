import type { Dictionary } from "./dictionary";

const NBSP = "\u00a0";

const en: Dictionary = {
  meta: {
    title: "Knovum — The local-first knowledge workspace",
    description:
      "Notes, recordings, saved pages and documents on one infinite canvas, with on-device AI and answers that cite their sources. For macOS and Windows.",
  },

  a11y: {
    skipToContent: "Skip to content",
    primaryNavigation: "Primary",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    productIllustration:
      "Illustration of a Knovum Space: a note, a recording and a saved article support a claim, and a document is created from them with its sources recorded.",
  },

  nav: {
    sections: {
      features: "Features",
      onDeviceAi: "On-device AI",
      workflow: "How it works",
      download: "Download",
    },
    download: "Download",
  },

  hero: {
    announcement: (version) => `Knovum ${version} is out`,
    releaseNotes: "Release notes",
    title: ["All your sources.", "One canvas."],
    lead: "Knovum is a local-first knowledge workspace. Notes, recordings, saved pages and documents sit side by side on an infinite canvas — and every result AI helps you make remembers exactly where it came from.",
    downloadAction: "Download Knovum",
    sourceAction: "View on GitHub",
    availability: `macOS${NBSP}14+ · Windows${NBSP}10+ · Free for personal use`,
  },

  canvas: {
    space: "Customer interviews",
    outline: "Outline",
    relation: "supports",
    note: {
      kind: "Note",
      title: "Why do teams stop after the trial?",
      body: "Three of five interviews mention losing the data they imported.",
    },
    recording: {
      kind: "Recording",
      title: "Interview 3",
      duration: "42:18",
      quote: "“Once our trial data was gone, we never came back.”",
    },
    capture: {
      kind: "Saved page",
      source: "Article · 8 min read",
      title: "The onboarding gap",
      body: "Teams that keep their own data through a trial are far more likely to stay.",
    },
    claim: {
      kind: "Claim",
      text: "Teams leave when their data does — not because of price.",
      support: "3 supporting · 0 contradicting",
    },
    document: {
      kind: "Document",
      title: "Retention memo",
      paragraphs: [
        "Churn after the trial follows the loss of imported data more closely than it follows price.",
        "We recommend keeping trial workspaces for 30 days after expiry, so returning teams find their work intact.",
      ],
      trail: "Created from 3 sources",
      trailDetail: "Revisions pinned · Action run recorded",
    },
  },

  statement:
    "Knowledge work rarely stays in one format. A recording sits beside a saved article, a screenshot, an open question and a half-finished draft. The valuable part is how they connect — so Knovum keeps them together, and keeps the connections.",

  features: {
    title: "Built for work that has to hold up.",
    items: [
      {
        title: "A free canvas, with structure underneath",
        body: "Lay out notes, media and documents however you think. When an argument takes shape, turn it into claims, evidence and questions joined by real relations — and Knowledge Health points out what isn’t supported yet.",
      },
      {
        title: "Answers you can check",
        body: "Ask your own sources. Every citation points to the exact place it came from — a moment in a recording, a page in a PDF, a line of code — and tells you when that source has changed.",
      },
      {
        title: "A record behind every result",
        body: "Documents, images, audio and video made from your material keep their trail: which inputs and revisions they used, what action ran, and which model produced them. Sources can change later; results are never silently rewritten.",
      },
      {
        title: "Private by default",
        body: "Your library is local SQLite and vector storage on your own machine. Transcription, embeddings and search run on-device. Cloud models are optional, and each action sends only the context it needs.",
      },
    ],
    structure: {
      contradicts: "contradicts",
      evidence: [
        { kind: "Recording", title: "Interview 3 · 18:42" },
        { kind: "Saved page", title: "The onboarding gap" },
        { kind: "Survey", title: "Pricing survey, Q3" },
      ],
      health: "Knowledge Health",
      healthDetail: "1 contradiction to resolve",
    },
    citation: {
      answer: ["Most teams leave once the data they imported is gone.", "Price comes up far less often."],
      sources: [
        { kind: "Recording", title: "Interview 3", at: "18:42" },
        { kind: "PDF", title: "Pricing survey", at: `p.${NBSP}12` },
      ],
      changed: "Changed since cited",
    },
    trail: {
      inputs: "Inputs",
      steps: "Steps",
      created: "Created",
      actions: [
        { action: "Transcribe", engine: "Whisper, on-device" },
        { action: "Draft document", engine: "Your AI connection" },
      ],
      note: "Sources can change. This record won’t.",
    },
    privacy: {
      device: "Your computer",
      parts: [
        { name: "Library", detail: "SQLite" },
        { name: "Vectors", detail: "Local index" },
        { name: "Transcription", detail: "whisper.cpp" },
        { name: "Search", detail: "On-device" },
      ],
      cloud: "Cloud model",
      optional: "Optional",
      boundary: "Only the context an action needs",
    },
  },

  workflow: {
    title: "From a question to a finished piece of work.",
    steps: [
      {
        title: "Gather",
        body: "Clip a page or a video by URL, drop in recordings, documents, images and code, and write notes beside them. Every capture keeps where it came from.",
      },
      {
        title: "Connect",
        body: "Add claims, evidence and decisions as typed knowledge, and link them with relations like supports and contradicts.",
      },
      {
        title: "Create",
        body: "Ask a question against your sources, or select material and turn it into a document, an image, a video or subtitles.",
      },
      {
        title: "Trace",
        body: "Open any result to see what made it: the inputs and their revisions, the action that ran, and the engine or model behind it.",
      },
    ],
  },

  onDevice: {
    kicker: (count) => `On-device AI · ${String(count)} capabilities`,
    title: "AI that runs on your own computer.",
    lead: "Each model downloads once, the first time you need it — checksum-pinned, cancellable from the Task Center, and Metal-accelerated on Apple silicon.",
    groups: {
      audio: {
        title: "Listen",
        body: "Recordings become transcripts with speakers, clean stems and captions timed to the word.",
      },
      image: {
        title: "See",
        body: "Cut out, enlarge, repair and take apart images, right on the canvas.",
      },
      search: {
        title: "Find",
        body: "Search by meaning across everything in your library, without sending it anywhere.",
      },
    },
    capabilities: {
      transcription: "Speech transcription",
      diarization: "Speaker diarization",
      separation: "Vocal and accompaniment separation",
      speech: "Speech synthesis, voice cloning and design",
      alignment: "Word-level caption alignment",
      embeddings: "Semantic search embeddings",
      backgroundRemoval: "Background removal",
      upscaling: "Image upscaling",
      inpainting: "Inpainting and repair",
      smartSelection: "Smart selection",
      depth: "Relative depth estimation",
      layerSplitting: "Layer splitting",
    },
    listen: {
      speaker: (number) => `Speaker ${String(number)}`,
      lines: [
        "How long did your team use it before you decided?",
        "About three weeks. Once our trial data was gone, we never came back.",
        "So it wasn’t the price?",
      ],
    },
    see: {
      original: "Original",
      upscaled: (factor) => `Upscaled ×${String(factor)}`,
      compare: "Compare the original with the upscaled image",
    },
    find: {
      query: "Why do teams stop after the trial?",
      mode: "By meaning",
    },
    composedModel: "Composed from the image capabilities",
    note: "Image and video generation are cloud capabilities, routed to the connection you choose.",
  },

  providers: {
    title: "Local by default. AI by choice.",
    body: "Canvas editing, search, transcription and semantic indexing work without any AI connection. When you want generated results, connect the provider you already use — or hand the work to a desktop agent with its own credentials.",
    anyCompatible: "any OpenAI-compatible endpoint",
    footnote: "Keys stay in a dedicated local secrets store and are never written to logs.",
  },

  download: {
    title: "Put it all on one canvas.",
    body: (version, date) => `Version ${version}, released ${date}. Free for personal, noncommercial use.`,
    platforms: {
      macos: { name: "macOS", requirement: `macOS${NBSP}14 or later` },
      windows: { name: "Windows", requirement: `Windows${NBSP}10 version${NBSP}2004 or later` },
    },
    installers: {
      "macos-arm64": "Apple silicon",
      "macos-x64": "Intel",
      "windows-x64": "64-bit (x64)",
    },
    downloadFor: (platform) => `Download for ${platform},`,
    releaseNotes: "Release notes",
    allReleases: "All releases",
  },

  footer: {
    tagline: "The local-first knowledge workspace.",
    productTitle: "Product",
    projectTitle: "Project",
    languageTitle: "Language",
    links: {
      github: "GitHub",
      releases: "Releases",
      contributing: "Contributing",
      issues: "Report an issue",
      security: "Security",
    },
    licenseNote: "Source-available under the Knovum Personal Noncommercial License 1.0.",
  },

  notFound: {
    title: "This page isn’t here.",
    body: "The link may be out of date, or the page has moved.",
    back: "Back to the home page",
  },
};

export default en;

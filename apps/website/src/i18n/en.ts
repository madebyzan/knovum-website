import type { Dictionary } from "./dictionary";

const NBSP = "\u00a0";

const en: Dictionary = {
  meta: {
    title: "Knovum — Answers that cite your own sources",
    description:
      "Recordings, web pages, documents and notes on one local canvas. Transcribe and search on your computer; every answer cites the original. macOS and Windows.",
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
    documentation: "Documentation",
    sections: {
      useCases: "Use cases",
      features: "Features",
      onDeviceAi: "On-device AI",
      workflow: "How it works",
      questions: "FAQ",
      download: "Download",
    },
    download: "Download",
  },

  hero: {
    announcement: (version) => `Knovum ${version} is out`,
    releaseNotes: "Release notes",
    title: ["Every answer,", "back to its source."],
    lead: "Knovum keeps recordings, web pages, documents and notes on one canvas on your computer. Transcribe and search them locally, then ask questions of your own material — every answer cites the page, the sentence, the moment in the recording.",
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

  useCases: {
    title: "Arrive with a question. Leave with work you can defend.",
    lead: "Four ways people use Knovum most. Each has a tutorial: follow the same steps and you get the same result.",
    labels: { bring: "You bring", work: "In Knovum", result: "You leave with" },
    guide: "Follow the tutorial",
    items: {
      interviews: {
        audience: "User research",
        title: "Find the real reason in hours of interviews",
        bring: "A handful of customer interviews, each forty minutes long.",
        work: "Transcribe them on your computer with speakers separated, then ask why people leave after the trial.",
        result:
          "A findings memo where every reason links to the moment in the recording. One click plays the original words.",
      },
      meetings: {
        audience: "Meetings and lectures",
        title: "Turn an hour of audio into notes you can search",
        bring: "A meeting or lecture recording, or an audio note taken on the spot.",
        work: "Transcribe it, jump back to any moment by its timestamp, and ask what was decided and who owns it.",
        result: "Notes organized by topic. Every decision traces back to what was actually said.",
      },
      research: {
        audience: "Research and writing",
        title: "Turn saved pages and PDFs into an argument that holds",
        bring: "Saved articles, report PDFs and your own notes.",
        work: "Shape them into claims and evidence, let Knowledge checks flag what still lacks support, then draft from the selection.",
        result:
          "A draft that remembers which sources and revisions it used, and tells you when a source changes.",
      },
      video: {
        audience: "Video",
        title: "Subtitle a video, then give it another language",
        bring: "An explainer or an interview on video.",
        work: "Recognize speech on your computer and burn in subtitles. When you need to, separate the voice from the background and generate a dub.",
        result:
          "A new version of the video. The original stays untouched; every subtitle and line of the dub stays editable.",
      },
    },
  },

  features: {
    title: "Built for work that has to hold up.",
    items: [
      {
        title: "A free canvas, with structure underneath",
        body: "Lay out notes, media and documents however you think. When an argument takes shape, turn it into claims, evidence and questions joined by real relations — and Knowledge checks point out what isn’t supported yet.",
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
      health: "Knowledge checks",
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
    lead: "Each model downloads once, the first time you need it — checksum-pinned, cancellable from the Tasks panel, and Metal-accelerated on Apple silicon.",
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
    modelOperations: {
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

  questions: {
    title: "Questions",
    items: [
      {
        question: "Is Knovum free?",
        answer:
          "Free for personal, non-commercial use. The source code is published under the Knovum Personal Non-Commercial License 1.0 and is on GitHub.",
      },
      {
        question: "Does it need an internet connection?",
        answer:
          "Editing the canvas, search and transcription run on your computer and work offline once their models are downloaded. Saving a web page, the first download of a model and cloud AI services need a connection.",
      },
      {
        question: "Where is my material stored?",
        answer:
          "On your own computer: the library, copies of your files and the search index are all local. Content leaves only when you choose a cloud AI service, and then only what that operation needs.",
      },
      {
        question: "Do I need an AI provider key?",
        answer:
          "No. Organizing, search, transcription and semantic indexing don’t depend on any AI connection. When you want generated answers, documents or images, connect a provider you already use, or a desktop Agent with its own account.",
      },
      {
        question: "Do I need a dedicated GPU?",
        answer:
          "No. The core runs on an ordinary computer, and Macs with Apple silicon use Metal to speed up transcription and embeddings. A few optional features, such as voice cloning, need more memory; the documentation lists the requirements.",
      },
      {
        question: "What can I bring in?",
        answer:
          "Web links, Markdown, PDFs, Office documents, images, audio and video, plus notes written straight onto the canvas. A single file can be up to 8 GiB.",
      },
      {
        question: "How is it different from a notes app or a chatbot?",
        answer:
          "A notes app stores your material; a chatbot gives you an answer. Knovum joins the two: answers come from your own material, and every sentence shows where it came from, so you can check it.",
      },
      {
        question: "Which systems are supported?",
        answer: "macOS 14 or later, on Apple silicon and Intel; Windows 10 version 2004 or later, 64-bit.",
      },
    ],
    more: "More questions in the documentation",
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

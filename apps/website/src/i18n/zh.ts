import type { Dictionary } from "./dictionary";

const zh: Dictionary = {
  meta: {
    title: "Knovum — 每个回答都有出处的本地知识工作台",
    description:
      "把录音、网页、文档和笔记放在同一张本地画布上，在本机转录与搜索，向自己的资料提问；每个回答都带引用，点开就是原文。支持 macOS 与 Windows。",
  },

  a11y: {
    skipToContent: "跳到正文",
    primaryNavigation: "主导航",
    menu: "菜单",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    productIllustration:
      "Knovum 空间示意图：一条笔记、一段录音和一篇收藏的文章共同支持一个观点，并由它们生成一份记录了来源的文档。",
  },

  nav: {
    documentation: "产品文档",
    sections: {
      useCases: "用途",
      features: "功能",
      onDeviceAi: "端侧 AI",
      workflow: "工作方式",
      questions: "常见问题",
      download: "下载",
    },
    download: "下载",
  },

  hero: {
    announcement: (version) => `Knovum ${version} 已发布`,
    releaseNotes: "更新说明",
    title: ["每个结论，", "都找得到原话。"],
    lead: "Knovum 把录音、网页、文档和笔记放在同一张本地画布上。在本机转录、搜索，再向自己的资料提问——每个回答都附带引用，点开就是那一页、那一句、录音里的那一刻。",
    downloadAction: "下载 Knovum",
    sourceAction: "在 GitHub 查看",
    availability: "macOS 14+ · Windows 10+ · 个人使用免费",
  },

  canvas: {
    outline: "大纲",
    space: "用户访谈",
    relation: "支持",
    note: {
      kind: "笔记",
      title: "为什么团队试用结束就不用了？",
      body: "五场访谈里有三场提到，导入的数据丢了。",
    },
    recording: {
      kind: "录音",
      title: "访谈 3",
      duration: "42:18",
      quote: "“试用期的数据一没了，我们就再也没回来。”",
    },
    capture: {
      kind: "网页收藏",
      source: "文章 · 阅读约 8 分钟",
      title: "上手期的断层",
      body: "试用期间能保留自己数据的团队，留下来的可能性高得多。",
    },
    claim: {
      kind: "观点",
      text: "团队离开，是因为数据没了，而不是因为价格。",
      support: "3 条支持 · 0 条反证",
    },
    document: {
      kind: "文档",
      title: "留存分析备忘",
      paragraphs: [
        "试用结束后的流失，与导入数据的丢失关系更密切，与价格关系不大。",
        "建议试用到期后继续保留工作区 30 天，让回来的团队能看到完整的工作。",
      ],
      trail: "由 3 个来源生成",
      trailDetail: "已固定修订版本 · 已记录执行过程",
    },
  },

  statement:
    "知识工作很少只有一种形态。一段录音旁边，是收藏的文章、截图、悬而未决的问题和写了一半的草稿。真正有价值的是它们之间的联系——所以 Knovum 把它们放在一起，也把联系留下来。",

  useCases: {
    title: "带着一个问题来，带走一份有依据的成果。",
    lead: "这是 Knovum 最常见的四种用法。每一种都有配套教程，照着做一遍，就能得到同样的结果。",
    labels: { bring: "你带来", work: "在 Knovum 里", result: "你得到" },
    guide: "跟着教程做一遍",
    items: {
      interviews: {
        audience: "用户研究",
        title: "从访谈录音里找到真正的原因",
        bring: "几段用户访谈录音，每段几十分钟。",
        work: "在本机转录并区分说话人，然后问：用户为什么在试用结束后离开？",
        result: "一份结论备忘。每条原因都连着录音里的具体时刻，点一下就能回听原话。",
      },
      meetings: {
        audience: "会议与课程",
        title: "把一小时的录音变成能查的纪要",
        bring: "一场会议或一节课的录音，或者当场录一条录音笔记。",
        work: "转录后按时间戳跳回原处，再问：这次定了什么，谁来负责？",
        result: "按议题整理的纪要。每一项决定，都能追溯到当时的发言。",
      },
      research: {
        audience: "研究与写作",
        title: "把一堆网页和 PDF 写成站得住的文章",
        bring: "收藏的文章、报告 PDF，以及你自己的笔记。",
        work: "整理成观点与证据，让「知识检查」指出还缺支持的观点，再从选中的资料起草文档。",
        result: "一篇文档草稿，记得自己用了哪些来源、哪个版本；来源后来改了，你也会知道。",
      },
      video: {
        audience: "视频内容",
        title: "给视频配上字幕，换一种语言",
        bring: "一段讲解或采访视频。",
        work: "在本机识别语音并烧录字幕；需要时分离人声与背景声，再生成配音。",
        result: "一个新的视频版本。原片保持不动，字幕和配音都能逐句修改。",
      },
    },
  },

  features: {
    title: "为经得起推敲的工作而设计。",
    items: [
      {
        title: "自由的画布，严谨的结构",
        body: "笔记、媒体与文档，按你的思路在画布上摆放。论点成形时，把它们整理成观点、证据与问题，用真实的关系连起来；「知识检查」会指出哪些还缺少支持。",
      },
      {
        title: "可以核对的回答",
        body: "向你自己的资料提问。每条引用都指向确切位置——录音里的某一刻、PDF 的某一页、代码的某一行；来源变了，它也会如实告诉你。",
      },
      {
        title: "每个结果都有据可查",
        body: "用素材生成的文档、图片、音频与视频都留有完整记录：用了哪些输入和版本、执行了什么操作、由哪个模型完成。来源之后可以修改，结果不会被悄悄改写。",
      },
      {
        title: "默认私密",
        body: "资料库就是你电脑上的本地 SQLite 与向量存储。转录、向量化与搜索都在本地完成。云端模型可选，每次操作只发送它需要的上下文。",
      },
    ],
    structure: {
      contradicts: "反证",
      evidence: [
        { kind: "录音", title: "访谈 3 · 18:42" },
        { kind: "网页收藏", title: "上手期的断层" },
        { kind: "问卷", title: "定价调研 · 第三季度" },
      ],
      health: "知识检查",
      healthDetail: "有 1 处反证待处理",
    },
    citation: {
      answer: ["多数团队离开，是因为导入的数据没了。", "价格被提到的次数要少得多。"],
      sources: [
        { kind: "录音", title: "访谈 3", at: "18:42" },
        { kind: "PDF", title: "定价调研", at: "第 12 页" },
      ],
      changed: "引用后已更新",
    },
    trail: {
      inputs: "输入",
      steps: "步骤",
      created: "生成于",
      actions: [
        { action: "转录", engine: "Whisper · 本地" },
        { action: "起草文档", engine: "你配置的 AI 连接" },
      ],
      note: "来源可以改，这份记录不会。",
    },
    privacy: {
      device: "你的电脑",
      parts: [
        { name: "资料库", detail: "SQLite" },
        { name: "向量", detail: "本地索引" },
        { name: "转录", detail: "whisper.cpp" },
        { name: "搜索", detail: "本地完成" },
      ],
      cloud: "云端模型",
      optional: "可选",
      boundary: "只发送这次操作需要的上下文",
    },
  },

  workflow: {
    title: "从一个问题，到一件成品。",
    steps: [
      {
        title: "汇集",
        body: "通过链接收藏网页或视频，拖入录音、文档、图片与代码，在旁边写下笔记。每一份素材都保留出处。",
      },
      {
        title: "关联",
        body: "把观点、证据与决策作为结构化的知识加入画布，用「支持」「反证」等关系把它们连起来。",
      },
      {
        title: "创作",
        body: "针对自己的资料提问；或者选中素材，生成文档、图片、视频或字幕。",
      },
      {
        title: "追溯",
        body: "打开任何一个结果，看清它由什么产生：输入及其版本、执行的操作，以及背后的引擎或模型。",
      },
    ],
  },

  onDevice: {
    kicker: (count) => `端侧 AI · ${String(count)} 项能力`,
    title: "在你自己电脑上运行的 AI。",
    lead: "每个模型只在第一次用到时下载一次——校验和固定、可在「任务」面板随时取消，并在 Apple 芯片上启用 Metal 加速。",
    groups: {
      audio: { title: "听", body: "录音变成带说话人的文字稿、干净的分轨，以及逐字对齐的字幕。" },
      image: { title: "看", body: "抠图、放大、修复、拆分图层，都在画布上直接完成。" },
      search: { title: "找", body: "按意思搜索整个资料库，内容不必离开你的电脑。" },
    },
    modelOperations: {
      transcription: "语音转录",
      diarization: "说话人分离",
      separation: "人声与伴奏分离",
      speech: "语音合成、声音克隆与设计",
      alignment: "逐词字幕对齐",
      embeddings: "语义搜索向量化",
      backgroundRemoval: "背景移除",
      upscaling: "图片超分辨率",
      inpainting: "图像修复",
      smartSelection: "智能选择",
      depth: "相对深度估计",
      layerSplitting: "图层拆分",
    },
    listen: {
      speaker: (number) => `说话人 ${String(number)}`,
      lines: [
        "你们团队用了多久才做决定？",
        "大概三周。试用期的数据一没了，我们就再也没回来。",
        "所以不是价格的问题？",
      ],
    },
    see: {
      original: "原图",
      upscaled: (factor) => `放大 ${String(factor)} 倍`,
      compare: "对比原图与放大后的图片",
    },
    find: {
      query: "为什么团队试用结束后就不用了？",
      mode: "按语义",
    },
    composedModel: "由图像能力组合而成",
    note: "图片与视频生成属于云端能力，会交给你配置的连接来完成。",
  },

  providers: {
    title: "默认本地，AI 由你选择。",
    body: "画布编辑、搜索、转录与语义索引，都不需要任何 AI 连接。需要生成内容时，接入你已经在用的服务商；也可以交给自带凭据的桌面 Agent。",
    anyCompatible: "任意 OpenAI 兼容接口",
    footnote: "密钥保存在本地专用的密钥库中，不会写入日志。",
  },

  questions: {
    title: "常见问题",
    items: [
      {
        question: "Knovum 收费吗？",
        answer: "个人非商业使用免费。源代码依据 Knovum 个人非商业许可 1.0 公开，可以在 GitHub 上查看。",
      },
      {
        question: "必须联网才能用吗？",
        answer:
          "画布编辑、搜索和转录都在本机完成，所需模型下载好之后可以离线使用。收藏网页、第一次下载模型，以及调用云端 AI 服务时需要网络。",
      },
      {
        question: "我的资料存在哪里？",
        answer:
          "存在你自己的电脑上，资料库、文件副本和搜索索引都在本地。只有当你选择云端 AI 服务时，才会把那一次操作需要的内容发给它。",
      },
      {
        question: "一定要有 AI 服务的密钥吗？",
        answer:
          "不需要。整理、搜索、转录和语义索引都不依赖任何 AI 连接。要生成回答、文档或图片时，再接入你已经在用的服务商，或者交给自带账号的桌面 Agent。",
      },
      {
        question: "需要独立显卡吗？",
        answer:
          "不需要，核心功能在普通电脑上就能运行。Apple 芯片的 Mac 会用 Metal 加速转录和向量计算。声音克隆等少数可选功能对内存要求更高，文档里写明了具体条件。",
      },
      {
        question: "可以放进哪些资料？",
        answer:
          "网页链接、Markdown、PDF、Office 文档、图片、音频和视频，以及直接写在画布上的笔记。单个文件最大 8 GiB。",
      },
      {
        question: "和笔记软件、聊天机器人有什么区别？",
        answer:
          "笔记软件帮你存放资料，聊天机器人给你一个回答。Knovum 把两者接在一起：回答来自你自己的资料，每一句都标明出处，可以逐条核对。",
      },
      {
        question: "支持哪些系统？",
        answer: "macOS 14 及以上，支持 Apple 芯片与 Intel 芯片；Windows 10 2004 及以上的 64 位版本。",
      },
    ],
    more: "在文档里查看更多问题",
  },

  download: {
    title: "把一切，放到一张画布上。",
    body: (version, date) => `版本 ${version}，发布于 ${date}。个人非商业使用免费。`,
    platforms: {
      macos: { name: "macOS", requirement: "macOS 14 或更高版本" },
      windows: { name: "Windows", requirement: "Windows 10 2004 或更高版本" },
    },
    installers: {
      "macos-arm64": "Apple 芯片",
      "macos-x64": "Intel 芯片",
      "windows-x64": "64 位（x64）",
    },
    downloadFor: (platform) => `下载 ${platform} 版：`,
    releaseNotes: "更新说明",
    allReleases: "全部版本",
  },

  footer: {
    tagline: "本地优先的知识工作台。",
    productTitle: "产品",
    projectTitle: "项目",
    languageTitle: "语言",
    links: {
      github: "GitHub",
      releases: "版本发布",
      contributing: "参与贡献",
      issues: "反馈问题",
      security: "安全",
    },
    licenseNote: "依据 Knovum 个人非商业许可 1.0 公开源代码。",
  },

  notFound: {
    title: "这个页面不存在。",
    body: "链接可能已经过期，或者页面已经移动。",
    back: "返回首页",
  },
};

export default zh;

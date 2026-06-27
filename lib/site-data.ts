export const siteConfig = {
  name: "Magnii",
  title: "Magnii | 产品经理与 AI 内容创作者",
  description: "用产品思维和 AI 工具构建属于自己的内容生态。",
  url: "https://cheng-zihao-homepage.vercel.app",
  avatar: "/avatar/cheng-zihao-brand.png",
  identities: [
    "产品经理",
    "AI内容创作者",
    "虎虎豹豹AI宠物IP主理人",
    "Mg调查档案作者"
  ],
  contacts: {
    phone: "17717817565",
    email: "1786508581@qq.com",
    xiaohongshu: "Mg调查档案",
    zhihu: "Magnii"
  }
};

export const navItems = [
  { label: "首页", href: "/" },
  { label: "作品", href: "/works" },
  { label: "生活", href: "/life" },
  { label: "资料库", href: "/library" },
  { label: "OS", href: "/os" },
  { label: "关于", href: "/about" }
];

export const updates = [
  { date: "2026-06-24", title: "个人官网上线" },
  { date: "2026-06-25", title: "虎虎豹豹专区上线" },
  { date: "2026-06-26", title: "Mg调查档案上线" }
];

export const projects = [
  {
    title: "虎虎豹豹 AI 宠物IP",
    href: "/pets",
    description:
      "以萨摩耶豹豹和缅因猫虎虎为主角，探索AI视频、角色建模与内容IP化。",
    meta: "AI视频 / 角色建模 / 内容IP化",
    accent: "accent"
  },
  {
    title: "Mg调查档案",
    href: "/mg",
    description: "通过调查档案形式研究商业、消费、游戏和社会现象。",
    meta: "商业观察 / 消费研究 / 社会现象",
    accent: "copper"
  },
  {
    title: "知乎写作计划",
    href: "/resources#zhihu",
    description: "用故事化表达拆解人性、成长和职场问题。",
    meta: "长文回答 / 人性成长 / 职场议题",
    accent: "wine"
  }
];

export const pets = [
  {
    name: "虎虎",
    species: "缅因猫",
    birthday: "2026-01-05",
    image: "/pets/huhu-card.svg",
    traits: ["高冷", "聪明", "细节控", "巡逻专家"]
  },
  {
    name: "豹豹",
    species: "萨摩耶",
    birthday: "2025-10-28",
    image: "/pets/baobao-card.svg",
    traits: ["阳光", "社牛", "热情", "马大哈"]
  }
];

export const petTimeline = [
  { date: "2026-02-11", title: "豹豹到家", pet: "豹豹" },
  { date: "2026-03-05", title: "虎虎到家", pet: "虎虎" },
  { date: "2026-03-08", title: "虎虎体重 1.3kg", pet: "虎虎" },
  { date: "2026-06-08", title: "虎虎体重 4kg", pet: "虎虎" },
  { date: "2026-06-10", title: "豹豹体重 15.7kg", pet: "豹豹" },
  { date: "2026-06-22", title: "豹豹体重 16.6kg", pet: "豹豹" },
  { date: "2026-06-22", title: "虎虎体重 4.1kg", pet: "虎虎" }
];

export const growthStatisticsAsOf = "2026-06-22";

export const petGrowthProfiles = [
  {
    name: "豹豹",
    species: "萨摩耶",
    birthday: "2025-10-28",
    arrivalDate: "2026-02-11",
    initialWeightKg: 8.4,
    currentWeightKg: 16.6,
    weightRecords: [
      { date: "2026-02-11", weightKg: 8.4, note: "到家初始体重" },
      { date: "2026-06-10", weightKg: 15.7, note: "阶段记录" },
      { date: "2026-06-22", weightKg: 16.6, note: "当前体重" }
    ],
    futureRecords: {
      heightCm: null,
      bodyLengthCm: null,
      chestCm: null,
      photos: [],
      vaccines: [],
      deworming: [],
      neutering: null,
      checkups: []
    }
  },
  {
    name: "虎虎",
    species: "缅因猫",
    birthday: "2026-01-05",
    arrivalDate: "2026-03-05",
    initialWeightKg: 1.3,
    currentWeightKg: 4.1,
    weightRecords: [
      { date: "2026-03-08", weightKg: 1.3, note: "初始体重记录" },
      { date: "2026-06-08", weightKg: 4.0, note: "阶段记录" },
      { date: "2026-06-22", weightKg: 4.1, note: "当前体重" }
    ],
    futureRecords: {
      heightCm: null,
      bodyLengthCm: null,
      chestCm: null,
      photos: [],
      vaccines: [],
      deworming: [],
      neutering: null,
      checkups: []
    }
  }
];

export const petFutureRecordFields = [
  "身高记录",
  "体长记录",
  "胸围记录",
  "照片记录",
  "疫苗记录",
  "驱虫记录",
  "绝育记录",
  "体检记录"
];

export const emojis = [
  {
    category: "虎虎",
    items: [
      { title: "虎虎巡逻中", src: "/emojis/huhu-patrol.svg" },
      { title: "虎虎冷静观察", src: "/emojis/huhu-watch.svg" }
    ]
  },
  {
    category: "豹豹",
    items: [
      { title: "豹豹开朗营业", src: "/emojis/baobao-smile.svg" },
      { title: "豹豹突然热情", src: "/emojis/baobao-run.svg" }
    ]
  }
];

export const galleryItems = [
  { title: "虎虎角色照", category: "虎虎", src: "/gallery/huhu-gallery.svg" },
  { title: "豹豹角色照", category: "豹豹", src: "/gallery/baobao-gallery.svg" },
  { title: "家庭照片预留", category: "家庭照片", src: "/gallery/family-gallery.svg" }
];

export const mgArticles = [
  {
    id: "#001",
    slug: "why-bad-restaurants-are-busy",
    title: "很多餐厅输的，从来不是味道",
    cover: "/mg/mg-001.svg",
    date: "2026-06-24",
    tags: ["餐饮", "商业思维", "消费观察"],
    summary: "好吃决定的是顾客会不会再来，但决定一家餐厅生死的，往往是有没有机会被第一次选择。",
    pdf: "/downloads/mg-001.pdf",
    content: [
      "我一直以为：一家餐厅只要足够好吃，生意就不会太差。后来发现现实并不是这样。",
      "查资料的时候，我看到一个很有意思的现象：顾客第一次选择一家餐厅时，味道往往不是最重要的因素。而很多餐厅，甚至还没来得及证明自己有多好吃，就已经倒下了。",
      "调查完这些资料后，我开始觉得：好吃决定的是顾客会不会再来。但决定一家餐厅生死的，往往是有没有机会被第一次选择。"
    ],
    references: ["小红书原文 #001", "餐饮创业", "餐厅经营"],
    evidence: ["顾客第一次选择餐厅时，味道往往不是最重要的因素", "好吃决定复购，首次选择决定机会"]
  },
  {
    id: "#002",
    slug: "why-fewer-people-play-new-games",
    title: "为什么长大后，游戏越来越难让人着迷？",
    cover: "/mg/mg-002.svg",
    date: "2026-06-25",
    tags: ["游戏", "游戏玩家", "现象研究"],
    summary: "很多人并没有离开游戏。他们只是把时间给了别的东西，真正消失的，也许不是游戏。",
    pdf: "/downloads/mg-002.pdf",
    content: [
      "最近我发现：我已经快3年没有认真玩过游戏了。但奇怪的是，我依然会看Faker比赛，会听原神音乐，会关注新游戏发售。",
      "我以为是现在游戏越来越不好玩了。可查资料、采访玩家之后，我发现答案可能并不是这样。",
      "很多人并没有离开游戏。他们只是把时间给了别的东西。调查完这些资料后，我开始觉得：真正消失的，也许不是游戏。"
    ],
    references: ["小红书原文 #002", "玩家采访", "游戏玩家观察"],
    evidence: ["依然关注比赛、音乐和新游戏发售", "很多人只是把时间给了别的东西"]
  },
  {
    id: "#003",
    slug: "reserved-003",
    title: "预留",
    cover: "/mg/mg-placeholder.svg",
    date: "待更新",
    tags: ["预留"],
    summary: "新的调查档案栏目位，后续可直接在数据文件中扩展。",
    pdf: "/downloads/mg-placeholder.pdf",
    content: ["该档案正在规划中。"],
    references: ["待补充"],
    evidence: ["待补充"]
  },
  {
    id: "#004",
    slug: "reserved-004",
    title: "预留",
    cover: "/mg/mg-placeholder.svg",
    date: "待更新",
    tags: ["预留"],
    summary: "新的调查档案栏目位，后续可直接在数据文件中扩展。",
    pdf: "/downloads/mg-placeholder.pdf",
    content: ["该档案正在规划中。"],
    references: ["待补充"],
    evidence: ["待补充"]
  }
];

export const resourceCategories = [
  {
    title: "调查档案PDF",
    id: "mg-pdf",
    items: [
      {
        title: "Mg调查档案 #001",
        href: "/downloads/mg-001.pdf",
        size: "128 KB",
        updatedAt: "2026-06-24",
        type: "PDF"
      },
      {
        title: "Mg调查档案 #002",
        href: "/downloads/mg-002.pdf",
        size: "132 KB",
        updatedAt: "2026-06-25",
        type: "PDF"
      }
    ]
  },
  {
    title: "知乎文章合集",
    id: "zhihu",
    items: [
      {
        title: "知乎写作计划合集",
        href: "/downloads/zhihu-writing-plan.pdf",
        size: "96 KB",
        updatedAt: "2026-06-24",
        type: "PDF"
      }
    ]
  },
  {
    title: "虎虎豹豹表情包",
    id: "emojis",
    items: [
      {
        title: "虎虎豹豹表情包 ZIP",
        href: "/downloads/huhu-baobao-emojis.zip",
        size: "12 KB",
        updatedAt: "2026-06-24",
        type: "ZIP"
      }
    ]
  },
  {
    title: "个人简历",
    id: "resume",
    items: [
      {
        title: "Magnii个人简历",
        href: "/downloads/cheng-zihao-resume.pdf",
        size: "88 KB",
        updatedAt: "2026-06-24",
        type: "PDF"
      }
    ]
  },
  {
    title: "作品集",
    id: "portfolio",
    items: [
      {
        title: "Magnii作品集",
        href: "/downloads/cheng-zihao-portfolio.pdf",
        size: "156 KB",
        updatedAt: "2026-06-24",
        type: "PDF"
      }
    ]
  }
];

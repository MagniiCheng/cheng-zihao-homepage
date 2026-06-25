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
  { label: "首页", href: "/#home" },
  { label: "项目中心", href: "/projects" },
  { label: "虎虎豹豹", href: "/pets" },
  { label: "Mg调查档案", href: "/mg" },
  { label: "资源中心", href: "/resources" },
  { label: "联系我", href: "/#contact" }
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
    title: "为什么难吃的店生意很好",
    cover: "/mg/mg-001.svg",
    date: "2026-06-24",
    tags: ["消费观察", "商业逻辑", "城市生活"],
    summary: "从位置、客流、价格锚点和决策成本出发，解释一家店不够好吃却仍然能持续经营的原因。",
    pdf: "/downloads/mg-001.pdf",
    content: [
      "一家店是否好吃，只是消费者决策的一部分。真正决定生意的，往往是位置、稳定性、排队信号、价格区间和替代成本。",
      "很多难吃但生意好的店，解决的是“我现在就要吃点东西”的问题，而不是“我要获得一次优秀餐饮体验”的问题。",
      "如果一家店位于高频路径上，出餐稳定，价格不刺眼，用户的试错成本就会被压低。生意好不一定代表产品强，也可能代表它卡住了更高频的需求场景。"
    ],
    references: ["商圈客流观察", "大众点评评价结构", "门店选址与排队心理相关资料"],
    evidence: ["工作日午餐高峰客流", "低分评价中的关键词重复", "周边竞品价格带对比"]
  },
  {
    id: "#002",
    slug: "why-fewer-people-play-new-games",
    title: "为什么越来越多人不玩新游戏了",
    cover: "/mg/mg-002.svg",
    date: "2026-06-25",
    tags: ["游戏观察", "消费心理", "时间成本"],
    summary: "从学习成本、社交迁移、沉没成本和内容疲劳出发，观察玩家为什么更愿意留在旧游戏里。",
    pdf: "/downloads/mg-002.pdf",
    content: [
      "新游戏不是输给旧游戏，而是输给了玩家已经投入过的时间、关系链和操作记忆。",
      "当一款游戏需要重新学习机制、重新建立账号价值、重新融入社交环境时，玩家面对的就不只是娱乐选择，而是一笔隐形迁移成本。",
      "旧游戏不一定更好玩，但它更省力。很多人不玩新游戏，并不是失去兴趣，而是不想再从零开始。"
    ],
    references: ["玩家社区讨论", "游戏生命周期观察", "内容疲劳与迁移成本相关资料"],
    evidence: ["Steam 与手游社区评论", "老游戏版本回流现象", "社交链绑定案例"]
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

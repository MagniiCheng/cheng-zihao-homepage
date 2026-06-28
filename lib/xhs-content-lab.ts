export type XhsContentRecord = {
  id: string;
  researchId: string;
  title: string;
  publishTime: string;
  format: string;
  impressions: number;
  views: number;
  coverCtr: number;
  likes: number;
  comments: number;
  saves: number;
  followers: number;
  shares: number;
  avgWatchSeconds: number;
  danmaku: number;
};

export const xhsContentRecords: XhsContentRecord[] = [
  {
    id: "006",
    researchId: "006",
    title: "为什么越来越多人不发朋友圈了？",
    publishTime: "2026-06-25T20:01:54+08:00",
    format: "图文",
    impressions: 3027,
    views: 591,
    coverCtr: 0.179,
    likes: 10,
    comments: 6,
    saves: 2,
    followers: 0,
    shares: 2,
    avgWatchSeconds: 28,
    danmaku: 0
  },
  {
    id: "005",
    researchId: "005",
    title: "为什么很多人长大后越来越像自己的爸爸？",
    publishTime: "2026-06-23T12:27:38+08:00",
    format: "图文",
    impressions: 1295,
    views: 214,
    coverCtr: 0.163,
    likes: 3,
    comments: 3,
    saves: 3,
    followers: 0,
    shares: 1,
    avgWatchSeconds: 19,
    danmaku: 0
  },
  {
    id: "004",
    researchId: "004",
    title: "为什么各种节越来越火？",
    publishTime: "2026-06-18T17:00:44+08:00",
    format: "图文",
    impressions: 1568,
    views: 161,
    coverCtr: 0.094,
    likes: 6,
    comments: 2,
    saves: 12,
    followers: 0,
    shares: 7,
    avgWatchSeconds: 22,
    danmaku: 0
  },
  {
    id: "003",
    researchId: "003",
    title: "为什么同样一套房子，有人坚持全款，有人坚持贷款？",
    publishTime: "2026-06-12T18:19:08+08:00",
    format: "图文",
    impressions: 286,
    views: 41,
    coverCtr: 0.126,
    likes: 2,
    comments: 2,
    saves: 2,
    followers: 0,
    shares: 2,
    avgWatchSeconds: 6,
    danmaku: 0
  },
  {
    id: "002",
    researchId: "002",
    title: "为什么长大后，游戏越来越难让人着迷？",
    publishTime: "2026-06-11T16:20:48+08:00",
    format: "图文",
    impressions: 5895,
    views: 640,
    coverCtr: 0.105,
    likes: 11,
    comments: 19,
    saves: 3,
    followers: 1,
    shares: 4,
    avgWatchSeconds: 20,
    danmaku: 0
  },
  {
    id: "001",
    researchId: "001",
    title: "很多餐厅输的，从来不是味道",
    publishTime: "2026-06-08T15:14:21+08:00",
    format: "图文",
    impressions: 2348,
    views: 261,
    coverCtr: 0.107,
    likes: 14,
    comments: 2,
    saves: 7,
    followers: 2,
    shares: 3,
    avgWatchSeconds: 50,
    danmaku: 0
  }
];

export function getXhsRecordByResearchId(researchId: string) {
  return xhsContentRecords.find((record) => record.researchId === researchId);
}

export function formatXhsDateTime(value: string) {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);

  if (!match) {
    return "待记录";
  }

  const [, year, month, day, hour, minute] = match;

  return `${year}.${month}.${day} ${hour}:${minute}`;
}

export function formatXhsNumber(value: number) {
  return new Intl.NumberFormat("zh-CN").format(value);
}

export function formatXhsPercent(value: number) {
  return `${(value * 100).toFixed(1)}%`;
}

export function rate(part: number, whole: number) {
  if (!whole) {
    return 0;
  }

  return part / whole;
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "程子豪 | 产品经理与 AI 内容创作者",
  description:
    "程子豪的个人主页：产品经理、AI 内容创作者、虎虎豹豹 AI 宠物 IP 主理人、Mg 调查档案作者。",
  keywords: ["程子豪", "产品经理", "AI内容创作者", "虎虎豹豹", "Mg调查档案"],
  openGraph: {
    title: "程子豪 | 产品经理与 AI 内容创作者",
    description:
      "用产品思维和 AI 工具，把内容创作、宠物 IP 和个人成长项目做成可持续的作品系统。",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

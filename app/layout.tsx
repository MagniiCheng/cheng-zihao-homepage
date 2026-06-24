import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const siteUrl = "https://cheng-zihao-homepage.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Magnii | 产品经理与 AI 内容创作者",
  description:
    "Magnii的个人品牌官网，聚合虎虎豹豹 AI 宠物 IP、Mg 调查档案、知乎写作计划与未来 AI 产品入口。",
  keywords: ["Magnii", "产品经理", "AI内容创作者", "虎虎豹豹", "Mg调查档案"],
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Magnii | 产品经理与 AI 内容创作者",
    description: "用产品思维和 AI 工具构建属于自己的内容生态。",
    type: "website",
    url: siteUrl,
    siteName: "Magnii个人品牌官网",
    images: [
      {
        url: "/avatar/cheng-zihao-brand.png",
        width: 1200,
        height: 1200,
        alt: "Magnii个人品牌视觉"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Magnii | 产品经理与 AI 内容创作者",
    description: "用产品思维和 AI 工具构建属于自己的内容生态。",
    images: ["/avatar/cheng-zihao-brand.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="site-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

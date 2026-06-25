# Magnii个人品牌官网 V2

基于 Next.js App Router、TypeScript 和 Tailwind CSS 的个人品牌官网，适配桌面端和移动端，面向 Vercel 部署。

## 已包含页面

- `/` 首页：Hero、头像上传预览、联系方式复制、最新动态、项目入口
- `/projects` 项目中心
- `/pets` 虎虎豹豹专区
- `/pets/growth` 成长档案
- `/pets/emojis` 表情包中心
- `/pets/gallery` 照片图库
- `/mg` Mg调查档案
- `/mg/[slug]` 文章详情页
- `/resources` 资源中心
- `/ai` 未来 AI 产品入口预留

## 本地运行

```bash
cd outputs/cheng-zihao-homepage
pnpm install
pnpm dev
```

打开：

```text
http://localhost:3000
```

生产构建：

```bash
pnpm build
```

## 部署到 Vercel

1. 将项目推送到 GitHub。
2. 打开 [Vercel](https://vercel.com)，选择 `Add New...` -> `Project`。
3. 导入该仓库。
4. Framework Preset 选择 `Next.js`。
5. Install Command 使用 `pnpm install`。
6. Build Command 使用 `pnpm build`。
7. Output Directory 保持默认。
8. 点击 `Deploy`。

Vercel Analytics 已在根布局中接入，上线后可在 Vercel 项目面板查看访问量、页面访问排行、来源和设备数据。

## 内容维护

- 全站内容数据：`lib/site-data.ts`
- 首页：`app/page.tsx`
- 全局布局与 SEO：`app/layout.tsx`
- robots：`app/robots.ts`
- sitemap：`app/sitemap.ts`
- 静态资源目录：`public/avatar`、`public/pets`、`public/gallery`、`public/emojis`、`public/mg`、`public/downloads`

当前上传能力为前端预留形态：头像和图库支持本地选择、预览、圆形裁剪或删除，不会写入服务器。正式管理员上传可继续接入 Vercel Blob、CMS 或自建后台 API。

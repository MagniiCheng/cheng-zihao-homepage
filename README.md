# 程子豪个人主页

一个基于 Next.js 和 Tailwind CSS 的单页个人主页，适配桌面端和移动端，适合部署到 Vercel。

## 技术栈

- Next.js App Router
- React
- Tailwind CSS
- TypeScript
- lucide-react 图标

## 本地运行

```bash
cd outputs/cheng-zihao-homepage
pnpm install
pnpm dev
```

浏览器打开：

```text
http://localhost:3000
```

生产构建检查：

```bash
pnpm build
```

## 部署到 Vercel

1. 将 `outputs/cheng-zihao-homepage` 目录推送到 GitHub、GitLab 或 Bitbucket 仓库。
2. 打开 [Vercel](https://vercel.com)，点击 `Add New...`，选择 `Project`。
3. 导入刚才的仓库。
4. Framework Preset 选择 `Next.js`。
5. Build Command 保持 `pnpm build`。
6. Output Directory 保持默认。
7. 点击 `Deploy`。

部署完成后，可以在 Vercel 项目设置里绑定自定义域名。

## 内容修改位置

- 页面内容：`app/page.tsx`
- 全局样式：`app/globals.css`
- Tailwind 配置：`tailwind.config.ts`
- 邮箱复制按钮：`components/CopyEmailButton.tsx`

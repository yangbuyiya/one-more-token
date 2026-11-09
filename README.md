# One More Token｜一词未尽

一个由朋友发起、向所有创造者开放的 AI 开源社区。

> 一词未尽，继续生成。

## 这是什么

我们相信好的东西发生在"还没说完"的地方。大模型每生成一个 token，都在决定下一个词；一个社区每一次对话，也都在生成它的下一种可能。

One More Token 是一群朋友搭起来的开源社区：

- **真实**：成员用自己的 Markdown 文档维护资料，代码即内容。
- **开放**：任何人都可以通过 Pull Request 加入。
- **继续生成**：社区不设终点，下一位成员，也许是你。

## 成员维护

每位成员用一份 Markdown 文档维护自己的资料，存放在 [`members/`](members/) 文件夹：

1. 复制 `members/_template.md` 为 `members/<你的名字>.md`；
2. 填写 frontmatter（名称、标识、角色、一句话介绍、链接等）与正文；
3. 把 `draft` 改为 `false`；
4. 提交 commit 或发 Pull Request。

注意：monogram 含 `+`、`-` 等符号时需要加英文引号（如 `"+1"`），否则会被 YAML 解析成数字。

网站的成员卡片与详情页会自动生成，不需要改任何前端代码。

## 本地开发

```bash
npm install
npm run dev      # 开发预览 http://localhost:4321
npm run check    # 类型与内容校验
npm run build    # 生成静态站点到 dist/
```

## 技术架构

基于 [Astro](https://astro.build) 的纯静态站点：

```text
members/              成员内容（独立维护，与代码解耦）
src/
  content.config.ts   内容集合定义与字段校验（Zod）
  data/site.ts        站点全局配置
  components/         可复用展示组件
  layouts/            页面布局
  pages/              路由与页面组装
  styles/global.css   设计变量与基础样式
```

无数据库、无后端、无运行时依赖，构建产物为纯静态 HTML。

## License

社区内容与代码采用 [MIT License](https://opensource.org/license/mit)。

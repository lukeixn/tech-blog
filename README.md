# Research portfolio (Astro)

A static personal technical portfolio and research blog. Content is written in Markdown or MDX; no database, server or paid service is required.

## Requirements and local development

Node.js 24+ and npm. From the project root:

```bash
npm install
npm run dev
```

Open the URL printed by Astro (typically `http://localhost:4321`). Before publishing, edit `src/lib/site.ts` to set your name, initials, GitHub profile and public email. The GitHub profile is prefilled as `lukeixn`; verify that it is the account you want to show. Empty GitHub/email fields hide those links. Replace the resume placeholder with verified experience; optionally put your PDF at `public/resume/resume.pdf` and add a download link in `src/pages/resume.astro`.

## Build

```bash
npm run build
npm run preview
```

`build` runs Astro's type/content checks and writes a static site to `dist/`. Commit `package-lock.json`; the GitHub Action uses it for a reproducible install.

## Free deployment to GitHub Pages

1. Create a public GitHub repository named **`username.github.io`** (replace `username` with your account name) for `https://username.github.io/`, or use an ordinary repository such as **`tech-blog`** for `https://username.github.io/tech-blog/`.
2. Push this project to that repository's `main` branch. In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
3. `.github/workflows/deploy.yml` builds and deploys automatically on every push to `main`. The build reads `GITHUB_REPOSITORY=owner/repo`: `site` becomes `https://owner.github.io`; `base` is `/` for `owner.github.io` and `/<repo>` for an ordinary repository. The `withBase()` helper prefixes all internal links and local assets.
4. For organization repositories or unusual Pages URLs, set `SITE_URL` and `SITE_BASE` in the workflow build step. To test the ordinary-repository case locally: `SITE_USERNAME=username SITE_BASE=/tech-blog npm run build`.

The deploy workflow uses official Astro and GitHub Pages Actions. Astro generates static files; no adapter or external runtime is necessary. Your repository must exist and the workflow must complete before the public URL works.

## Add content

All entries use the shared schema in `src/content.config.ts`. Filenames become URL slugs. Dates use `YYYY-MM-DD`; `draft: true` hides an entry. Optional URLs should be omitted until real.

**Blog:** create `src/content/blog/my-note.md` or `.mdx`:

```md
---
title: My Note
description: A short summary for cards and search results.
date: 2026-09-28
category: Transformer
tags: [Attention]
readingTime: 4
---

## Main idea

Your Markdown here.
```

Categories: `Transformer`, `VLM`, `Computer Vision`, `AI Agent`, `Deep Learning`, `Engineering`. `readingTime` is an optional author supplied estimate. Blog pages generate a TOC from level 2 and 3 headings and previous/next links by date.

**Research:** create `src/content/research/my-topic.md` with `title`, `description`, `date`, `status`, `tags`. Optional fields: `featured`, `cover`, `github`, `paper`, `demo`. Status is one of `Concept`, `In progress`, `Prototype`, `Complete`.

**Project:** create `src/content/projects/my-project.md` with the same required fields plus `stack: [Python, PyTorch]`. Optional fields are the same. `featured: true` places an entry on the home page; the list views show all nondraft entries.

Use `$...$` or `$$...$$` for KaTeX math; fenced code blocks get syntax highlighting; fenced `mermaid` blocks render diagrams on article/detail pages. For an image, place it in `public/images` and use the root-relative path in Markdown through `../../images/name.png` from a detail page, or an imported asset in MDX. For a `cover` frontmatter URL use `/images/name.png` (the layout handles the base path). Markdown tables work without another plugin. External script services are not used.

## Project map

| Area | Responsibility |
| --- | --- |
| `src/content.config.ts` | Schemas and loaders for blog, research, projects |
| `src/content/*` | One Markdown/MDX file per entry |
| `src/lib/site.ts` | Profile, URLs, base-aware paths and shared formatting |
| `src/components/*` | Navigation, cards, tags and diagram renderer |
| `src/layouts/*` | SEO shell and reusable article/project layouts |
| `src/pages/*` | Collection queries and route composition |
| `src/styles/global.css` | Responsive light theme |
| `public/*` | Favicon, images and optional PDF |

## Publication checklist

The name, initials, contact address, resume details and PDF are placeholders. Example entries describe ideas and structure; some projects need verified descriptions, repository URLs, demos, dates and metrics. Check each claim against your own record before sharing the URL on a resume.
# tech-blog

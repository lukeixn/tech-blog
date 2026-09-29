import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkMermaid from './src/lib/remark-mermaid.mjs';
import { unified } from '@astrojs/markdown-remark';

// Actions supplies GITHUB_REPOSITORY=owner/repo. Local builds can set these two explicitly.
const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner, repo] = repository.split('/');
const username = process.env.SITE_USERNAME || owner || 'username';
const site = process.env.SITE_URL ?? `https://${username}.github.io`;
const base = process.env.SITE_BASE ?? (repo && repo.toLowerCase() !== `${username.toLowerCase()}.github.io` ? `/${repo}` : '/');

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [mdx(), sitemap()],
  markdown: { processor: unified({ remarkPlugins: [remarkMath, remarkMermaid], rehypePlugins: [rehypeKatex] }) },
});

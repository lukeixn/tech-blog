export const profile = {
  name: 'Your Name', // Replace with your preferred public name.
  initials: 'YN',
  role: 'AI 工程师 · 研究主页',
  tagline: '仪器科学与技术硕士研究生',
  focus: '专注于视觉语言模型、小目标识别与 AI Agent。',
  github: 'https://github.com/lukeixn', // Verify the public profile before publishing.
  email: '', // Public contact address; empty hides the mail link.
};

export const withBase = (path = '/') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};

export const entryUrl = (collection: 'blog' | 'projects' | 'research', id: string) =>
  withBase(`/${collection}/${id}/`);

export const byDate = <T extends { data: { date: Date } }>(a: T, b: T) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(date);

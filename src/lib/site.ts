export const profile = {
  name: 'Your Name', // Replace with your preferred public name.
  initials: 'YN',
  role: 'AI Engineer · Research Portfolio',
  tagline: 'Master’s Student in Instrument Science and Technology',
  focus: 'Focused on Vision-Language Models, Small Object Recognition and AI Agents.',
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

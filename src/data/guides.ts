/** Guide index — metadata, hub grouping, related links, and which lead-gen
 *  CTA each guide carries. Article prose lives in the page templates. */

export type CtaKind = 'accountant' | 'formation' | 'payroll' | 'software' | 'none';

export interface Guide {
  slug: string;
  title: string;
  description: string;
  hub: 'Entity structure' | 'Tax pros' | 'Deductions';
  hook: string;
  related: string[];
  cta: CtaKind;
  updated: string;
  /** Companion YouTube video. Set it and the guide page shows a "Watch the video" card. */
  video?: GuideVideo;
}

export interface GuideVideo {
  /** The ID from the YouTube URL: youtube.com/watch?v=<youtubeId> */
  youtubeId: string;
  title: string;
  /** Publish date, YYYY-MM-DD. */
  published: string;
  /** Optional ISO 8601 duration, e.g. 'PT9M54S'. */
  duration?: string;
}

export const GUIDES: Guide[] = [
  {
    slug: 's-corp-vs-llc',
    title: 'S Corp vs LLC (2026): How the Tax Choice Actually Works',
    description:
      'S corp vs LLC explained in plain English: how each is taxed, the self-employment tax difference, reasonable salary rules, and the factors owners weigh.',
    hub: 'Entity structure',
    hook: 'The highest-traffic question in small-business tax — and the one most often answered with a sales pitch.',
    related: ['what-is-a-tax-strategist', 'small-business-tax-deductions', 'how-much-does-a-cpa-cost-for-a-small-business'],
    cta: 'formation',
    updated: '2026-10-03',
    // Video 1 ("S Corp vs LLC: The $15,000 Tax Difference Explained") is in production.
    // When it's live: video: { youtubeId: '…', title: 'S Corp vs LLC: The $15,000 Tax Difference Explained', published: 'YYYY-MM-DD' },
  },
  {
    slug: 'what-is-a-tax-strategist',
    title: 'What Is a Tax Strategist? What They Do (and Cost)',
    description:
      'What a tax strategist actually does, how they differ from a tax preparer, when hiring one pays off, and what to ask before you engage one.',
    hub: 'Tax pros',
    hook: 'Compliance files the return. Strategy decides what goes on it.',
    related: ['how-much-does-a-cpa-cost', 's-corp-vs-llc', 'small-business-tax-deductions-checklist'],
    cta: 'accountant',
    updated: '2026-10-03',
  },
  {
    slug: 'how-much-does-a-cpa-cost',
    title: 'How Much Does a CPA Cost? (2026 Pricing Models)',
    description:
      'How CPAs charge — hourly, flat fee, and monthly models — what drives the price of a business return, and how to get useful quotes.',
    hub: 'Tax pros',
    hook: 'The price of a CPA is the price of your complexity.',
    related: ['how-much-does-a-cpa-cost-for-a-small-business', 'what-is-a-tax-strategist'],
    cta: 'accountant',
    updated: '2026-10-03',
  },
  {
    slug: 'how-much-does-a-cpa-cost-for-a-small-business',
    title: 'How Much Does a CPA Cost for a Small Business?',
    description:
      'Small-business CPA pricing: what a business return, monthly bookkeeping, and bundled services commonly cost, and what moves your quote.',
    hub: 'Tax pros',
    hook: 'For a small business, the return is the smallest part of the bill.',
    related: ['how-much-does-a-cpa-cost', 'small-business-tax-deductions', 'what-is-a-tax-strategist'],
    cta: 'accountant',
    updated: '2026-10-03',
  },
  {
    slug: 'small-business-tax-deductions',
    title: 'Small Business Tax Deductions: The Categories That Matter',
    description:
      'The major small-business deduction categories — home office, vehicle, retirement, health insurance, startup costs — explained in plain English.',
    hub: 'Deductions',
    hook: 'Deductions are not loopholes. They are the tax code telling you what it wants to subsidize.',
    related: ['small-business-tax-deductions-checklist', 's-corp-vs-llc'],
    cta: 'software',
    updated: '2026-10-03',
  },
  {
    slug: 'small-business-tax-deductions-checklist',
    title: 'Small Business Tax Deductions Checklist',
    description:
      'A practical year-end and year-round checklist: records to keep, moves to discuss with your tax pro, and deadlines not to miss.',
    hub: 'Deductions',
    hook: 'The deduction you forget in April is decided in the records you keep all year.',
    related: ['small-business-tax-deductions', 'what-is-a-tax-strategist'],
    cta: 'accountant',
    updated: '2026-10-03',
  },
];

export const guideBySlug = (slug: string): Guide => {
  const g = GUIDES.find((x) => x.slug === slug);
  if (!g) throw new Error(`Unknown guide: ${slug}`);
  return g;
};

export const HUBS = ['Entity structure', 'Tax pros', 'Deductions'] as const;

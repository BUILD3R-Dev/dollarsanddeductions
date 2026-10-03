/** Lead-gen partners. /go/ stubs point at partner homepages for now —
 *  swapped to real partner/tracking links when programs approve. Payout
 *  notes describe the partners' published programs, not our links. */

export interface Partner {
  slug: string;
  name: string;
  category: string;
  blurb: string;
  payoutNote: string;
  homepage: string;
}

export const PARTNERS: Partner[] = [
  {
    slug: '1800accountant',
    name: '1-800Accountant',
    category: 'Tax & accounting pros',
    blurb:
      'A nationwide virtual accounting firm for small businesses — tax preparation, bookkeeping, and advisory under one roof.',
    payoutNote: 'Their partner program pays up to $100 per qualified tax/accounting lead.',
    homepage: 'https://www.1800accountant.com/',
  },
  {
    slug: 'zenbusiness',
    name: 'ZenBusiness',
    category: 'LLC formation',
    blurb:
      'Business formation service that handles LLC filings, registered agent service, and S-corp elections.',
    payoutNote: 'Their partner program pays $75–$175 per completed formation, tiered by plan and volume.',
    homepage: 'https://www.zenbusiness.com/',
  },
  {
    slug: 'gusto',
    name: 'Gusto',
    category: 'Payroll',
    blurb:
      'Payroll, benefits, and HR software built for small businesses — including S-corp payroll compliance.',
    payoutNote: 'Their partner program pays $200+ per valid business customer.',
    homepage: 'https://gusto.com/',
  },
  {
    slug: 'quickbooks',
    name: 'QuickBooks',
    category: 'Accounting software',
    blurb:
      "Intuit's accounting software — the default bookkeeping stack for millions of US small businesses.",
    payoutNote: 'Their partner program pays around 10% per sale, tiered by volume.',
    homepage: 'https://quickbooks.intuit.com/',
  },
];

export const partnerBySlug = (slug: string): Partner | undefined =>
  PARTNERS.find((p) => p.slug === slug);

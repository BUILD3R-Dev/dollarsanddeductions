# Dollars & Deductions — Build Notes (2026-10-03)

Scaffolded Astro static site for the business-tax-strategy lead-gen play.
Local only — **no GitHub repo created, nothing pushed.**

## Structure

```
src/
  layouts/BaseLayout.astro   — brand header/nav, footer w/ educational disclaimer on every page
  styles/site.css            — infonavigator design system, rebranded (deep-green ink, gold accents)
  data/site.ts               — SITE, NAV, EDU_DISCLAIMER constant
  data/guides.ts             — guide index: slug, title, hub, hook, related, CTA kind, updated date
  data/partners.ts           — 4 lead-gen partners: slug, blurb, payout note, placeholder homepage
  components/                — Breadcrumbs, FAQ (w/ FAQPage schema), DisclosureBlock,
                               LeadCTA ("Get matched with a pro" → /go/ stubs), LastReviewed
  pages/
    index.astro              — homepage: hero, 3 topic hubs, trust cards, lead CTA, FAQ
    s-corp-vs-llc/           — crown jewel (27.1k vol, KD2)
    what-is-a-tax-strategist/ — (2.9k, KD0, $36 CPC) heavy accountant CTA
    how-much-does-a-cpa-cost/ — pricing models + grounded 2026 ranges
    how-much-does-a-cpa-cost-for-a-small-business/ — bundled services angle
    small-business-tax-deductions/ — category-by-category guide
    small-business-tax-deductions-checklist/ — actionable checklist
    about/ disclosure/ how-we-research/ privacy/
    go/[partner].astro        — 4 redirect stubs (noindex, excluded from sitemap)
    404.astro                — real 404, noindex
public/robots.txt, public/llms.txt
```

## Verified at build

- `npm run build`: 16 pages, zero errors
- Dead-internal-link audit (parsed all dist HTML): **0 broken links**
- Sitemap excludes `/go/`; 404 is noindex
- Educational disclaimer ("Educational purposes only — not tax, legal, or financial advice…") renders in the footer of every page + DisclosureBlock on guide/monetized pages
- No "CPA"/credentialed-title claims anywhere; copy is educational ("here's how X works"), never prescriptive
- CPA cost figures grounded via web search (2026 sources): Schedule C $500–1,500; 1065 $1,000–2,500; 1120-S $1,200–2,500+; bookkeeping $200–1,000/mo; hourly $100–400 — all labeled as commonly reported ranges, not quotes

## Stubbed for later

1. **Real /go/ destinations** — stubs currently meta-refresh to partner homepages (1800accountant.com, zenbusiness.com, gusto.com, quickbooks.intuit.com). Swap to real partner/tracking links when programs approve. Do NOT file affiliate applications without Dustin's business details (standing blocker).
2. **GA4** — no tag installed. BaseLayout has an HTML comment placeholder; Dustin creates the data stream and sends the Measurement ID.
3. **Search Console** — needs property + TXT verification (Dustin).
4. **GitHub repo + Cloudflare Pages** — not created. When ready: new repo (Dustin's pattern: separate repo per site), Pages project, custom domain dollarsanddeductions.com (registration in progress separately).
5. **OpenSEO project + rank tracker** — not created. Suggested tracker keywords: the 6 guide slugs' head terms.
6. **Freshness** — guide `updated` dates are 2026-10-03; re-verify against IRS guidance monthly (LastReviewed component takes a `date` prop).

## Design notes

- Mirrors infonavigator's proven layout system (rail headings, cards, FAQ details, disclosure asides) with its own palette; no shared files between sites (studio rule: fix CSS in each site separately).
- LeadCTA variants: accountant (default), formation, payroll, software — each wired to its /go/ stub with `rel="sponsored nofollow"`.

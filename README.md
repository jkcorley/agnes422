# Agnes 2.1 — Voice‑First Shopping AI

This Next.js (App Router) project combines:

- **Crystallize** for product/catalog UI  
- **Hume Voice SDK** for voice‑first interactions  
- **Stripe** (or Crystallize Checkout) for payments  
- **Vercel** for global edge deployment

## Quick Start

```bash
git clone git@github.com:your-org/agnes-2-1.git
cd agnes-2-1
pnpm install         # or npm/yarn install
cp .env.example .env.local
# fill in your CRYSTALLIZE_*, HUME_*, STRIPE_* variables
pnpm dev
```

Visit <http://localhost:3000> to see the voice overlay + e‑commerce UI.

## Folder Layout

- `app/` — Next.js routes & API  
- `components/ecommerce/` — product cards, filters, cart UI  
- `components/voice/` — Chat overlay, message list, controls  
- `lib/crystallize.ts` — Crystallize GraphQL client  
- `utils/voice/` — Hume token & intent router  
- `utils/ecommerce.ts` — Cart & search utilities

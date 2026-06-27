# TODO - Bangga UMKM (Landing Refactor & Premium Icons)

## Step 1 — Baseline audit
- [x] Baca `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`, dan konteks project dari docs.
- [x] Identifikasi semua penggunaan icon dari `lucide-react` di `page.tsx`.

## Step 2 — Refactor struktur landing page
- [x] Buat folder `src/components/landing/`.
- [ ] Buat komponen:
  - [x] `LandingNavbar.tsx`
  - [x] `HeroSection.tsx`
  - [ ] `ProblemsSection.tsx`
  - [ ] `SolutionsSection.tsx`
  - [ ] `FeaturesSection.tsx`
  - [ ] `HowItWorksSection.tsx`
  - [ ] `PricingSection.tsx`
  - [ ] `TrustSection.tsx`
  - [ ] `CTASection.tsx`
  - [ ] `FAQSection.tsx`
  - [ ] `LandingFooter.tsx`
  - [ ] `EarlyAccessModal.tsx`
- [ ] Jadikan `src/app/page.tsx` hanya sebagai orchestrator (state + handler).

## Step 3 — Premium & konsisten icon
- [ ] Buat `src/components/landing/Icon.tsx` (wrapper/standar ukuran stroke).
- [ ] Buat `src/components/landing/icons.ts` (mapping ikon per kebutuhan section).
- [ ] Ganti seluruh icon di landing page agar:
  - [ ] modern, SaaS-premium vibe, relevan UMKM
  - [ ] ukuran dan hierarchy konsisten
  - [ ] tidak terlalu generik

## Step 4 — Styling & UX parity
- [ ] Pastikan scroll-spy, modal CTA, dan FAQ accordion tetap sama.
- [ ] Pastikan layout & spacing tidak berubah signifikan.

## Step 5 — Testing
- [ ] Jalankan `npm.cmd run lint`.
- [ ] Verifikasi manual di browser: navbar, scroll highlight, modal, FAQ.


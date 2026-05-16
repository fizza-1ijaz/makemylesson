# Deployment — makemylesson.ai + Flutter `/app/*`

This document is for the developer deploying the marketing site to **makemylesson.ai** and wiring Flutter deep links.

## Architecture

| Host | Role |
|------|------|
| **makemylesson.ai** | Next.js marketing site (this repo) |
| **makemylesson.app** | Flutter web app on Firebase Hosting under `/app/` |

Marketing CTAs use same-host paths: `/app/pricing`, `/app/stage1`, `/app/ayla`. Next.js **rewrites** those to Flutter on `makemylesson.app` (see [`next.config.mjs`](next.config.mjs)).

**Note:** If the live domain still shows a “Coming Soon” placeholder (Home + Blog only), that is a **different** deployment. Replace it with this repo for `/app/*` and full marketing pages to work on `makemylesson.ai`.

---

## Step 1 — Deploy Flutter (Firebase)

From the **MakeMyLesson** directory:

```bash
./deploy.sh
```

Prerequisites: Flutter SDK, Firebase CLI (`firebase login`).

Verify on Firebase **before** relying on the Next proxy:

| URL | Expected |
|-----|----------|
| https://makemylesson.app/app/pricing | Flutter subscription / pricing screen |
| https://makemylesson.app/app/stage1 | Flutter Stage 1 screen |
| https://makemylesson.app/app/ayla | Flutter Ayla chat screen |

---

## Step 2 — Deploy Next.js (makemylesson-1) to makemylesson.ai

1. Install and build:

   ```bash
   npm install
   npm run build
   ```

2. Run with a **Node** process (required for rewrites):

   ```bash
   npm run start
   ```

   On Hostinger, use a Node.js application or process manager — **not** static export-only hosting unless you add an nginx proxy for `/app/` (see README).

3. Environment (optional):

   ```env
   MML_FLUTTER_HOSTING_ORIGIN=https://makemylesson.app
   NEXT_PUBLIC_SITE_URL=https://makemylesson.ai
   ```

4. DNS: point **makemylesson.ai** and **www.makemylesson.ai** at this app (redirect one canonical host if you prefer).

---

## Step 3 — Production smoke tests

After deploy, confirm:

| URL | Expected |
|-----|----------|
| https://makemylesson.ai/ | Marketing homepage (this Next app) |
| https://makemylesson.ai/app/pricing | Flutter pricing (proxied, not Next 404) |
| https://makemylesson.ai/app/stage1 | Flutter Stage 1 |
| https://makemylesson.ai/app/ayla | Flutter Ayla chat |
| https://makemylesson.ai/pricing | Next.js SEO pricing page (unchanged) |

From the homepage, Navbar **Pricing**, **Ayla AI**, Hero **Build Your First Teaching Pack Free**, **View pricing**, and the floating Ayla button should navigate to `makemylesson.ai/app/...` in the same tab.

---

## Local development

See [README.md](README.md). Quick check:

```bash
npm run dev
# http://localhost:3001/app/pricing → should proxy to Flutter (200)
```

Optional: run local Flutter on port 8080 and set `MML_FLUTTER_HOSTING_ORIGIN=http://localhost:8080` in `.env.local` (see [`.env.local.example`](.env.local.example)).

---

## Troubleshooting

| Symptom | Likely cause |
|---------|----------------|
| `404 \| This page could not be found` on `/app/pricing` | Coming Soon site still live, or Next deployed without Node rewrites |
| CTAs open wrong host | Old build; ensure [`src/lib/appUrls.js`](src/lib/appUrls.js) uses `/app/...` relative paths |
| Blank Flutter shell | Run `./deploy.sh` again; check `makemylesson.app/app/pricing` directly |
| Rewrites ignored | Static-only hosting; use `next start` or nginx `location /app/` → `https://makemylesson.app/app/` |

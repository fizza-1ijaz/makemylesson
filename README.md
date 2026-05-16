# Make My Lesson — marketing site (Next.js)

**Production deploy:** see [DEPLOYMENT.md](DEPLOYMENT.md) for Hostinger handoff and `/app/*` smoke tests.

## Flutter app deep links (`/app/*`)

Marketing CTAs use **same-host relative paths** (`/app/pricing`, `/app/stage1`, `/app/ayla`) defined in [`src/lib/appUrls.js`](src/lib/appUrls.js). The Flutter web app is hosted on **Firebase** at **`https://makemylesson.app`** under **`/app/`**.

This Next.js app **proxies** `/app` and `/app/*` to Flutter so users stay on the marketing domain:

- Configured in [`next.config.mjs`](next.config.mjs) via `rewrites()`.
- Default proxy target: `https://makemylesson.app` (`MML_FLUTTER_HOSTING_ORIGIN` or `NEXT_PUBLIC_MML_FLUTTER_HOSTING_ORIGIN`).

SEO marketing pages (`/pricing`, `/lesson/stage1`, etc.) remain separate from Flutter `/app/*` routes.

### Local development

1. Copy env example (optional — only needed to point at local Flutter):

   ```bash
   cp .env.local.example .env.local
   ```

2. **Flutter** (separate terminal, from `MakeMyLesson`):

   ```bash
   flutter run -d chrome --web-base-href=/app/ --web-port=8080
   ```

   Set `MML_FLUTTER_HOSTING_ORIGIN=http://localhost:8080` in `.env.local` when using local Flutter.

3. Run marketing site:

   ```bash
   npm install
   npm run dev
   ```

4. Verify proxy and CTAs:

   - Open `http://localhost:3001/app/pricing` — should show Flutter (not Next 404).
   - From the homepage, Navbar **Pricing**, **Ayla AI**, Hero CTA, and **View pricing** should navigate to `localhost:3001/app/...` (same host).

   Without local Flutter, omit `.env.local` — Next proxies to `https://makemylesson.app`.

### Production (Hostinger)

- Run with **`next start`** (or `npm run build && npm run start`) so **rewrites** apply.
- Set `MML_FLUTTER_HOSTING_ORIGIN=https://makemylesson.app` if the default is wrong.
- Ensure **both** `makemylesson.ai` and `www.makemylesson.ai` serve this Next app with rewrites enabled.
- If you ever deploy a **static export only** (no Node server), rewrites will not work; configure **nginx** to proxy `location /app/` to `https://makemylesson.app/app/`.

### Flutter deploy (Firebase)

From the **MakeMyLesson** repo:

```bash
./deploy.sh
```

Confirm `https://makemylesson.app/app/pricing`, `/app/stage1`, and `/app/ayla` work before relying on the Next proxy on `makemylesson.ai`.

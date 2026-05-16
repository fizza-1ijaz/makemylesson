/**
 * Flutter web app deep links on the same host as the marketing site.
 * Next.js rewrites `/app/*` to Flutter on Firebase (`makemylesson.app`) — see next.config.mjs.
 *
 * Use these relative paths for in-site CTAs so localhost and production both proxy correctly.
 * Proxy target for local Flutter: MML_FLUTTER_HOSTING_ORIGIN=http://localhost:8080
 */
export const MML_APP = {
  pricing: '/app/pricing',
  stage1: '/app/stage1',
  ayla: '/app/ayla',
}

/**
 * Flutter web app (deep links under `/app/…`).
 * Override origin for local/staging: NEXT_PUBLIC_MML_APP_ORIGIN=http://localhost:8080
 */
export const MML_APP_ORIGIN =
  process.env.NEXT_PUBLIC_MML_APP_ORIGIN?.replace(/\/$/, '') ?? 'https://makemylesson.ai'

export const MML_APP = {
  pricing: `${MML_APP_ORIGIN}/app/pricing`,
  stage1: `${MML_APP_ORIGIN}/app/stage1`,
  ayla: `${MML_APP_ORIGIN}/app/ayla`,
}

/** Canonical site origin for metadata (Open Graph, etc.). Override with NEXT_PUBLIC_SITE_URL in env. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://makemylesson.ai'

/** Site logo (`public/logo-makemylesson2.png`). */
export const BRAND_LOGO_PATH = '/logo-makemylesson2.png'

/** Default OG / Twitter card image (`public/publicog-img.jpg`). */
export const DEFAULT_OG_IMAGE_PATH = '/publicog-img.jpg'
export const DEFAULT_OG_IMAGE_WIDTH = 2250
export const DEFAULT_OG_IMAGE_HEIGHT = 1181
export const DEFAULT_OG_IMAGE_ALT =
  'Make My Lesson — AI Lesson Planner. Generate complete teaching packs in minutes. 71 curriculum routes.'

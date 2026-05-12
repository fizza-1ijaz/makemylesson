'use client'

import AylaIcon from '@/components/AylaIcon'

/** Small avatar for Ayla messages in the landing chat mockup */
export function AylaMsgAvatar({ className = '' }) {
  return (
    <span
      className={`msg-av msg-av-bot relative overflow-hidden !p-0 ${className}`.trim()}
      aria-hidden
    >
      <AylaIcon width={26} height={26} alt="" className="h-full w-full" />
    </span>
  )
}

/** Header avatar in the Ayla chat card */
export function AylaHeaderAvatar({ className = '' }) {
  return (
    <div
      className={`ayla-chat-av ayla-chat-av-bot relative overflow-hidden !bg-transparent ${className}`.trim()}
      aria-hidden
    >
      <AylaIcon width={40} height={40} alt="" className="h-full w-full" />
    </div>
  )
}

export function TypingDots() {
  return (
    <div className="ayla-dots" aria-hidden>
      <span className="ayla-dot" />
      <span className="ayla-dot" />
      <span className="ayla-dot" />
    </div>
  )
}

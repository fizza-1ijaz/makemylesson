import { Bot } from 'lucide-react'

/** Small robot icon for Ayla message avatars (outline, accent) */
export function AylaMsgAvatar({ className = '' }) {
  return (
    <span className={`msg-av msg-av-bot ${className}`.trim()} aria-hidden>
      <Bot className="msg-bot-svg" size={15} strokeWidth={1.75} />
    </span>
  )
}

/** Header avatar — slightly larger */
export function AylaHeaderAvatar({ className = '' }) {
  return (
    <div className={`ayla-chat-av ayla-chat-av-bot ${className}`.trim()} aria-hidden>
      <Bot className="ayla-header-bot-svg" size={22} strokeWidth={1.6} />
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

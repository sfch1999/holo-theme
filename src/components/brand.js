import * as React from "react"

/**
 * Geometric monogram. Deliberately simple — a rising axis inside a rounded
 * square — because no approved ABI AI logo asset exists yet. It reads as a
 * mark at 24px and as a favicon at 16px without relying on fine detail.
 */
export const Monogram = ({ className = "", title }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    role={title ? "img" : "presentation"}
    aria-label={title || undefined}
    aria-hidden={title ? undefined : "true"}
    focusable="false"
  >
    {title ? <title>{title}</title> : null}
    <rect width="32" height="32" rx="7" fill="#0E1A2B" />
    <path
      d="M8 22.5 L14.2 12.2 L20.4 22.5"
      stroke="#FFFFFF"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M11.1 19.1 H17.3"
      stroke="#FFFFFF"
      strokeWidth="2.4"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="23.6" cy="11.4" r="2.4" fill="#0B655A" />
  </svg>
)

/**
 * Lockup used in the header and footer. `tone` switches the wordmark for use
 * on dark backgrounds.
 */
export const Wordmark = ({ className = "", tone = "ink" }) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <Monogram className="h-7 w-7 shrink-0" />
    <span
      className={`text-[1.0625rem] font-semibold tracking-tightest ${
        tone === "light" ? "text-white" : "text-ink"
      }`}
    >
      ABI&nbsp;AI
    </span>
  </span>
)

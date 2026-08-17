import * as React from "react"
import { Link } from "gatsby"

export const Container = ({ children, className = "", width = "default" }) => {
  const widths = {
    default: "max-w-6xl",
    narrow: "max-w-3xl",
    wide: "max-w-7xl",
  }
  return (
    <div className={`mx-auto w-full px-5 sm:px-8 ${widths[width]} ${className}`}>
      {children}
    </div>
  )
}

export const Section = ({
  children,
  className = "",
  as: Tag = "section",
  ...rest
}) => (
  <Tag className={`py-16 sm:py-20 lg:py-24 ${className}`} {...rest}>
    {children}
  </Tag>
)

/** Small uppercase label that introduces a section. */
export const Eyebrow = ({ children, className = "" }) => (
  <p
    className={`mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent ${className}`}
  >
    {children}
  </p>
)

export const SectionHeading = ({ children, className = "", as: Tag = "h2" }) => (
  <Tag
    className={`text-balance text-2xl font-semibold tracking-tightest text-ink sm:text-3xl lg:text-[2.125rem] lg:leading-[1.2] ${className}`}
  >
    {children}
  </Tag>
)

export const Lede = ({ children, className = "" }) => (
  <p className={`text-lg leading-relaxed text-ink-soft ${className}`}>
    {children}
  </p>
)

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-200 motion-reduce:transition-none"

const variants = {
  primary: "bg-ink text-white hover:bg-accent-strong",
  secondary:
    "border border-line-strong bg-paper-raised text-ink hover:border-ink hover:bg-paper-sunken",
  // For use on the dark (ink) sections. Never override a variant's colours via
  // className — Tailwind resolves conflicting utilities by their order in the
  // generated stylesheet, not by the order you list them, so the result is
  // unpredictable. Add a variant instead.
  inverse: "bg-white text-ink hover:bg-white/90",
  ghost: "text-accent hover:text-accent-strong underline underline-offset-4",
}

/** Renders a Gatsby <Link> for internal routes and an <a> for everything else. */
export const Button = ({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}) => {
  const classes = `${buttonBase} ${variants[variant]} ${className}`
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  )
}

export const ArrowRight = ({ className = "h-4 w-4" }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M2.5 8h11m0 0L9.5 4m4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Check = ({ className = "h-4 w-4" }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M3 8.5 6.2 11.7 13 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/** Bordered card used for capability and pillar blocks. */
export const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-lg border border-line bg-paper-raised p-6 sm:p-8 ${className}`}
  >
    {children}
  </div>
)

/** Definition-style row used for the company information block. */
export const FactRow = ({ label, children }) => (
  <div className="grid gap-1 py-3 sm:grid-cols-[13rem_1fr] sm:gap-6 sm:py-2.5">
    <dt className="text-sm text-ink-soft">{label}</dt>
    <dd className="text-sm font-medium text-ink">{children}</dd>
  </div>
)

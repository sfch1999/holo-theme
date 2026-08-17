import * as React from "react"
import { Link } from "gatsby"
import { Wordmark } from "./brand"
import { Container, ArrowRight } from "./ui"
import { navLinks } from "../data/company"

const linkClasses =
  "rounded px-1 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink motion-reduce:transition-none"

const Nav = () => {
  const [open, setOpen] = React.useState(false)

  // Close the mobile menu on Escape so keyboard users are never trapped.
  React.useEffect(() => {
    if (!open) return undefined
    const onKeyDown = event => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            to="/"
            className="rounded"
            aria-label="ABI AI — home"
            onClick={() => setOpen(false)}
          >
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={linkClasses}
                    activeClassName="text-ink"
                    partiallyActive
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong motion-reduce:transition-none"
            >
              Discuss a project
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <button
            type="button"
            className="-mr-1 inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(value => !value)}
          >
            <svg
              viewBox="0 0 20 20"
              className="h-5 w-5"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              {open ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h14M3 10h14M3 14h14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-paper md:hidden">
          <Container className="py-4">
            <nav aria-label="Primary — mobile">
              <ul className="flex flex-col">
                {navLinks.map(link => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="block border-b border-line py-3 text-base font-medium text-ink"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              to="/contact/"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Discuss a project
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  )
}

export default Nav

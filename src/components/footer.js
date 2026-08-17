import * as React from "react"
import { Link } from "gatsby"
import { Wordmark } from "./brand"
import { Container } from "./ui"
import { company, navLinks } from "../data/company"

const legalLinks = [
  { to: "/privacy/", label: "Privacy Policy" },
  { to: "/terms/", label: "Terms of Use" },
]

const Footer = () => {
  const year = new Date().getFullYear()
  const { registeredOffice: office } = company

  return (
    <footer className="border-t border-line bg-paper-sunken">
      <Container>
        <div className="grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          {/* Company identity — the block due-diligence reviewers look for. */}
          <div>
            <Wordmark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
              AI systems and human data operations built for real-world
              deployment.
            </p>

            <div className="mt-6 space-y-1 text-sm text-ink-soft">
              <p className="font-medium text-ink">{company.legalName}</p>
              <p>{company.jurisdiction}</p>
              <p>Formation No. {company.formationNumber}</p>
              <p>Licence No. {company.licenseNumber}</p>
              <p className="pt-2">
                <span className="text-ink-muted">Registered office:</span>{" "}
                {office.short}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
              Company
            </h2>
            <ul className="mt-4 space-y-3">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-soft transition-colors hover:text-ink motion-reduce:transition-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {legalLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-soft transition-colors hover:text-ink motion-reduce:transition-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="text-ink-soft transition-colors hover:text-ink motion-reduce:transition-none"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.telephoneHref}`}
                  className="text-ink-soft transition-colors hover:text-ink motion-reduce:transition-none"
                >
                  {company.telephone}
                </a>
              </li>
              <li>
                <a
                  href={company.founder.linkedin}
                  className="text-ink-soft transition-colors hover:text-ink motion-reduce:transition-none"
                  rel="noopener noreferrer me"
                  target="_blank"
                >
                  Founder on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-soft">
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-ink-soft">
            Registered in {company.jurisdiction}.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

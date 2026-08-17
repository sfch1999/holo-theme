import * as React from "react"
import Layout from "./layout"
import { Container, Section, Eyebrow } from "./ui"

/**
 * Shared shell and prose styling for the Privacy Policy and Terms of Use.
 * Page metadata is supplied by each page's own `Head` export.
 */
export const LegalPage = ({ title, updated, children }) => (
  <Layout>
    <div className="border-b border-line">
      <Container>
        <div className="max-w-3xl py-16 sm:py-20">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="text-balance text-3xl font-semibold leading-[1.12] tracking-tightest text-ink sm:text-4xl sm:leading-[1.1]">
            {title}
          </h1>
          <p className="mt-5 text-sm text-ink-soft">Last updated: {updated}</p>
        </div>
      </Container>
    </div>

    <Section>
      <Container width="narrow">
        <div className="space-y-10">{children}</div>
      </Container>
    </Section>
  </Layout>
)

export const Clause = ({ heading, children }) => (
  <section>
    <h2 className="text-lg font-semibold tracking-tightest text-ink">
      {heading}
    </h2>
    <div className="mt-3 space-y-4 text-sm leading-relaxed text-ink-soft [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-ink">
      {children}
    </div>
  </section>
)

export const List = ({ children }) => (
  <ul className="ml-5 list-disc space-y-2">{children}</ul>
)

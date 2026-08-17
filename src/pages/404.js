import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Section, SectionHeading, Button } from "../components/ui"

const NotFoundPage = () => (
  <Layout>
    <Section className="py-24 sm:py-32">
      <Container width="narrow">
        <p className="text-sm font-semibold tabular-nums text-accent">404</p>
        <SectionHeading as="h1" className="mt-3">
          We could not find that page.
        </SectionHeading>
        <p className="mt-5 text-base leading-relaxed text-ink-soft">
          The page may have been moved or removed. The links below cover
          everything on this site.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/">Back to home</Button>
          <Button to="/capabilities/" variant="secondary">
            Capabilities
          </Button>
          <Button to="/contact/" variant="secondary">
            Contact
          </Button>
        </div>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage

export const Head = () => (
  <Seo
    title="Page not found"
    description="The page you were looking for could not be found."
    pathname="/404/"
    noindex
  />
)

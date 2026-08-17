import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Container, Section, SectionHeading, Button } from "../../components/ui"
import { company } from "../../data/company"

const ContactSuccessPage = () => (
  <Layout>
    <Section className="py-24 sm:py-32">
      <Container width="narrow">
        <div className="rounded-lg border border-line bg-paper-raised p-8 sm:p-12">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft">
            <svg
              viewBox="0 0 20 20"
              className="h-5 w-5 text-accent-strong"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M4 10.5 8 14.5 16 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <SectionHeading as="h1" className="mt-6">
            Thank you — your message has been received.
          </SectionHeading>

          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            We read every enquiry ourselves and will reply to the email address
            you provided. If your message is time-sensitive, you can reach us
            directly at{" "}
            <a
              className="text-accent underline underline-offset-4"
              href={`mailto:${company.email}`}
            >
              {company.email}
            </a>{" "}
            or{" "}
            <a
              className="text-accent underline underline-offset-4"
              href={`tel:${company.telephoneHref}`}
            >
              {company.telephone}
            </a>
            .
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/">Back to home</Button>
            <Button to="/capabilities/" variant="secondary">
              Explore our capabilities
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  </Layout>
)

export default ContactSuccessPage

export const Head = () => (
  <Seo
    title="Message received"
    description="Thank you — your message has been received by ABI AI."
    pathname="/contact/success/"
    noindex
  />
)

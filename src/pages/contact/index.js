import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {
  Container,
  Section,
  Eyebrow,
  SectionHeading,
  Lede,
} from "../../components/ui"
import { company } from "../../data/company"

const fieldClasses =
  "mt-2 block w-full rounded-md border border-line-strong bg-paper-raised px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"

const labelClasses = "block text-sm font-medium text-ink"

const serviceOptions = [
  "AI product development",
  "Human data operations",
  "Both",
  "General enquiry",
]

const ContactPage = () => {
  const { registeredOffice: office } = company

  return (
    <Layout>
      <div className="border-b border-line">
        <Container>
          <div className="max-w-3xl py-16 sm:py-20">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="text-balance text-3xl font-semibold leading-[1.12] tracking-tightest text-ink sm:text-4xl sm:leading-[1.1] lg:text-[2.75rem] lg:leading-[1.1]">
              Discuss a project.
            </h1>
            <Lede className="mt-6">
              Tell us what you are trying to build or measure. We will respond
              with an honest view of whether we are the right fit, and what a
              sensible first step would look like.
            </Lede>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-xl font-semibold tracking-tightest text-ink">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-ink-soft">
                Fields marked with an asterisk are required.
              </p>

              {/*
                Netlify Forms: the form is detected in the built HTML at deploy
                time and submissions are stored by Netlify. `data-netlify-honeypot`
                adds a hidden decoy field for spam bots. There is no API key or
                third-party script involved, and the form posts normally so it
                still works with JavaScript disabled.
              */}
              <form
                name="contact"
                method="POST"
                action="/contact/success/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="mt-8 space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot: hidden from humans, tempting to bots. */}
                <p className="hidden">
                  <label>
                    Do not fill this in if you are human:{" "}
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className={labelClasses} htmlFor="name">
                      Name <span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      className={fieldClasses}
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div>
                    <label className={labelClasses} htmlFor="email">
                      Business email <span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      className={fieldClasses}
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className={labelClasses} htmlFor="company">
                      Company
                    </label>
                    <input
                      className={fieldClasses}
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                    />
                  </div>

                  <div>
                    <label className={labelClasses} htmlFor="interest">
                      Service interest
                    </label>
                    <select
                      className={fieldClasses}
                      id="interest"
                      name="interest"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {serviceOptions.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClasses} htmlFor="message">
                    Message <span aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <textarea
                    className={fieldClasses}
                    id="message"
                    name="message"
                    rows={6}
                    required
                  />
                </div>

                <p className="text-xs leading-relaxed text-ink-soft">
                  By submitting this form you consent to ABI AI storing the
                  details you provide in order to respond to your enquiry. We do
                  not use them for marketing and we do not share them with third
                  parties. See our{" "}
                  <Link
                    to="/privacy/"
                    className="text-accent underline underline-offset-4"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-strong motion-reduce:transition-none"
                >
                  Send message
                </button>
              </form>
            </div>

            {/* Direct details */}
            <div className="lg:pl-4">
              <div className="rounded-lg border border-line bg-paper-sunken p-6 sm:p-8">
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                  Direct contact
                </h2>
                <dl className="mt-5 space-y-5 text-sm">
                  <div>
                    <dt className="text-ink-soft">Email</dt>
                    <dd className="mt-1">
                      <a
                        className="font-medium text-accent underline-offset-4 hover:underline"
                        href={`mailto:${company.email}`}
                      >
                        {company.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-ink-soft">Telephone</dt>
                    <dd className="mt-1">
                      <a
                        className="font-medium text-accent underline-offset-4 hover:underline"
                        href={`tel:${company.telephoneHref}`}
                      >
                        {company.telephone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-ink-soft">Registered office</dt>
                    <dd className="mt-1 not-italic leading-relaxed text-ink">
                      <address className="not-italic">
                        {company.legalName}
                        <br />
                        {office.line1}
                        <br />
                        {office.line2}
                        <br />
                        {office.city}, {office.country}
                      </address>
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 border-t border-line pt-5 text-xs leading-relaxed text-ink-soft">
                  This is ABI AI&rsquo;s registered office address in Meydan
                  Free Zone. It is not a staffed public office — please contact
                  us by email or telephone rather than visiting.
                </p>
              </div>

              <div className="mt-6 rounded-lg border border-line p-6 sm:p-8">
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                  Company details
                </h2>
                <dl className="mt-4 space-y-2 text-sm text-ink-soft">
                  <div className="flex justify-between gap-4">
                    <dt>Legal name</dt>
                    <dd className="text-right font-medium text-ink">
                      {company.legalName}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Formation No.</dt>
                    <dd className="text-right font-medium text-ink">
                      {company.formationNumber}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Licence No.</dt>
                    <dd className="text-right font-medium text-ink">
                      {company.licenseNumber}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}

export default ContactPage

export const Head = () => (
  <Seo
    title="Contact"
    description="Contact ABI AI to discuss an AI product or human-data programme. Email contact@abi-ai.com, telephone +971 50 481 3070, registered office in Meydan Free Zone, Dubai."
    pathname="/contact/"
    organizationSchema
  />
)

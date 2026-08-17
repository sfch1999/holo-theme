import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Container,
  Section,
  Eyebrow,
  SectionHeading,
  Lede,
  Button,
  FactRow,
  ArrowRight,
} from "../components/ui"
import {
  company,
  publications,
  founderExperience,
  education,
} from "../data/company"

import founderPhotoJpg from "../images/founder-soroush-farghadani.jpg"
import founderPhotoWebp from "../images/founder-soroush-farghadani.webp"

const AboutPage = () => {
  const { registeredOffice: office } = company

  return (
    <Layout>
      <div className="border-b border-line">
        <Container>
          <div className="max-w-3xl py-16 sm:py-20">
            <Eyebrow>About</Eyebrow>
            <h1 className="text-balance text-3xl font-semibold leading-[1.12] tracking-tightest text-ink sm:text-4xl sm:leading-[1.1] lg:text-[2.75rem] lg:leading-[1.1]">
              A focused company built around applied AI and human data.
            </h1>
            <Lede className="mt-6">
              ABI AI exists to help organisations put AI into real use — by
              building the systems themselves, and by producing the human data
              that makes those systems work.
            </Lede>
          </div>
        </Container>
      </div>

      {/* Purpose */}
      <Section>
        <Container width="narrow">
          <Eyebrow>Purpose</Eyebrow>
          <SectionHeading>Why the company exists.</SectionHeading>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              A great deal of AI work stalls between demonstration and
              deployment. A model performs well in a notebook, and then meets
              real data, real users, and real accountability. ABI AI works in
              that gap.
            </p>
            <p>
              We do two things. We build AI products and custom systems for
              organisations that need something fitted to their own workflow.
              And we help AI companies design and operate the human-data
              programmes — collection, annotation, evaluation, red-teaming —
              that determine how good their models actually become.
            </p>
            <p>
              ABI AI was established in {company.established}. We are a small,
              senior operation, and we scope engagements to what we can
              genuinely deliver rather than to what sounds impressive.
            </p>
          </div>
        </Container>
      </Section>

      {/* Company identity */}
      <Section className="border-y border-line bg-paper-sunken">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow>Company identity</Eyebrow>
              <SectionHeading>Registration and licensing.</SectionHeading>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                ABI AI is a licensed free-zone company in Dubai. The details
                below are provided in full for due-diligence purposes.
              </p>
            </div>

            <div className="rounded-lg border border-line bg-paper-raised p-6 sm:p-8">
              <dl className="divide-y divide-line">
                <FactRow label="Legal name">{company.legalName}</FactRow>
                <FactRow label="Legal structure">
                  {company.legalStructure}
                </FactRow>
                <FactRow label="Jurisdiction">{company.jurisdiction}</FactRow>
                <FactRow label="Formation number">
                  {company.formationNumber}
                </FactRow>
                <FactRow label="Business licence number">
                  {company.licenseNumber}
                </FactRow>
                <FactRow label="Established">{company.established}</FactRow>
                <FactRow label="Registered office">
                  <span className="font-normal text-ink-soft">
                    {office.line1}, {office.line2}, {office.city},{" "}
                    {office.country}
                  </span>
                </FactRow>
                <FactRow label="Licensed activities">
                  <ul className="space-y-1 font-normal text-ink-soft">
                    {company.activities.map(activity => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </FactRow>
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      {/* Founder */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[13rem_1fr] lg:gap-14">
            <div>
              <picture>
                <source srcSet={founderPhotoWebp} type="image/webp" />
                <img
                  src={founderPhotoJpg}
                  alt={`Portrait of ${company.founder.name}, founder of ABI AI`}
                  width="400"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  className="w-40 rounded-xl border border-line object-cover sm:w-48 lg:w-full"
                />
              </picture>

              <div className="mt-5 flex flex-col gap-2">
                <a
                  href={company.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  LinkedIn
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={company.founder.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  Google Scholar
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="max-w-2xl">
              <Eyebrow>Founder</Eyebrow>
              <SectionHeading>{company.founder.name}</SectionHeading>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft">
                <p>
                  ABI AI was founded by {company.founder.name}, who works at the
                  intersection of applied machine-learning research and
                  large-scale human-data operations — two capabilities usually
                  found in separate people.
                </p>
                <p>
                  He leads human-data work at xAI, a frontier AI laboratory,
                  where he sets direction for frontier data and evaluation
                  programmes. Before that he led the development of AI for
                  autonomous drone navigation in GPS-denied environments at
                  SOTI&rsquo;s advanced aerospace research group.
                </p>
                <p>
                  That combination is the reason ABI AI does both things it
                  does: the same person who knows what a frontier lab needs from
                  its human data has also shipped machine-learning systems that
                  had to hold up outside the conditions they were trained on.
                </p>
              </div>
            </div>
          </div>

          {/* Explicit separation of founder history from company track record. */}
          <div className="mt-10 rounded-lg border border-accent-line bg-accent-soft p-5 sm:p-6">
            <p className="text-sm leading-relaxed text-accent-strong">
              <strong className="font-semibold">
                A note on how to read this section.
              </strong>{" "}
              The roles and research below are {company.founder.name}&rsquo;s
              own professional and academic experience. They are not presented
              as projects delivered by ABI AI. Where ABI AI is the contracting
              party, that is stated explicitly.
            </p>
          </div>

          <ol className="mt-10 space-y-9">
            {founderExperience.map(item => (
              <li
                key={`${item.role}-${item.org}`}
                className={`border-l-2 pl-6 ${
                  item.viaAbiAi ? "border-accent" : "border-line-strong"
                }`}
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-base font-semibold text-ink">
                    {item.role}
                  </h3>
                  <span className="text-sm text-ink-soft" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-sm font-medium text-accent">
                    {item.org}
                  </span>
                  {item.current ? (
                    <span className="rounded-full border border-accent-line bg-accent-soft px-2 py-0.5 text-[0.6875rem] font-semibold text-accent-strong">
                      Current
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-xs text-ink-soft">
                  {item.period} · {item.location}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
                  {item.body}
                </p>
                {item.points.length ? (
                  <ul className="mt-3 max-w-2xl space-y-2">
                    {item.points.map(point => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-ink-soft"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
              Education
            </h3>
            <ul className="mt-4 space-y-3">
              {education.map(item => (
                <li key={item.qualification} className="text-sm">
                  <span className="font-medium text-ink">
                    {item.qualification}
                  </span>
                  <span className="text-ink-soft">
                    {" "}
                    — {item.institution}, {item.period} ({item.detail})
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 max-w-2xl text-xs leading-relaxed text-ink-soft">
            xAI and SOTI are referenced solely as part of the founder&rsquo;s
            employment history. Neither is a customer, partner, or affiliate of
            ABI AI.
          </p>
        </Container>
      </Section>

      {/* Publications */}
      <Section className="border-y border-line bg-paper-sunken">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Founder publications</Eyebrow>
            <SectionHeading>Peer-reviewed and preprint work.</SectionHeading>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              Co-authored research by {company.founder.name}. Each entry links
              to the publisher or arXiv record so it can be verified directly.
            </p>
          </div>

          <ul className="mt-10 space-y-4">
            {publications.map(paper => (
              <li key={paper.title}>
                <article className="rounded-lg border border-line bg-paper-raised p-6">
                  <h3 className="text-base font-semibold leading-snug text-ink">
                    <a
                      href={paper.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:underline"
                    >
                      {paper.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft">{paper.authors}</p>
                  <p className="mt-1 text-sm text-ink-muted">
                    <span className="italic">{paper.venue}</span>, {paper.year}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
                    {paper.note}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Customer */}
      <Section>
        <Container width="narrow">
          <Eyebrow>Customers</Eyebrow>
          <SectionHeading>Current engagement.</SectionHeading>
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            ABI AI currently supports <strong className="text-ink">G2i</strong>
            &rsquo;s human-data operations, with founder {company.founder.name}{" "}
            serving as Head of Human Data.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            This is the company&rsquo;s current named customer engagement. We do
            not publish client counts, case-study metrics, or testimonials we
            cannot substantiate.
          </p>
        </Container>
      </Section>

      <Section className="border-t border-line bg-ink">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <h2 className="text-balance text-2xl font-semibold tracking-tightest text-white sm:text-3xl">
                Questions about the company?
              </h2>
              <p className="mt-3 text-base text-white/70">
                We are happy to provide further documentation for due-diligence
                or onboarding purposes.
              </p>
            </div>
            <Button to="/contact/" variant="inverse" className="shrink-0">
              Get in touch
              <ArrowRight />
            </Button>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}

export default AboutPage

export const Head = () => (
  <Seo
    title="About"
    description="ABI AI is an AI product and human-data company registered in Meydan Free Zone, Dubai, founded by Soroush Farghadani. Company identity, licensing details, and founder background."
    pathname="/about/"
    organizationSchema
  />
)

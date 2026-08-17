import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Container,
  Section,
  Eyebrow,
  SectionHeading,
  Lede,
  Button,
  Card,
  ArrowRight,
  Check,
} from "../components/ui"
import { company } from "../data/company"

const pillars = [
  {
    title: "AI Product Development",
    summary:
      "We design and build AI systems that go into production — not prototypes that stall after a demo.",
    points: [
      "Custom AI applications and internal tools",
      "LLM-powered assistants and agent workflows",
      "AI-enabled workflow automation",
      "Data and decision-support systems",
      "Model integration and evaluation",
      "Applied AI research and consulting",
    ],
  },
  {
    title: "Human Data Operations",
    summary:
      "We help AI organisations design and run the human-data programmes their models depend on.",
    points: [
      "Human data collection and expert domain data",
      "Annotation, curation, and quality assurance",
      "Model evaluation and preference data",
      "Red-teaming and safety evaluation",
      "Contributor workforce operations",
      "Multilingual and specialist programmes",
    ],
  },
]

const reasons = [
  {
    title: "Senior-led engagements",
    body: "Work is led directly by the founder rather than handed to a junior delivery layer. You deal with the person doing the thinking.",
  },
  {
    title: "Research-grounded practice",
    body: "Our approach comes out of peer-reviewed machine-learning research in finance, healthcare, and autonomous systems — not vendor marketing.",
  },
  {
    title: "Operational, not theoretical",
    body: "Human-data programmes are designed around throughput, quality measurement, and the people doing the work.",
  },
  {
    title: "Transparent by default",
    body: "We are a young company and we say so. Scope, capacity, and limitations are stated plainly before an engagement starts.",
  },
]

const IndexPage = () => (
  <Layout>
    {/* Hero */}
    <div className="relative overflow-hidden border-b border-line">
      <div
        className="grid-backdrop pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="py-20 sm:py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-line bg-accent-soft px-3 py-1 text-xs font-medium text-accent-strong">
              Registered in Meydan Free Zone, Dubai
            </p>
            <h1 className="text-balance text-3xl font-semibold leading-[1.12] tracking-tightest text-ink sm:text-4xl sm:leading-[1.1] lg:text-[3.25rem] lg:leading-[1.08]">
              AI systems and human data operations built for real-world
              deployment.
            </h1>
            <Lede className="mt-6 max-w-2xl text-xl">
              ABI AI builds custom AI products for organisations, and helps AI
              companies design and operate the high-quality human-data
              programmes their models depend on.
            </Lede>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact/">
                Discuss a project
                <ArrowRight />
              </Button>
              <Button to="/capabilities/" variant="secondary">
                Explore our capabilities
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>

    {/* What we do */}
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <SectionHeading>
            Two disciplines that support each other.
          </SectionHeading>
          <Lede className="mt-5">
            Building AI systems well and producing good human data are the same
            problem seen from two directions. We work across both.
          </Lede>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {pillars.map(pillar => (
            <Card key={pillar.title} className="flex flex-col">
              <h3 className="text-xl font-semibold tracking-tightest text-ink">
                {pillar.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {pillar.summary}
              </p>
              <ul className="mt-6 space-y-2.5">
                {pillar.points.map(point => (
                  <li key={point} className="flex gap-3 text-sm text-ink-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/capabilities/"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
              >
                See how we work
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </Section>

    {/* Why ABI AI */}
    <Section className="border-y border-line bg-paper-sunken">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Why ABI AI</Eyebrow>
          <SectionHeading>
            Small, senior, and specific about what we do.
          </SectionHeading>
        </div>
        <div className="mt-12 grid gap-x-12 gap-y-9 sm:grid-cols-2">
          {reasons.map(reason => (
            <div key={reason.title}>
              <h3 className="text-base font-semibold text-ink">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>

    {/* Current customer */}
    <Section>
      <Container>
        <div className="rounded-lg border border-line bg-paper-raised p-8 sm:p-10">
          <Eyebrow>Current customer</Eyebrow>
          <p className="max-w-3xl text-xl leading-relaxed text-ink sm:text-2xl">
            ABI AI currently supports{" "}
            <span className="font-semibold">G2i</span>&rsquo;s human-data
            operations, with founder {company.founder.name} serving as Head of
            Human Data.
          </p>
          <p className="mt-5 max-w-2xl text-sm text-ink-soft">
            This is our current customer engagement. We would rather name one
            real customer than imply a roster we do not have.
          </p>
        </div>
      </Container>
    </Section>

    {/* Founder preview */}
    <Section className="border-t border-line pt-0">
      <Container>
        <div className="grid gap-10 pt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Eyebrow>Founder experience</Eyebrow>
            <SectionHeading>{company.founder.name}</SectionHeading>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              ABI AI was founded by {company.founder.name}, who has led
              human-data work at xAI, built and deployed autonomous drone
              systems in industry, and published peer-reviewed machine-learning
              research spanning financial AI, explainable AI for healthcare,
              computer vision, and autonomous systems.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              The experience described here is the founder&rsquo;s own
              professional and academic background. It is not presented as work
              delivered by ABI AI.
            </p>
            <Button to="/about/" variant="secondary" className="mt-8">
              Read the full profile
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                label: "Frontier AI lab",
                value: "Human Data — Lead at xAI",
              },
              {
                label: "Robotics & autonomy",
                value: "Autonomous drones developed and deployed at SOTI",
              },
              {
                label: "Academic background",
                value: "University of Toronto",
              },
              {
                label: "Published research",
                value: "Frontiers in AI · MICCAI MLMI",
              },
            ].map(item => (
              <div
                key={item.label}
                className="rounded-lg border border-line bg-paper-raised p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium leading-snug text-ink">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>

    {/* Final CTA */}
    <Section className="border-t border-line bg-ink">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tightest text-white sm:text-3xl">
            Tell us what you are trying to build or measure.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Whether it is an AI system you need built or a human-data programme
            you need designed and run, the first step is a straightforward
            conversation about scope and fit.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white/90 motion-reduce:transition-none"
            >
              Discuss a project
              <ArrowRight />
            </Link>
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 motion-reduce:transition-none"
            >
              {company.email}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  </Layout>
)

export default IndexPage

export const Head = () => (
  <Seo
    title="AI systems and human data operations"
    description="ABI AI designs and builds AI products and runs human-data programmes for organisations deploying AI in the real world. Registered in Meydan Free Zone, Dubai."
    pathname="/"
    organizationSchema
  />
)

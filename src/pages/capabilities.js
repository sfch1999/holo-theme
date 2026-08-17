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
  ArrowRight,
  Check,
} from "../components/ui"

const services = [
  {
    id: "ai-product-development",
    eyebrow: "Service 01",
    title: "AI Product Development",
    intro:
      "We design and build AI systems for organisations that need something specific to their own data, workflow, and constraints — rather than a generic tool bent into shape.",
    deliverables: [
      "Custom AI applications built around an existing workflow",
      "LLM-powered tools, assistants, and agent systems",
      "AI-enabled workflow automation",
      "Data and decision-support systems",
      "Model selection, integration, and evaluation harnesses",
      "Computer vision and autonomous systems work",
      "Applied AI research and technical consulting",
    ],
    approach: [
      {
        title: "Start with the decision, not the model",
        body: "We begin with the decision or workflow the system is meant to improve, and work backwards to what actually needs to be built. Often that is smaller than expected.",
      },
      {
        title: "Evaluation before scale",
        body: "A system that cannot be measured cannot be improved or trusted. We build the evaluation alongside the product, not after it.",
      },
      {
        title: "Built to be handed over",
        body: "Code, documentation, and evaluation belong to you. We would rather leave a team able to maintain the system than create a dependency.",
      },
    ],
    suitedTo: [
      "Organisations with a concrete workflow they want to automate or augment",
      "Teams that need applied AI expertise without hiring a permanent function",
      "Companies that have run a proof of concept and need it made production-ready",
    ],
  },
  {
    id: "human-data-operations",
    eyebrow: "Service 02",
    title: "Human Data Operations",
    intro:
      "Model quality is bounded by data quality. We help AI organisations design, staff, and operate human-data programmes that produce reliable, well-specified data at a defensible standard.",
    deliverables: [
      "Human data collection programme design",
      "Expert and domain-specific data sourcing",
      "Annotation guidelines, curation, and quality assurance",
      "Model evaluation and preference/response data",
      "Red-teaming and safety evaluation programmes",
      "Contributor workforce operations and management",
      "Multilingual and specialist data programmes",
    ],
    approach: [
      {
        title: "Specification is the whole job",
        body: "Most data quality problems are specification problems. We invest heavily in guidelines, edge-case definitions, and worked examples before volume work begins.",
      },
      {
        title: "Measure the measurers",
        body: "Inter-annotator agreement, gold sets, and audit sampling are built into the programme so quality is observed continuously rather than assumed.",
      },
      {
        title: "Treat contributors as part of the system",
        body: "Recruitment, calibration, feedback, and retention determine data quality as much as tooling does. We design for the people doing the work.",
      },
    ],
    suitedTo: [
      "AI labs and model developers building evaluation or preference datasets",
      "Companies needing domain-expert data in specialist or regulated fields",
      "Teams scaling an existing annotation effort that has outgrown its process",
    ],
  },
]

const engagement = [
  {
    step: "01",
    title: "Scoping conversation",
    body: "A direct discussion of the problem, constraints, timeline, and whether we are the right fit. If we are not, we will say so.",
  },
  {
    step: "02",
    title: "Written proposal",
    body: "Scope, approach, deliverables, and commercial terms in writing, with assumptions and exclusions stated explicitly.",
  },
  {
    step: "03",
    title: "Delivery",
    body: "Work proceeds in reviewable increments with regular checkpoints, so direction can be corrected early rather than at the end.",
  },
  {
    step: "04",
    title: "Handover",
    body: "Documentation, evaluation, and operating procedures transfer to your team, with support arrangements agreed in advance.",
  },
]

const CapabilitiesPage = () => (
  <Layout>
    <div className="border-b border-line">
      <Container>
        <div className="max-w-3xl py-16 sm:py-20">
          <Eyebrow>Capabilities</Eyebrow>
          <h1 className="text-balance text-3xl font-semibold leading-[1.12] tracking-tightest text-ink sm:text-4xl sm:leading-[1.1] lg:text-[2.75rem] lg:leading-[1.1]">
            What we do, and how we do it.
          </h1>
          <Lede className="mt-6">
            ABI AI operates two complementary service lines. Both are delivered
            by a small, senior team, and both are scoped to what we can
            genuinely commit to.
          </Lede>
        </div>
      </Container>
    </div>

    {services.map((service, index) => (
      <Section
        key={service.id}
        id={service.id}
        className={index % 2 === 1 ? "border-y border-line bg-paper-sunken" : ""}
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <Eyebrow>{service.eyebrow}</Eyebrow>
              <SectionHeading as="h2">{service.title}</SectionHeading>
              <p className="mt-5 text-base leading-relaxed text-ink-soft">
                {service.intro}
              </p>

              <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                Suited to
              </h3>
              <ul className="mt-4 space-y-3">
                {service.suitedTo.map(item => (
                  <li key={item} className="flex gap-3 text-sm text-ink-soft">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="rounded-lg border border-line bg-paper-raised p-6 sm:p-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                  Deliverables
                </h3>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {service.deliverables.map(item => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm text-ink-muted"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                Operating approach
              </h3>
              <div className="mt-5 space-y-6">
                {service.approach.map(item => (
                  <div
                    key={item.title}
                    className="border-l-2 border-accent-line pl-5"
                  >
                    <h4 className="text-base font-semibold text-ink">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    ))}

    <Section>
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>How an engagement runs</Eyebrow>
          <SectionHeading>From first conversation to handover.</SectionHeading>
        </div>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {engagement.map(item => (
            <li key={item.step}>
              <p className="text-sm font-semibold tabular-nums text-accent">
                {item.step}
              </p>
              <h3 className="mt-3 text-base font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>

    <Section className="border-t border-line bg-paper-sunken">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <SectionHeading>Have a project in mind?</SectionHeading>
            <p className="mt-3 text-base text-ink-soft">
              Tell us the problem and we will tell you honestly whether we are
              the right fit.
            </p>
          </div>
          <Button to="/contact/" className="shrink-0">
            Discuss a project
            <ArrowRight />
          </Button>
        </div>
      </Container>
    </Section>
  </Layout>
)

export default CapabilitiesPage

export const Head = () => (
  <Seo
    title="Capabilities"
    description="ABI AI's two service lines: AI product development for organisations, and human data operations for AI companies — deliverables, operating approach, and who each is suited to."
    pathname="/capabilities/"
  />
)

/**
 * Single source of truth for ABI AI's company facts.
 *
 * Every page, the footer, and the JSON-LD structured data read from here so
 * that legal details can never drift out of sync between them. If a detail
 * changes (licence renewal, new address, new contact), change it once here.
 */

export const company = {
  brand: "ABI AI",
  legalName: "ABI AI L.L.C-FZ",
  legalStructure: "Limited Liability Company - Free Zone",
  jurisdiction: "Meydan Free Zone, Dubai, United Arab Emirates",
  formationNumber: "2652073",
  licenseNumber: "2652073.01",
  established: "2026",
  registeredOffice: {
    line1: "Meydan Grandstand, 6th Floor",
    line2: "Meydan Road, Nad Al Sheba",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    short:
      "Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.",
  },
  email: "contact@abi-ai.com",
  telephone: "+971 50 481 3070",
  telephoneHref: "+971504813070",
  url: "https://abi-ai.com",
  founder: {
    name: "Soroush Farghadani",
    linkedin: "https://www.linkedin.com/in/soroush-farghadani/",
    scholar: "https://scholar.google.com/citations?user=Gv9ET40AAAAJ&hl=en",
  },
  /** Licensed business activities, exactly as licensed. */
  activities: [
    "Computer programming, consultancy, and related activities",
    "Management consultancy",
    "Innovation and artificial intelligence research and consultancy",
  ],
}

/**
 * Founder's professional history, taken from his CV.
 *
 * This is the founder's own experience and is presented as such throughout the
 * site — never as work delivered by ABI AI. Where ABI AI is the contracting
 * party (the G2i engagement) that is stated explicitly.
 */
export const founderExperience = [
  {
    role: "Human Data — Lead",
    org: "xAI",
    period: "Apr 2025 – Present",
    location: "Palo Alto, CA (remote)",
    current: true,
    body: "Sets direction for frontier data and evaluation workstreams at a frontier AI laboratory — deciding focus areas, defining quality standards, and turning broad model-assessment needs into executable plans for distributed expert teams.",
    points: [
      "Led a cross-domain evaluation initiative with approximately 450 AI tutors across STEM, medicine, and law, producing long-horizon tasks, expert rubrics, and golden responses for frontier model assessment",
      "Built the operating workflows behind human-data generation: task design guidance, reviewer processes, rubric standards, and quality-control systems",
      "Translated model behaviour, failure modes, and evaluation results into structured feedback loops for research and engineering teams",
    ],
  },
  {
    role: "Head of Human Data",
    org: "G2i",
    period: "Current",
    location: "Contracted and delivered through ABI AI",
    viaAbiAi: true,
    body: "Leads human-data operations for G2i, a current ABI AI customer. This is the one engagement on this page where ABI AI is the contracting party.",
    points: [],
  },
  {
    role: "Lead Data Scientist",
    org: "SOTI — Advanced Aerospace Research",
    period: "May 2022 – Mar 2025",
    location: "Toronto, Canada",
    body: "Led end-to-end development of AI systems for autonomous drone navigation in GPS-denied environments — the kind of problem where a model that only works in benign conditions is worse than none at all.",
    points: [
      "Vision-based landing, static and dynamic obstacle avoidance, and adaptive path planning",
      "Designed evaluation standards and reliability benchmarks for autonomy systems, improving safety, robustness, and deployment readiness",
      "Turned experimental models into dependable, production-oriented workflows for mission-critical applications",
    ],
  },
  {
    role: "Machine Learning Researcher",
    org: "Rotman School of Management, University of Toronto",
    period: "Sep 2021 – May 2022",
    location: "Advisor: Prof. John C. Hull",
    body: "Designed and tuned a novel distributional reinforcement-learning method for optimal hedging under uncertainty in financial markets, published and presented at academic and industry venues.",
    points: [],
  },
  {
    role: "Machine Learning Researcher",
    org: "Technical University of Munich",
    period: "Oct 2019 – Aug 2021",
    location: "Munich, Germany (remote)",
    body: "Published applied machine-learning research spanning interpretable graph neural networks and medical imaging, including deep-learning pipelines for disease prediction and early dementia detection under limited-data constraints.",
    points: [],
  },
]

export const education = [
  {
    qualification: "M.Sc. Computer Science, concentration in Data Science",
    institution: "University of Toronto",
    period: "Sep 2021 – Dec 2022",
    detail: "GPA 4.0 / 4.0",
  },
]

/**
 * Peer-reviewed and preprint work by the founder. Every entry below was
 * verified against the publisher or arXiv listing — do not add an entry that
 * cannot be linked to a primary source.
 */
/**
 * Authors are listed in published order, with `equal: true` on every author the
 * paper marks as an equal contributor and `self: true` on the founder. Joint
 * first authorship is shown with the standard ⋆ notation rather than by
 * reordering the list, so the citation always matches what a reader finds at
 * the DOI. Both equal-contribution claims below were checked against the
 * "Equal contribution" footnote on the papers' title pages.
 */
export const publications = [
  {
    title: "Gamma and vega hedging using deep distributional reinforcement learning",
    authors: [
      { name: "J. Cao" },
      { name: "J. Chen" },
      { name: "S. Farghadani", self: true },
      { name: "J. Hull" },
      { name: "Z. Poulos" },
      { name: "Z. Wang" },
      { name: "J. Yuan" },
    ],
    venue: "Frontiers in Artificial Intelligence",
    year: "2023",
    href: "https://doi.org/10.3389/frai.2023.1129370",
    note: "Reinforcement learning with quantile regression applied to hedging a stochastically arriving derivatives book. Also presented at RiskMinds and CDI.",
  },
  {
    title:
      "IA-GCN: Interpretable Attention Based Graph Convolutional Network for Disease Prediction",
    authors: [
      { name: "A. Kazi", equal: true },
      { name: "S. Farghadani", equal: true, self: true },
      { name: "I. Aganj" },
      { name: "N. Navab" },
    ],
    equalContribution: true,
    venue: "Machine Learning in Medical Imaging (MLMI), MICCAI",
    year: "2023",
    href: "https://doi.org/10.1007/978-3-031-45673-2_38",
    altHref: "https://arxiv.org/abs/2103.15587",
    altLabel: "arXiv:2103.15587",
    note: "An attention module that exposes which input features drive a clinical prediction, rather than returning an unexplained score.",
  },
  {
    title:
      "Dementia Severity Classification under Small Sample Size and Weak Supervision in Thick Slice MRI",
    authors: [
      { name: "R. Shirkavand", equal: true },
      { name: "S. Ayromlou", equal: true },
      { name: "S. Farghadani", equal: true, self: true },
      { name: "M. Tahaei" },
      { name: "F. Pourakpour" },
      { name: "et al." },
    ],
    equalContribution: true,
    venue: "arXiv preprint",
    year: "2021",
    href: "https://arxiv.org/abs/2103.10056",
    note: "Learning from limited, weakly labelled clinical imaging data.",
  },
]

export const navLinks = [
  { to: "/capabilities/", label: "Capabilities" },
  { to: "/about/", label: "About" },
  { to: "/contact/", label: "Contact" },
]

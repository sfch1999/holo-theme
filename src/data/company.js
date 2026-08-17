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
  },
  /** Licensed business activities, exactly as licensed. */
  activities: [
    "Computer programming, consultancy, and related activities",
    "Management consultancy",
    "Innovation and artificial intelligence research and consultancy",
  ],
}

/**
 * Peer-reviewed and preprint work by the founder. Every entry below was
 * verified against the publisher or arXiv listing — do not add an entry that
 * cannot be linked to a primary source.
 */
export const publications = [
  {
    title: "Gamma and vega hedging using deep distributional reinforcement learning",
    authors:
      "J. Cao, J. Chen, S. Farghadani, J. Hull, Z. Poulos, Z. Wang, J. Yuan",
    venue: "Frontiers in Artificial Intelligence",
    year: "2023",
    href: "https://doi.org/10.3389/frai.2023.1129370",
    note: "Reinforcement learning with quantile regression applied to hedging a stochastically arriving derivatives book.",
  },
  {
    title:
      "IA-GCN: Interpretable Attention Based Graph Convolutional Network for Disease Prediction",
    authors: "A. Kazi, S. Farghadani, I. Aganj, N. Navab",
    venue: "Machine Learning in Medical Imaging (MLMI), MICCAI",
    year: "2023",
    href: "https://doi.org/10.1007/978-3-031-45673-2_38",
    note: "An attention module that exposes which input features drive a clinical prediction, rather than returning an unexplained score.",
  },
  {
    title:
      "Dementia Severity Classification under Small Sample Size and Weak Supervision in Thick Slice MRI",
    authors:
      "R. Shirkavand, S. Ayromlou, S. Farghadani, M. Tahaei, F. Pourakpour, et al.",
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

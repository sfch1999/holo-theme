import * as React from "react"
import { company } from "../data/company"

const SITE_NAME = "ABI AI"
const SITE_URL = company.url
const DEFAULT_DESCRIPTION =
  "ABI AI builds custom AI products and runs human-data programmes for organisations deploying AI in the real world. ABI AI L.L.C-FZ, registered in Meydan Free Zone, Dubai."

const organizationSchemaObject = description => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.brand,
  legalName: company.legalName,
  url: company.url,
  email: company.email,
  telephone: company.telephone,
  foundingDate: company.established,
  logo: `${SITE_URL}/og-image.png`,
  image: `${SITE_URL}/og-image.png`,
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.registeredOffice.line1}, ${company.registeredOffice.line2}`,
    addressLocality: company.registeredOffice.city,
    addressCountry: company.registeredOffice.countryCode,
  },
  identifier: [
    {
      "@type": "PropertyValue",
      name: "Formation Number",
      value: company.formationNumber,
    },
    {
      "@type": "PropertyValue",
      name: "Business Licence Number",
      value: company.licenseNumber,
    },
  ],
  founder: {
    "@type": "Person",
    name: company.founder.name,
    sameAs: [company.founder.linkedin],
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Business enquiries",
    email: company.email,
    telephone: company.telephone,
  },
})

/**
 * Head content for a page.
 *
 * This is rendered through Gatsby's Head API (`export const Head` in each
 * page), not react-helmet — Head API is server-rendered by Gatsby with no
 * extra plugin, so the tags are present in the static HTML that crawlers and
 * link unfurlers actually read.
 */
const Seo = ({
  title,
  description,
  pathname = "/",
  organizationSchema = false,
  noindex = false,
}) => {
  const metaDescription = description || DEFAULT_DESCRIPTION
  const canonical = `${SITE_URL}${pathname}`
  const socialImage = `${SITE_URL}/og-image.png`
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME

  return (
    <>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      {noindex ? <meta name="robots" content="noindex, follow" /> : null}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="ABI AI — AI systems and human data operations built for real-world deployment"
      />
      <meta property="og:locale" content="en" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={socialImage} />

      <meta name="theme-color" content="#FBFBF9" />

      {organizationSchema ? (
        <script type="application/ld+json">
          {JSON.stringify(organizationSchemaObject(metaDescription))}
        </script>
      ) : null}
    </>
  )
}

export default Seo

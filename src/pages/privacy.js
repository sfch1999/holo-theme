import * as React from "react"
import { LegalPage, Clause, List } from "../components/legal"
import Seo from "../components/seo"
import { company } from "../data/company"

const PrivacyPage = () => (
  <LegalPage title="Privacy Policy" updated="17 August 2026">
    <Clause heading="Who we are">
      <p>
        This website is operated by <strong>{company.legalName}</strong>{" "}
        (&ldquo;ABI AI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a free-zone
        limited liability company registered in {company.jurisdiction}, formation
        number {company.formationNumber}, licence number {company.licenseNumber}.
      </p>
      <p>
        Our registered office is {company.registeredOffice.short}. You can
        contact us about this policy at{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </Clause>

    <Clause heading="Scope of this policy">
      <p>
        This policy describes how we handle personal information collected
        through this website, <a href={company.url}>abi-ai.com</a>. It does not
        cover information we process under a separate contract while delivering
        services to a customer; that is governed by the agreement with that
        customer.
      </p>
    </Clause>

    <Clause heading="What we collect">
      <p>We collect only two categories of information through this website.</p>
      <List>
        <li>
          <strong>Information you submit through the contact form.</strong> The
          name, business email address, company name (optional), service
          interest (optional), and message content you choose to provide.
        </li>
        <li>
          <strong>Standard server and delivery logs.</strong> Our hosting
          provider records technical information such as IP address, user agent,
          requested URL, and timestamp as part of serving and protecting the
          website.
        </li>
      </List>
      <p>
        We do not use advertising cookies, analytics cookies, tracking pixels,
        or third-party marketing scripts on this website. We do not attempt to
        build a profile of you across other websites.
      </p>
    </Clause>

    <Clause heading="How we use it">
      <List>
        <li>
          To read and respond to the enquiry you sent us, and to continue that
          correspondence.
        </li>
        <li>
          To operate, secure, and troubleshoot the website, and to detect and
          filter automated spam submissions.
        </li>
        <li>
          To comply with legal or regulatory obligations that apply to us.
        </li>
      </List>
      <p>
        We do not sell personal information, and we do not use contact form
        submissions to send marketing communications.
      </p>
    </Clause>

    <Clause heading="Service providers">
      <p>
        This website is built as static files and hosted by{" "}
        <strong>Netlify</strong>, which serves the site and processes contact
        form submissions on our behalf. Netlify therefore processes the
        information described above as part of providing that service, including
        automated spam filtering. Netlify operates infrastructure outside the
        United Arab Emirates, so information submitted through this site may be
        processed outside your country of residence.
      </p>
      <p>
        Our business email is provided by a third-party email provider, which
        processes correspondence you send to us.
      </p>
      <p>
        We do not share your information with any other third party except where
        we are required to do so by law.
      </p>
    </Clause>

    <Clause heading="How long we keep it">
      <p>
        Contact form submissions and related correspondence are retained for as
        long as needed to handle your enquiry and to keep a reasonable record of
        our business communications. Where an enquiry does not lead to an
        engagement, we delete the submission once it is no longer needed. You may
        ask us to delete your enquiry at any time.
      </p>
    </Clause>

    <Clause heading="Your choices">
      <p>
        You can ask us to provide a copy of the information we hold about you,
        correct it if it is inaccurate, or delete it. Write to{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a> and we will
        respond within a reasonable period.
      </p>
      <p>
        You are never required to use the contact form. You can email or
        telephone us directly using the details on our{" "}
        <a href="/contact/">contact page</a> instead.
      </p>
    </Clause>

    <Clause heading="Security">
      <p>
        This website is served over HTTPS, and we limit access to enquiry data to
        those who need it to respond to you. No method of transmission or storage
        is completely secure, so please do not send confidential or sensitive
        information through the contact form. If you need to share something
        sensitive, contact us first and we will agree a suitable method.
      </p>
    </Clause>

    <Clause heading="Children">
      <p>
        This website is intended for business use and is not directed at
        children. We do not knowingly collect information from children.
      </p>
    </Clause>

    <Clause heading="Changes to this policy">
      <p>
        If we change how this website handles personal information, we will
        update this page and revise the &ldquo;last updated&rdquo; date above.
      </p>
    </Clause>
  </LegalPage>
)

export default PrivacyPage

export const Head = () => (
  <Seo
    title="Privacy Policy"
    description="How ABI AI handles personal information submitted through abi-ai.com, including contact form data and website hosting logs."
    pathname="/privacy/"
  />
)

import * as React from "react"
import { LegalPage, Clause, List } from "../components/legal"
import Seo from "../components/seo"
import { company } from "../data/company"

const TermsPage = () => (
  <LegalPage title="Terms of Use" updated="17 August 2026">
    <Clause heading="About these terms">
      <p>
        These terms govern your use of <a href={company.url}>abi-ai.com</a>{" "}
        (the &ldquo;website&rdquo;), operated by{" "}
        <strong>{company.legalName}</strong> (&ldquo;ABI AI&rdquo;), a free-zone
        limited liability company registered in {company.jurisdiction}. By using
        the website, you accept these terms. If you do not accept them, please do
        not use the website.
      </p>
    </Clause>

    <Clause heading="What this website is">
      <p>
        This website provides general information about ABI AI and the services
        we offer. It is an informational website, not an offer, quotation, or
        contract. Any engagement between you and ABI AI is governed exclusively
        by a separate written agreement signed by both parties.
      </p>
      <p>
        Nothing on this website constitutes professional, legal, financial, or
        investment advice, and it should not be relied on as such.
      </p>
    </Clause>

    <Clause heading="Accuracy of information">
      <p>
        We take care to keep the information on this website accurate and
        current, including our company registration details and descriptions of
        our capabilities. However, the website is provided for general
        information and we do not warrant that all content is complete,
        error-free, or up to date at any given moment.
      </p>
      <p>
        Research publications referenced on this website are the work of the
        named authors and are linked to their original publishers. They are
        cited as the founder&rsquo;s academic background and are not
        representations about ABI AI&rsquo;s services.
      </p>
    </Clause>

    <Clause heading="Acceptable use">
      <p>You agree not to:</p>
      <List>
        <li>
          use the website in a way that breaches any applicable law or
          regulation;
        </li>
        <li>
          attempt to gain unauthorised access to the website, its hosting
          infrastructure, or any connected system;
        </li>
        <li>
          submit false, misleading, unlawful, or abusive content through the
          contact form, or use it to distribute unsolicited commercial messages;
        </li>
        <li>
          interfere with the normal operation of the website, including through
          automated scraping that places an unreasonable load on it.
        </li>
      </List>
    </Clause>

    <Clause heading="Intellectual property">
      <p>
        The content, design, text, and graphics on this website are owned by ABI
        AI or used with permission, and are protected by applicable intellectual
        property laws. You may view, download, and print pages for your own
        reference or for legitimate business evaluation of our services. You may
        not otherwise reproduce, republish, or exploit the content commercially
        without our prior written consent.
      </p>
      <p>
        Third-party names referenced on this website, including those of
        organisations connected to the founder&rsquo;s professional experience,
        remain the property of their respective owners. Their mention does not
        imply any endorsement, partnership, or affiliation beyond what is
        expressly stated.
      </p>
    </Clause>

    <Clause heading="External links">
      <p>
        This website links to external sites, including publishers of research
        papers and professional profiles. We do not control those sites and are
        not responsible for their content, availability, or privacy practices.
      </p>
    </Clause>

    <Clause heading="Availability and liability">
      <p>
        We aim to keep the website available, but we do not guarantee
        uninterrupted or error-free access, and we may change, suspend, or
        withdraw all or part of it at any time.
      </p>
      <p>
        To the fullest extent permitted by law, ABI AI is not liable for any
        indirect or consequential loss, or for any loss of profit, revenue,
        data, or business, arising from your use of, or inability to use, this
        website. Nothing in these terms excludes or limits liability where it
        would be unlawful to do so.
      </p>
    </Clause>

    <Clause heading="Privacy">
      <p>
        Our handling of personal information submitted through this website is
        described in our <a href="/privacy/">Privacy Policy</a>.
      </p>
    </Clause>

    <Clause heading="Governing law">
      <p>
        These terms are governed by the laws applicable in the Emirate of Dubai
        and the United Arab Emirates, and the courts having jurisdiction there
        shall have exclusive jurisdiction over any dispute arising from them.
      </p>
    </Clause>

    <Clause heading="Contact">
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>, or by post to{" "}
        {company.legalName}, {company.registeredOffice.short}
      </p>
    </Clause>
  </LegalPage>
)

export default TermsPage

export const Head = () => (
  <Seo
    title="Terms of Use"
    description="Terms governing use of the abi-ai.com website, operated by ABI AI L.L.C-FZ."
    pathname="/terms/"
  />
)

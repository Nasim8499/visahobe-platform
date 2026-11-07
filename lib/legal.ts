export type LegalSection = { heading: string; body: string[] };

export type LegalDoc = {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

const updated = "7 November 2026";

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    updated,
    intro:
      "This policy explains what personal data VisaHOBe PTE. LTD. collects, why we collect it, who we share it with and how you can have it deleted. It applies to this website and to services we deliver.",
    sections: [
      {
        heading: "1. Who we are",
        body: [
          "VisaHOBe PTE. LTD. is a company incorporated in Singapore. For the purposes of the EU and UK General Data Protection Regulation, we act as a data controller for the personal data described here.",
          "You can reach our privacy contact at hello@visahobe.com.",
        ],
      },
      {
        heading: "2. Data we collect",
        body: [
          "Contact data: name, email address, phone number, country of residence and the message you send us.",
          "Identification and application data: passport details, photographs, educational records, employment history, salary evidence, family details and any document you upload in support of an application.",
          "Technical data: IP address, browser type, pages visited and cookie identifiers, where you have consented to analytics cookies.",
          "Billing data: invoice records. Card details are handled by our payment processor and never stored on our systems.",
        ],
      },
      {
        heading: "3. Why we use it",
        body: [
          "To assess whether a route is available to you and to quote for it.",
          "To prepare, review and submit applications to government authorities and appointed partners on your instruction.",
          "To communicate with you about your case, including status updates and requests for missing documents.",
          "To meet legal, accounting and anti-money-laundering obligations.",
          "To improve the website, where you have consented to analytics cookies.",
        ],
      },
      {
        heading: "4. Legal bases",
        body: [
          "Where GDPR applies, we rely on performance of a contract for application work, legitimate interests for responding to enquiries and improving our services, consent for analytics cookies, and legal obligation for record keeping.",
        ],
      },
      {
        heading: "5. Who we share with",
        body: [
          "Government authorities and their appointed portals, where required to file your application.",
          "Licensed local partners in Serbia, Russia and Belarus where the route requires a locally registered entity. The destination page tells you when a partner is used.",
          "Service providers who process data on our behalf: cloud hosting, email delivery, payment processing and document storage, under written data processing terms.",
          "Professional advisers and auditors where necessary, and authorities where legally compelled.",
          "We do not sell personal data and we do not share it for third-party advertising.",
        ],
      },
      {
        heading: "6. International transfers",
        body: [
          "Because immigration work crosses borders, your data may be transferred to the country of destination and to our service providers. Where data leaves the EEA or the UK, we rely on standard contractual clauses or an equivalent lawful transfer mechanism.",
        ],
      },
      {
        heading: "7. Retention",
        body: [
          "Application files are retained for seven years after the case closes, to satisfy audit and legal obligations. Enquiries that do not become cases are deleted after twenty-four months. You may request earlier deletion where no legal obligation requires retention.",
        ],
      },
      {
        heading: "8. Your rights",
        body: [
          "You can request access to your data, correction of inaccuracies, deletion, restriction of processing, portability, and objection to processing based on legitimate interests. You can withdraw consent for analytics cookies at any time.",
          "Use the Delete my data option in your account, or email hello@visahobe.com. We respond within thirty days. You also have the right to complain to your local supervisory authority.",
        ],
      },
      {
        heading: "9. Security",
        body: [
          "Data is encrypted in transit and at rest. Access to application files is limited to the consultant handling your case and the reviewer who checks it. We log access to sensitive documents.",
        ],
      },
      {
        heading: "10. Cookies",
        body: [
          "Essential cookies keep the site working and remember your cookie choice. Analytics cookies are only set if you accept them. You can change your choice by clearing site data in your browser.",
        ],
      },
      {
        heading: "11. Changes",
        body: ["If this policy changes materially we will update the date above and, where appropriate, notify you by email."],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    updated,
    intro:
      "These terms govern your use of this website and any consultancy service we provide. By engaging us, you agree to them.",
    sections: [
      {
        heading: "1. Our role",
        body: [
          "VisaHOBe PTE. LTD. provides consultancy, document preparation and coordination services. We are not a government authority, an immigration officer, or a law firm, and we do not provide legal representation.",
          "Visa decisions are made solely by the relevant government authority. No outcome, timeline or approval is guaranteed by us, by any statement on this website, or by any estimate given verbally.",
        ],
      },
      {
        heading: "2. Partner-supported destinations",
        body: [
          "In Serbia, Russia and Belarus we work with licensed local partners. We do not operate an office in those countries. Where a partner is used, this is stated on the destination page and in your engagement summary.",
        ],
      },
      {
        heading: "3. Your obligations",
        body: [
          "You agree to provide complete, accurate and genuine documents, and to tell us promptly if circumstances change.",
          "You confirm that you have the right to share any document you send us, including documents belonging to dependants.",
          "We may decline or stop work where documents appear altered, false or obtained improperly, or where a request would breach anti-bribery or sanctions rules.",
        ],
      },
      {
        heading: "4. Fees and payment",
        body: [
          "Service fees are fixed after assessment and confirmed in writing before work begins. Government fees are passed through at cost and evidenced with receipts.",
          "Invoices are payable in the currency stated. Work on a stage begins when the corresponding invoice is settled. We do not charge success fees.",
        ],
      },
      {
        heading: "5. Timelines",
        body: [
          "Timelines we quote are estimates based on current published processing times and our own case history. They are not commitments. Authority delays, requests for further information, and quota changes are outside our control.",
        ],
      },
      {
        heading: "6. Limitation of liability",
        body: [
          "To the extent permitted by law, our aggregate liability arising from an engagement is limited to the service fees paid by you for that engagement.",
          "We are not liable for indirect or consequential loss, including lost employment, lost opportunity, travel costs, or decisions made by an authority.",
          "Nothing in these terms excludes liability that cannot lawfully be excluded.",
        ],
      },
      {
        heading: "7. Intellectual property",
        body: [
          "Website content, checklists and templates are our property and are licensed to you for your own case. They may not be resold or published without written permission.",
        ],
      },
      {
        heading: "8. Termination",
        body: [
          "Either party may end an engagement in writing. You remain liable for fees for work completed and for government fees already paid on your behalf. Refunds are governed by our Refund Policy.",
        ],
      },
      {
        heading: "9. Governing law",
        body: [
          "These terms are governed by the laws of Singapore, and the courts of Singapore have exclusive jurisdiction, without affecting any mandatory consumer protection rights you have in your country of residence.",
        ],
      },
      {
        heading: "10. Contact",
        body: ["Questions about these terms: hello@visahobe.com."],
      },
    ],
  },
  {
    slug: "refund",
    title: "Refund Policy",
    updated,
    intro:
      "We would rather explain this clearly now than argue about it later. This policy sets out exactly what is refundable and what is not.",
    sections: [
      {
        heading: "1. Government fees",
        body: [
          "Government fees are paid to authorities on your behalf. Once a fee has been paid to an authority it is outside our control and is generally non-refundable, even where an application is refused.",
          "Where an authority refunds a fee to us, we pass the full amount to you within fourteen days of receiving it.",
        ],
      },
      {
        heading: "2. Service fees before submission",
        body: [
          "If you cancel before we submit an application, we refund the service fee less any work already completed, calculated at our published hourly rate and shown to you as an itemised deduction.",
        ],
      },
      {
        heading: "3. Service fees after submission",
        body: [
          "Once a filing has been submitted, the service fee for that stage is earned and is not refundable. Later stages that have not started remain refundable.",
        ],
      },
      {
        heading: "4. Refusals",
        body: [
          "A refusal is not a breach of our agreement and does not trigger an automatic refund, because the decision rests with the authority.",
          "Where a refusal results from our error in preparing or filing the application, we will re-file at no additional service fee, or refund the service fee for that stage if you prefer.",
        ],
      },
      {
        heading: "5. Our cancellation",
        body: [
          "If we decline or cannot continue a case for a reason within our control, we refund all unearned service fees in full within fourteen days.",
        ],
      },
      {
        heading: "6. How to request a refund",
        body: [
          "Email hello@visahobe.com with your invoice number and the reason. We acknowledge within two business days and decide within ten business days. Approved refunds are returned by the original payment method.",
        ],
      },
      {
        heading: "7. Chargebacks",
        body: [
          "Please contact us before raising a chargeback. We will always try to resolve the issue directly, and a chargeback raised without contacting us may delay work on your case.",
        ],
      },
    ],
  },
  {
    slug: "anti-bribery",
    title: "Anti-Bribery Statement",
    updated,
    intro:
      "VisaHOBe PTE. LTD. operates a zero-tolerance policy towards bribery and corruption in every jurisdiction where we work.",
    sections: [
      {
        heading: "1. Policy",
        body: [
          "We do not offer, promise, give or accept any financial or other advantage to influence a public official, an authority employee, or any private counterparty in order to obtain an improper advantage.",
          "This applies to our directors, employees, contractors, and to every partner and agent acting on our behalf.",
        ],
      },
      {
        heading: "2. Facilitation payments",
        body: [
          "Facilitation payments are prohibited. We do not pay to expedite routine government action, and we do not pass on any request for such a payment to a client.",
        ],
      },
      {
        heading: "3. Partner due diligence",
        body: [
          "Before engaging a local partner we verify their registration, ownership and reputation, and we require a written commitment to this policy. Engagements are reviewed annually.",
        ],
      },
      {
        heading: "4. Gifts and hospitality",
        body: [
          "Modest hospitality may be accepted or offered where it is transparent, infrequent and recorded in our gift register. Cash and cash equivalents are never acceptable.",
        ],
      },
      {
        heading: "5. Reporting concerns",
        body: [
          "If you are asked for an improper payment in connection with a VisaHOBe case, tell us immediately at hello@visahobe.com. Reports are handled confidentially.",
          "We will never penalise a client or employee for refusing to make, or for reporting, an improper payment.",
        ],
      },
      {
        heading: "6. Consequences",
        body: [
          "Breach of this policy by an employee results in disciplinary action up to termination. Breach by a partner results in immediate termination of the engagement and, where appropriate, notification to the relevant authority.",
        ],
      },
    ],
  },
];

export function getLegalDoc(slug: string) {
  return legalDocs.find((d) => d.slug === slug);
}

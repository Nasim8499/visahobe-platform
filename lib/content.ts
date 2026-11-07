import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Process", href: "/#process" },
  { label: "Team", href: "/#team" },
  { label: "Tools", href: "/tools/eligibility" },
  { label: "Contact", href: "/#contact" },
];

export type Stat = { value: string; label: string; detail: string };

export const stats: Stat[] = [
  { value: "11+", label: "Years in mobility", detail: "Singapore-headquartered since 2014" },
  { value: "4,200+", label: "Cases coordinated", detail: "Work passes, EOR and incorporation" },
  { value: "5", label: "Active corridors", detail: "SG · BD · RS · RU · BY" },
  { value: "97%", label: "Docs accepted first time", detail: "After our pre-submission review" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: Briefcase,
    title: "Employment Pass & Work Pass",
    description:
      "End-to-end coordination for Singapore EP, S Pass, and dependent passes, from eligibility scoring to card collection.",
    points: ["Eligibility scoring", "Company sponsorship support", "Renewals & appeals"],
  },
  {
    icon: Building2,
    title: "Company Incorporation",
    description:
      "Singapore entity setup with ACRA, corporate secretary, registered address and nominee director arrangements.",
    points: ["ACRA filing", "Corporate secretary", "Bank intro support"],
  },
  {
    icon: Users,
    title: "Employer of Record",
    description:
      "Hire in a new market without an entity. We hold the employment relationship while you direct the work.",
    points: ["Compliant payroll", "Local benefits", "Onboarding in 10 days"],
  },
  {
    icon: Globe2,
    title: "Global Talent Mobility",
    description:
      "Cross-border relocation coordination for teams, including family dependants and school-search support.",
    points: ["Relocation planning", "Dependant passes", "Settling-in support"],
  },
  {
    icon: GraduationCap,
    title: "Student & Training Passes",
    description:
      "Student pass applications and training employment pass coordination for interns and graduate hires.",
    points: ["Institution liaison", "Financial docs review", "IPA follow-through"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Advisory",
    description:
      "Ongoing immigration compliance reviews, audit-ready document trails and policy guidance for HR teams.",
    points: ["Quarterly reviews", "Document audit trail", "HR policy notes"],
  },
];

export type Country = {
  slug: string;
  name: string;
  flag: string;
  region: string;
  headline: string;
  summary: string;
  partnerSupported: boolean;
  partnerNote: string;
  processingTime: string;
  successNote: string;
  visaTypes: { name: string; forWhom: string; timeline: string; govtFee: string; serviceFee: string }[];
  requirements: string[];
  documents: string[];
};

export const countries: Country[] = [
  {
    slug: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    region: "Southeast Asia",
    headline: "Work, incorporate and scale in Singapore",
    summary:
      "Singapore remains the region's most predictable place to build a regional headquarters. We coordinate the pass, the entity and the payroll so your first hire lands without gaps.",
    partnerSupported: false,
    partnerNote: "VisaHOBe PTE. LTD. is incorporated in Singapore. Corporate and immigration filings are coordinated from our own office.",
    processingTime: "3 to 8 weeks depending on pass type",
    successNote: "Most EP cases we file are approved on first submission after our document review.",
    visaTypes: [
      {
        name: "Employment Pass (EP)",
        forWhom: "Professionals, managers and executives earning above the EP qualifying salary",
        timeline: "3 to 8 weeks",
        govtFee: "SGD 105 application + SGD 225 issuance",
        serviceFee: "From SGD 1,200",
      },
      {
        name: "S Pass",
        forWhom: "Mid-skilled technical staff within the sector quota",
        timeline: "3 to 6 weeks",
        govtFee: "SGD 105 application + SGD 100 issuance",
        serviceFee: "From SGD 900",
      },
      {
        name: "Dependant's Pass",
        forWhom: "Spouses and unmarried children under 21 of eligible pass holders",
        timeline: "2 to 4 weeks",
        govtFee: "SGD 105 per applicant",
        serviceFee: "From SGD 400",
      },
      {
        name: "Entrepreneur / One Pass",
        forWhom: "Founders and senior talent on the ONE Pass framework",
        timeline: "4 to 10 weeks",
        govtFee: "Varies by scheme",
        serviceFee: "Quoted after assessment",
      },
    ],
    requirements: [
      "A Singapore-registered employer or an entity we incorporate for you",
      "Salary meeting the current EP or S Pass qualifying threshold",
      "Recognised qualifications, or compensating experience evidence",
      "Clean immigration history for all applicants",
    ],
    documents: [
      "Passport bio page (minimum 6 months validity)",
      "Degree certificates and transcripts",
      "Detailed CV with employment dates",
      "Recent payslips or employment letters",
      "Company ACRA profile and financial statements",
      "Passport photo meeting ICA specifications",
    ],
  },
  {
    slug: "bangladesh",
    name: "Bangladesh",
    flag: "🇧🇩",
    region: "South Asia",
    headline: "Outbound mobility from Bangladesh, done correctly",
    summary:
      "We support Bangladeshi professionals, students and families moving to Singapore and Europe, with document preparation that survives embassy scrutiny.",
    partnerSupported: false,
    partnerNote: "VisaHOBe coordinates outbound applications from Dhaka through appointed local document agents.",
    processingTime: "4 to 12 weeks depending on destination",
    successNote: "Our checklist-led approach targets the document gaps that cause most refusals.",
    visaTypes: [
      {
        name: "Employment Pass support (outbound)",
        forWhom: "Bangladeshi professionals with a Singapore job offer",
        timeline: "4 to 8 weeks",
        govtFee: "Paid to the destination authority",
        serviceFee: "From USD 650",
      },
      {
        name: "Student visa support",
        forWhom: "Students with an offer from a recognised institution",
        timeline: "4 to 12 weeks",
        govtFee: "Embassy fee, varies",
        serviceFee: "From USD 450",
      },
      {
        name: "Family visit and dependant support",
        forWhom: "Spouses, children and parents of existing pass holders",
        timeline: "3 to 8 weeks",
        govtFee: "Varies by mission",
        serviceFee: "From USD 300",
      },
    ],
    requirements: [
      "Valid passport and clear travel history",
      "Verified educational and employment records",
      "Evidence of funds where the route requires it",
      "Sponsor documents where applicable",
    ],
    documents: [
      "Passport bio page",
      "Academic certificates with attestation where required",
      "Employment letters and salary evidence",
      "Bank statements covering the required period",
      "Photographs to mission specification",
    ],
  },
  {
    slug: "serbia",
    name: "Serbia",
    flag: "🇷🇸",
    region: "Southeast Europe",
    headline: "Serbia residency and work authorisation",
    summary:
      "Serbia has become a practical base for tech teams serving EU clients. We coordinate temporary residence and work permits through vetted local partners.",
    partnerSupported: true,
    partnerNote: "Partner-supported operations. VisaHOBe works with a licensed local partner; we do not operate an office in Serbia.",
    processingTime: "4 to 10 weeks",
    successNote: "Residence permits tied to employment are the most predictable route we handle.",
    visaTypes: [
      {
        name: "Temporary residence (employment)",
        forWhom: "Employees of a Serbian entity or seconded staff",
        timeline: "4 to 10 weeks",
        govtFee: "Approx. EUR 100 to 200",
        serviceFee: "From EUR 850",
      },
      {
        name: "Work permit",
        forWhom: "Non-nationals taking up local employment",
        timeline: "Runs alongside residence",
        govtFee: "Approx. EUR 120",
        serviceFee: "From EUR 600",
      },
      {
        name: "Digital nomad / remote work stay",
        forWhom: "Remote workers with non-local income",
        timeline: "2 to 6 weeks",
        govtFee: "Varies",
        serviceFee: "From EUR 450",
      },
    ],
    requirements: [
      "Purpose of stay documented (employment contract or company registration)",
      "Registered local address",
      "Health insurance valid in Serbia",
      "Clean criminal record certificate, apostilled",
    ],
    documents: [
      "Passport bio page",
      "Employment contract or company documents",
      "Registered address proof",
      "Health insurance certificate",
      "Apostilled police clearance",
      "Passport photos",
    ],
  },
  {
    slug: "russia",
    name: "Russia",
    flag: "🇷🇺",
    region: "Eurasia",
    headline: "Russia work visas and invitations",
    summary:
      "Business travel and employment routes into Russia require careful sequencing. We coordinate invitations and visa support with licensed partners.",
    partnerSupported: true,
    partnerNote: "Partner-supported operations. VisaHOBe works with a licensed local partner; we do not operate an office in Russia.",
    processingTime: "6 to 14 weeks",
    successNote: "Invitation timing drives the whole case, so we start there.",
    visaTypes: [
      {
        name: "Work visa (invitation-led)",
        forWhom: "Employees of a Russian-registered entity",
        timeline: "6 to 14 weeks",
        govtFee: "Consular fee varies by nationality",
        serviceFee: "From USD 950",
      },
      {
        name: "Business visa",
        forWhom: "Short business visits and meetings",
        timeline: "3 to 6 weeks",
        govtFee: "Consular fee varies",
        serviceFee: "From USD 550",
      },
      {
        name: "Highly qualified specialist (HQS)",
        forWhom: "Senior roles meeting the salary threshold",
        timeline: "8 to 16 weeks",
        govtFee: "Varies",
        serviceFee: "From USD 1,400",
      },
    ],
    requirements: [
      "Invitation or voucher issued by an authorised sponsor",
      "Employment contract meeting the route's salary rules",
      "Medical certificates where required",
      "Registration handled on arrival",
    ],
    documents: [
      "Passport valid beyond the intended stay",
      "Invitation or telex reference",
      "Employment contract",
      "Medical and HIV certificates where required",
      "Completed application form",
      "Photographs to consular specification",
    ],
  },
  {
    slug: "belarus",
    name: "Belarus",
    flag: "🇧🇾",
    region: "Eastern Europe",
    headline: "Belarus employment and residence coordination",
    summary:
      "Belarus cases hinge on the local employer's paperwork. We coordinate with licensed partners to keep the invite, permit and registration aligned.",
    partnerSupported: true,
    partnerNote: "Partner-supported operations. VisaHOBe works with a licensed local partner; we do not operate an office in Belarus.",
    processingTime: "5 to 12 weeks",
    successNote: "Employer-side filings are the usual bottleneck, so we track them weekly.",
    visaTypes: [
      {
        name: "Work permit and temporary residence",
        forWhom: "Non-nationals employed by a Belarusian entity",
        timeline: "5 to 12 weeks",
        govtFee: "Varies by permit type",
        serviceFee: "From USD 800",
      },
      {
        name: "Business visa",
        forWhom: "Short commercial visits",
        timeline: "2 to 5 weeks",
        govtFee: "Consular fee varies",
        serviceFee: "From USD 450",
      },
    ],
    requirements: [
      "Employer permit filed before the visa application",
      "Employment contract registered locally",
      "Medical insurance valid in Belarus",
      "Address registration after arrival",
    ],
    documents: [
      "Passport bio page",
      "Employer permit confirmation",
      "Employment contract",
      "Medical insurance certificate",
      "Photographs",
    ],
  },
];

export type ProcessStep = { step: string; title: string; body: string };

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Assessment",
    body: "A 30-minute call to map your goal, timeline and budget. We tell you what is realistic before you pay anything.",
  },
  {
    step: "02",
    title: "Document plan",
    body: "You receive a checklist built for your exact route, with the specific format each document must be in.",
  },
  {
    step: "03",
    title: "Filing",
    body: "We prepare and submit. You get a status update at every stage, not just when something goes wrong.",
  },
  {
    step: "04",
    title: "Approval & landing",
    body: "Card collection, dependant passes and settling-in tasks are handled so your first week works.",
  },
];

export type Testimonial = { quote: string; name: string; role: string; country: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our EP application had been rejected twice before VisaHOBe. They found the salary benchmarking error in a day and the third filing was approved without a query.",
    name: "Priya Raman",
    role: "Head of People, fintech scale-up",
    country: "Singapore",
  },
  {
    quote:
      "We needed three engineers in Belgrade in a quarter. The document checklists were the part that saved us, nothing came back rejected.",
    name: "Marcus Feld",
    role: "Founder, B2B SaaS",
    country: "Serbia",
  },
  {
    quote:
      "The team explained what they could and could not control. After two bad experiences elsewhere, that honesty alone was worth the fee.",
    name: "Ayesha Karim",
    role: "Operations Director",
    country: "Bangladesh",
  },
];

export type TeamMember = { name: string; role: string; focus: string; initials: string };

export const team: TeamMember[] = [
  { name: "Nasim Hossain", role: "Managing Director", focus: "Corporate structuring", initials: "NH" },
  { name: "Wei Ling Tan", role: "Head of Immigration", focus: "Singapore passes", initials: "WT" },
  { name: "Ana Petrović", role: "Regional Partner Lead", focus: "Serbia & Balkans", initials: "AP" },
  { name: "Rashed Ahmed", role: "Client Success", focus: "Bangladesh corridor", initials: "RA" },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How fast can you start?",
    a: "Most cases open within two business days of the assessment call. Singapore pass filings usually go in within a week once documents are complete.",
  },
  {
    q: "Is approval guaranteed if I pay you?",
    a: "No. Visa decisions are made solely by government authorities. We coordinate the filing, prepare the documents and manage the follow-up, but no consultancy can guarantee an outcome.",
  },
  {
    q: "How is your fee structured?",
    a: "A fixed service fee quoted after assessment, plus government fees passed through at cost with receipts. There are no success fees and no hidden markups.",
  },
  {
    q: "Do you operate offices in Serbia, Russia or Belarus?",
    a: "No. Those corridors are partner-supported. VisaHOBe coordinates the case from Singapore and works with licensed local partners who hold the required registrations.",
  },
  {
    q: "What happens if my application is rejected?",
    a: "We review the refusal grounds with you and advise whether an appeal or a fresh filing is the better route. Our refund policy sets out exactly what is and is not returnable.",
  },
  {
    q: "Can you help my spouse and children?",
    a: "Yes. Dependant passes are handled alongside the main application so the family's timelines line up rather than dragging months apart.",
  },
];

export const trustBadges: { icon: LucideIcon; label: string }[] = [
  { icon: BadgeCheck, label: "ACRA-registered Singapore entity" },
  { icon: FileCheck2, label: "Document QC before every filing" },
  { icon: Plane, label: "5 active corridors" },
  { icon: HeartHandshake, label: "Fixed fees, no success charges" },
  { icon: ClipboardCheck, label: "Weekly status updates" },
  { icon: Sparkles, label: "Partner-led in RS / RU / BY" },
];

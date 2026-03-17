export const business = {
  shortName: "Wesley Chapel A/C Company",
  legalName: "Wesley Chapel A/C Company",
  siteUrl: "https://wesleychapelac.com",
  phone: "813-833-1063",
  phoneHref: "tel:+18138331063",
  license: "CAC 1815518",
  serviceArea: "Wesley Chapel, Florida",
  serviceAreaShort: "Wesley Chapel",
  tagline: "Honest air conditioning help for Wesley Chapel homeowners.",
  logo: "/images/wesley-chapel-ac-logo.png",
  hoursSummary: "Mon-Tue, Thu-Fri 9am-6pm | Wed 9am-5pm | Sat-Sun Closed",
  hours: [
    {
      days: ["Monday"],
      label: "Monday",
      hours: "9:00 AM to 6:00 PM",
      opens: "09:00",
      closes: "18:00",
    },
    {
      days: ["Tuesday"],
      label: "Tuesday",
      hours: "9:00 AM to 6:00 PM",
      opens: "09:00",
      closes: "18:00",
    },
    {
      days: ["Wednesday"],
      label: "Wednesday",
      hours: "9:00 AM to 5:00 PM",
      opens: "09:00",
      closes: "17:00",
    },
    {
      days: ["Thursday"],
      label: "Thursday",
      hours: "9:00 AM to 6:00 PM",
      opens: "09:00",
      closes: "18:00",
    },
    {
      days: ["Friday"],
      label: "Friday",
      hours: "9:00 AM to 6:00 PM",
      opens: "09:00",
      closes: "18:00",
    },
    {
      days: ["Saturday"],
      label: "Saturday",
      hours: "Closed",
      opens: "",
      closes: "",
    },
    {
      days: ["Sunday"],
      label: "Sunday",
      hours: "Closed",
      opens: "",
      closes: "",
    },
  ],
  emergencyHeadline: "24 Hour Emergency Service is Available",
  emergencySubnote: "Please show a little mercy, I require sleep too!",
  formAction: "",
  ogImage: "/images/service-van.jpg",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/repair/", label: "AC Repair" },
  { href: "/maintenance/", label: "AC Maintenance" },
  { href: "/ac-replacement/", label: "AC Replacement" },
  { href: "/about-us/", label: "About" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

export const serviceCards = [
  {
    href: "/repair/",
    title: "AC Repair",
    body: "If your AC is not cooling, airflow is weak, or something does not sound right, we diagnose the problem and focus on the practical fix first.",
  },
  {
    href: "/maintenance/",
    title: "AC Maintenance",
    body: "Good maintenance should help your system, not create a reason to sell you more. We keep this practical and straightforward.",
  },
  {
    href: "/ac-replacement/",
    title: "AC Replacement",
    body: "When repair no longer makes sense, we help you make a sensible replacement decision without pressure or inflated urgency.",
  },
];

export const reviewHighlights = [
  {
    quote:
      "He quickly diagnosed the problem, got us cool again, and did not try to push a whole new system on us.",
    name: "Bill E.",
    label: "Selected homeowner review",
  },
  {
    quote:
      "Diagnosed the problem within 20 minutes and got us running cool and comfortable in less than an hour.",
    name: "Chris V.",
    label: "Selected homeowner review",
  },
  {
    quote:
      "Came out on short notice, explained everything clearly, and delivered exceptional service.",
    name: "Robert B.",
    label: "Selected homeowner review",
  },
];

export const allReviews = [
  ...reviewHighlights,
  {
    quote:
      "Thorough, meticulous, and repairs things properly. You will not find anyone more honest.",
    name: "Tim B.",
    label: "Selected homeowner review",
  },
  {
    quote:
      "Absolutely top notch. Prompt, professional, and very fairly priced.",
    name: "John K.",
    label: "Selected homeowner review",
  },
  {
    quote:
      "Came out even though it was late and quickly got the AC up and running.",
    name: "Anthony C.",
    label: "Selected homeowner review",
  },
];

export const faqGroups = {
  general: [
    {
      question: "Do you only serve Wesley Chapel?",
      answer:
        "Yes. Wesley Chapel A/C Company is focused on serving homeowners in Wesley Chapel, Florida.",
    },
    {
      question: "Do you offer emergency service?",
      answer:
        "Yes. 24 Hour Emergency Service is Available. Please show a little mercy, I require sleep too!",
    },
    {
      question: "Do you service commercial systems?",
      answer:
        "This website is focused on residential homeowners in Wesley Chapel.",
    },
  ],
  repair: [
    {
      question: "What should I check before I call about AC trouble?",
      answer:
        "Check thermostat settings, replace the filter if needed, and check the breaker once. If the issue is still there, call for diagnosis.",
    },
    {
      question: "Why is my AC running but not cooling?",
      answer:
        "Common causes include airflow restriction, frozen components, thermostat issues, electrical problems, or parts that are no longer operating correctly. The right answer starts with diagnosis.",
    },
    {
      question: "Should I turn my AC off if it is frozen?",
      answer:
        "Yes. If the system is icing up, turn cooling off so it can thaw. Continuing to run it can make diagnosis harder and may increase the chance of additional damage.",
    },
    {
      question: "Do you repair older systems?",
      answer:
        "Yes, as long as the repair is still practical. Older equipment is evaluated honestly rather than written off automatically.",
    },
  ],
  maintenance: [
    {
      question: "Do I really need annual AC maintenance?",
      answer:
        "Not every system needs the same cadence. What matters is system condition, usage, environment, and whether there are signs that service is actually needed.",
    },
    {
      question: "What does a real maintenance visit include?",
      answer:
        "It should include actual inspection and service work, not a quick pass-through designed to create sales opportunities.",
    },
    {
      question: "Are service contracts required?",
      answer:
        "No. If your system needs service, you should be able to get it without being locked into a contract.",
    },
    {
      question: "What is the most useful maintenance step I can do myself?",
      answer:
        "Regular filter replacement is one of the most useful things a homeowner can do to protect airflow and system health.",
    },
  ],
  replacement: [
    {
      question: "Should I replace a 10-year-old AC system?",
      answer:
        "Not automatically. Age matters, but condition, repair cost, and reliability matter too. The system should be evaluated honestly before anyone jumps to replacement.",
    },
    {
      question: "How do I know when repair no longer makes sense?",
      answer:
        "That usually comes down to whether the cost and likely future reliability still justify the repair. A trustworthy recommendation should explain that clearly.",
    },
    {
      question: "What matters most in a replacement project?",
      answer:
        "Correct planning and installation quality matter more than flashy claims. A properly selected and properly installed system is what you want to pay for.",
    },
    {
      question: "Do you offer financing?",
      answer:
        "Call if you want to ask about current financing or payment options tied to a replacement project.",
    },
  ],
};

export const valuePoints = [
  "You get a real diagnosis before a recommendation.",
  "Repair is considered first when it is practical.",
  "You get clear communication without gimmicks or sales theater.",
  "Your home is treated with respect.",
  "Licensing stays visible because trust matters.",
];

export const maintenanceChecklist = [
  "Inspecting system condition",
  "Cleaning where it is genuinely needed",
  "Checking airflow and performance",
  "Looking for developing issues before they become expensive",
  "Giving clear, practical feedback",
];

export const replacementFactors = [
  "Cost of the needed repair",
  "Age and condition of the equipment",
  "How often the system has been failing",
  "Whether the existing setup has larger design or configuration issues",
];

export const replacementPriorities = [
  "Choosing equipment that fits the home correctly",
  "Focusing on sound installation work, not flashy add-ons",
  "Explaining efficiency choices in practical terms",
  "Being clear about warranty expectations",
];

type BreadcrumbItem = {
  name: string;
  pathname: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type WebPageInput = {
  pathname: string;
  title: string;
  description: string;
};

type ServiceInput = {
  pathname: string;
  name: string;
  description: string;
};

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, business.siteUrl).toString();
}

export function createWebPageSchema({
  pathname,
  title,
  description,
}: WebPageInput) {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(pathname)}#webpage`,
    url: absoluteUrl(pathname),
    name: title,
    description,
    isPartOf: {
      "@id": `${business.siteUrl}/#website`,
    },
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.pathname),
    })),
  };
}

export function createServiceSchema({
  pathname,
  name,
  description,
}: ServiceInput) {
  return {
    "@type": "Service",
    serviceType: name,
    name,
    description,
    provider: {
      "@id": `${business.siteUrl}/#business`,
    },
    areaServed: {
      "@type": "City",
      name: business.serviceAreaShort,
    },
    url: absoluteUrl(pathname),
  };
}

export function createFaqSchema(items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

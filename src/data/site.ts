const publicSiteUrl = import.meta.env.PUBLIC_SITE_URL || "https://wesleychapelac.com";
const baseUrl = import.meta.env.BASE_URL || "/";

export const business = {
  shortName: "Wesley Chapel A/C Company",
  legalName: "Wesley Chapel A/C Company",
  siteUrl: publicSiteUrl,
  phone: "813-833-1063",
  phoneHref: "tel:+18138331063",
  license: "CAC 1815518",
  serviceArea: "Wesley Chapel, Florida",
  serviceAreaShort: "Wesley Chapel",
  tagline: "I provide residential A/C service for Wesley Chapel homeowners.",
  logo: "/images/wesley-chapel-ac-logo-transparent.png",
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
  emergencySubnote: "If you need after-hours help, call and I will explain the fastest next step.",
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
    body: "If your AC is not cooling, airflow is weak, or something does not sound right, I diagnose the problem and focus on the practical fix first.",
  },
  {
    href: "/maintenance/",
    title: "AC Maintenance",
    body: "When maintenance is needed, I keep it practical and focused on helping your system rather than creating a reason to sell you more.",
  },
  {
    href: "/ac-replacement/",
    title: "AC Replacement",
    body: "When repair no longer makes sense, I help you think through replacement options and keep the decision grounded.",
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
      "Thorough, meticulous, and repairs things properly. You will not find anyone more dependable.",
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
        "Yes. I focus on homeowners in Wesley Chapel, Florida.",
    },
    {
      question: "Do you offer emergency service?",
      answer:
        "Yes. I do offer emergency service. If you need after-hours help, call and I will explain the fastest next step.",
    },
    {
      question: "Who is the public site built for?",
      answer:
        "I built the public site for homeowners in Wesley Chapel, and I keep it focused on residential service only.",
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
        "Yes, as long as the repair is still practical. I look at older equipment carefully rather than writing it off automatically.",
    },
  ],
  maintenance: [
    {
      question: "Do I really need annual AC maintenance?",
      answer:
        "Not every system needs the same cadence. I look at system condition, usage, environment, and whether there are signs that service is actually needed.",
    },
    {
      question: "What does a real maintenance visit include?",
      answer:
        "When I do a maintenance visit, it should include actual inspection and service work, not a quick pass-through designed to create sales opportunities.",
    },
    {
      question: "Are service contracts required?",
      answer:
        "No. If your system needs service, I do not think you should have to get locked into a contract first.",
    },
    {
      question: "What is the most useful maintenance step I can do myself?",
      answer:
        "Regular filter replacement is one of the most useful things you can do to protect airflow and system health.",
    },
  ],
  replacement: [
    {
      question: "Should I replace a 10-year-old AC system?",
      answer:
        "Not automatically. I look at age, but I also look at condition, repair cost, and reliability before I tell anyone to replace a system.",
    },
    {
      question: "How do I know when repair no longer makes sense?",
      answer:
        "That usually comes down to whether the cost and likely future reliability still justify the repair. If I recommend replacement, I should be able to explain why clearly.",
    },
    {
      question: "What matters most in a replacement project?",
      answer:
        "Correct planning and installation quality matter more than flashy claims. I would rather focus on getting the system selected and installed properly.",
    },
    {
      question: "Do you offer financing?",
      answer:
        "Call me if you want to ask about current financing or payment options tied to a replacement project.",
    },
  ],
};

export const valuePoints = [
  "I start with a real diagnosis before I recommend anything.",
  "If repair is practical, I consider it first.",
  "I explain the issue and the available options clearly.",
  "I treat your home with respect.",
  "I keep my license information visible so the basics are easy to verify.",
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

export function withBase(pathname = "/") {
  if (!pathname.startsWith("/")) {
    return pathname;
  }

  const normalizedBase = baseUrl === "/" ? "" : baseUrl.replace(/\/$/, "");

  if (pathname === "/") {
    return normalizedBase ? `${normalizedBase}/` : "/";
  }

  return `${normalizedBase}${pathname}`;
}

export function toHref(href: string) {
  if (/^(?:[a-z]+:|#|\/\/)/i.test(href)) {
    return href;
  }

  return withBase(href);
}

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
  return new URL(toHref(pathname), business.siteUrl).toString();
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

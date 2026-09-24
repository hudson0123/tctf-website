export const siteConfig = {
  global: {
    name: "Thriving Children Therapy Fund",
    shortName: "TCTF",
    location: "Athens, Georgia",
    nonProfitStatus: "501(c)(3) non-profit charitable organization",
    ein: "39-2793337",
    email: "info@tctfund.org",
    phone: "(706) 555-0123",
    address: "Athens, GA",
  },

  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Mission", href: "/mission" },
    { name: "Therapy", href: "/therapy" },
    { name: "Contact", href: "/contact" },
  ],

  colors: {
    primary: "rgb(18, 30, 84)", // Deep Blue from logo treehouse
    primaryHex: "#121e54",
    secondary: "rgb(74, 124, 68)", // Green from logo text
    secondaryHex: "#4a7c44",
  },

  hero: {
    title: "Supporting the mental health of our community's children.",
    mission: "Thriving Children Therapy Fund provides financial assistance for children's mental health services in the Athens area.",
    cta: "Donate Now",
    ctaLink: "/donate",
  },

  mission: {
    statement: "Our mission is to facilitate access to therapeutic services for children and their family system in the Northeast Georgia area.",
    vision: "Our vision is that every child in Northeast Georgia has access to comprehensive, trauma-informed therapeutic services within the nurturing context of their family system.",
    values: [
      { name: "Integrity", description: "We strive to be honest, transparent and respectful." },
      { name: "Impact", description: "We provide access to life-changing interventions." },
      { name: "Community", description: "We are a diverse group of people working together towards a common goal." },
      { name: "Trauma Informed", description: "We recognize the overarching impact of trauma on an individual and family system." },
      { name: "Holistic Interventions", description: "We recognize the whole person in the context of their family system, community, and experiences." },
    ],
    nonDiscrimination: "The Thriving Children Therapy Fund does not and shall not discriminate on the basis of race, color, religion (creed), gender, gender expression, age, national origin (ancestry), disability, marital status, sexual orientation, or military status, in any of its activities or operations. These activities include, but are not limited to, hiring and firing of staff, selection of volunteers and vendors, and provision of services. We are committed to providing an inclusive and welcoming environment for all members of our staff, clients, volunteers, subcontractors, vendors, and clients.\n\nThe Thriving Children Therapy Fund is an equal opportunity employer. We will not discriminate and will take affirmative action measures to ensure against discrimination in employment, recruitment, advertisements for employment, compensation, termination, upgrading, promotions, and other conditions of employment against any employee or job applicant on the bases of race, color, gender, national origin, age, religion, creed, disability, veteran's status, sexual orientation, gender identity or gender expression.",
  },

  donate: {
    givebutterUrl: "https://givebutter.com/tctf",
  },

  therapy: {
    intakeFormUrl: "https://forms.gle/1quTf36GAcewE39T7",
    surveyCaregiver: "https://forms.gle/a7h75sct4kHVefBfA",
    surveyParticipant: "https://forms.gle/FUJpfXzFZNWK5dAQ8",
    therapistApplicationUrl: "https://forms.gle/6cKPKgtWw1obTZv59",
  },

  socials: [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Facebook", url: "https://facebook.com" },
  ],

  seo: {
    defaultTitle: "Facilitating Therapeutic Access for Children | Northeast Georgia",
    defaultDescription: "Providing financial support for children's therapy and mental health services in the Northeast Georgia area.",
    keywords: ["Non-profit", "Children's Mental Health", "Therapy Fund", "Athens GA", "Mental Health Support"],
  }
};

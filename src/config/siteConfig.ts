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
    { 
      name: "About", 
      href: "/about",
      dropdown: [
        { name: "Who We Are", href: "/about" },
        { name: "Board of Directors", href: "/about/board" },
      ]
    },
    { name: "Mission", href: "/mission" },
    { name: "Therapy", href: "/therapy" },
    { name: "Contact", href: "/contact" },
    { name: "Events", href: "/events" },
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
    vision: "A community where every child has the support they need to thrive emotionally and mentally.",
    values: ["Accessibility", "Compassion", "Community", "Integrity"],
    nonDiscrimination: "We do not and shall not discriminate on the basis of race, color, religion (creed), gender, gender expression, age, national origin (ancestry), disability, marital status, sexual orientation, or military status, in any of its activities or operations.",
  },

  donate: {
    givebutterUrl: "https://givebutter.com/tctf-dummy",
  },

  therapy: {
    intakeFormUrl: "https://docs.google.com/forms/d/e/dummy/viewform",
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

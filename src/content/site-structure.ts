/** Public site information architecture — routes, navigation, and home layout blocks. */

export type NavLink = { href: string; label: string };

export const primaryNavigation: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/partnerships", label: "R&D" },
  { href: "/experts", label: "Experts" },
  { href: "/blog", label: "News" },
  { href: "/contact", label: "Contact" }
];

export const footerNavigation: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/partnerships", label: "R&D / Partnerships" },
  { href: "/experts", label: "Experts" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog / News" },
  { href: "/book-free-consultation", label: "Book Consultation" },
  { href: "/useful-links", label: "Useful Links" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" }
];

export const homeProofPoints = [
  { title: "Strategy", copy: "Simplified planning pathways for growth and execution." },
  { title: "Projects", copy: "Project rhythm, accountability, and stakeholder alignment." },
  { title: "Partnerships", copy: "Business, research, and institutional collaboration support." }
] as const;

/** CMS page slug (database) mapped to public URL path. */
export const sitePages = [
  { path: "/about", slug: "about-us", label: "About" },
  { path: "/services", slug: "services", label: "Services" },
  { path: "/projects", slug: "projects", label: "Projects" },
  { path: "/partnerships", slug: "partnerships", label: "R&D & Partnerships" },
  { path: "/experts", slug: "experts", label: "Experts" },
  { path: "/blog", slug: "blog", label: "Blog & News" },
  { path: "/testimonials", slug: "testimonials", label: "Testimonials" },
  { path: "/contact", slug: "contact", label: "Contact" },
  { path: "/book-free-consultation", slug: "book-free-consultation", label: "Book Consultation" },
  { path: "/useful-links", slug: "useful-links", label: "Useful Links" },
  { path: "/privacy-policy", slug: "privacy-policy", label: "Privacy Policy" },
  { path: "/terms-conditions", slug: "terms-conditions", label: "Terms" }
] as const;

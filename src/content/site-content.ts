import { siteImages } from "./site-images";

/**
 * Canonical website copy and records for MGBG Inc.
 * Used by prisma/seed.ts and runtime fallbacks — edit here, then run `npm run db:seed`.
 */
export const siteContent = {
  siteSettings: {
    logo: siteImages.logoMark,
    siteName: "MGBG Inc.",
    tagline: "Meta Genie Business Group",
    contactEmail: "hello@mgbginc.ca",
    phone: "+1 (555) 248-1120",
    address: "United States",
    linkedin: "https://www.linkedin.com",
    footerText:
      "MGBG Inc. enables organizations with consulting, project management, leadership development, R&D support, and partnership strategy.",
    seoTitle: "MGBG Inc. | Strategic Business Consulting & Project Management",
    seoDescription:
      "Meta Genie Business Group helps organizations simplify strategy, manage projects, build leadership, and unlock sustainable business growth."
  },

  homeContent: {
    heroTitle: "Building Strategic Partnerships for Sustainable Business Growth",
    heroSubtitle:
      "MGBG Inc. helps organizations simplify strategy, manage projects, build leadership, and unlock profitable growth.",
    heroImage: siteImages.homeHero,
    heroPrimaryText: "Book Free Consultation",
    heroPrimaryLink: "/book-free-consultation",
    heroSecondaryText: "Explore Services",
    heroSecondaryLink: "/services",
    servicesEnabled: true,
    servicesHeading: "Advisory That Moves Work Forward",
    servicesDescription:
      "From business planning to employee welfare strategy, our advisory model brings clarity to complex growth work.",
    projectsEnabled: true,
    projectsHeading: "Selected Projects",
    projectsDescription:
      "A focused look at how MGBG supports planning, execution, research enablement, and operating capacity.",
    partnershipsEnabled: true,
    partnershipsHeading: "Research, Development & Partnerships",
    partnershipsDescription:
      "We connect business, research, and institutional partners around practical outcomes and measurable progress.",
    testimonialsEnabled: true,
    testimonialsHeading: "Trusted By Leaders",
    testimonialsDescription:
      "Leaders trust MGBG for measured judgment, organized execution, and strong partner communication.",
    expertsEnabled: true,
    expertsHeading: "Experts With Practical Range",
    expertsDescription:
      "Our experts blend consulting discipline with hands-on project, people, and partnership experience.",
    newsletterEnabled: true,
    contactCtaHeading: "Need a strategic partner for your next stage?",
    contactCtaDescription:
      "Start with a focused conversation about your strategy, team capacity, partnership opportunity, or grant pathway."
  },

  pages: [
    {
      slug: "about-us",
      title: "About MGBG Inc.",
      eyebrow: "Who We Are",
      summary:
        "MGBG Inc. is an enabling business group built for practical strategy, project execution, leadership development, and partnership growth.",
      heroImage: siteImages.leadership,
      seoTitle: "About MGBG Inc. | Meta Genie Business Group",
      seoDescription:
        "Learn how MGBG Inc. helps organizations move from ambition to execution through consulting, project management, and partnership strategy.",
      content:
        "<p>Meta Genie Business Group helps organizations move from ambition to execution. We support business management, project management, leadership development, people management, and partnership strategy with a practical, high-trust approach.</p><p>Our work is designed for leaders who need a clearer plan, stronger operating rhythm, and capable partners around the table. We simplify complex requirements into strategic pathways that teams can understand, own, and execute.</p><h2>How We Work</h2><p>We listen first, map the operating reality, identify constraints, and build a practical plan for sustainable progress. Our consulting model combines strategic analysis, process mapping, communication planning, and hands-on implementation support.</p><h2>What Makes MGBG Different</h2><p>We combine advisory discipline with delivery support. That means fewer disconnected recommendations and more visible movement on the priorities that matter to leadership, partners, and funders.</p>"
    },
    {
      slug: "services",
      title: "Services",
      eyebrow: "What We Do",
      summary:
        "Consulting, planning, people development, research support, grant writing, process mapping, and partnership development.",
      heroImage: siteImages.planning,
      seoTitle: "MGBG Services | Consulting, Projects & Partnerships",
      seoDescription:
        "Explore MGBG services across business consulting, project management, leadership development, R&D support, and grant writing.",
      content:
        "<p>MGBG services are built around the moments when organizations need clarity, structure, and credible execution support. Each engagement is shaped around business goals, stakeholder needs, and measurable outcomes.</p><p>Whether you need a sharper strategy, a stronger project rhythm, or a partnership pathway, our team helps translate complexity into practical next steps.</p>"
    },
    {
      slug: "projects",
      title: "Projects & Portfolio",
      eyebrow: "Proof of Work",
      summary:
        "Explore representative projects across strategy, project planning, research partnerships, and operational capacity.",
      heroImage: siteImages.projects,
      seoTitle: "MGBG Projects & Portfolio",
      seoDescription:
        "Representative MGBG projects across strategy, leadership, grant readiness, and applied research partnerships.",
      content:
        "<p>Our project portfolio reflects the range of work required to turn strategy into coordinated execution, from stakeholder engagement and process mapping to planning documentation and partnership support.</p>"
    },
    {
      slug: "partnerships",
      title: "R&D and Partnerships",
      eyebrow: "Collaborative Growth",
      summary:
        "MGBG helps connect business, academic, and institutional partners around applied research and development opportunities.",
      heroImage: siteImages.research,
      seoTitle: "R&D and Partnerships | MGBG Inc.",
      seoDescription:
        "Partnership development, applied research coordination, and institutional collaboration support from MGBG Inc.",
      content:
        "<p>Research and development partnerships help organizations test ideas, access expertise, build evidence, and create new growth pathways. MGBG supports partner identification, communication, proposal preparation, and coordination.</p><p>Our work includes academic collaborations, innovation networks, and sector partnerships such as the <strong>Agri Trait &amp; Gene Bank</strong> agricultural genetics initiative.</p>"
    },
    {
      slug: "experts",
      title: "Experts & Team",
      eyebrow: "People Behind the Work",
      summary:
        "A practical team of consultants, planners, facilitators, and development experts.",
      heroImage: siteImages.leadership,
      seoTitle: "MGBG Experts & Team",
      seoDescription:
        "Meet the MGBG consultants and advisors supporting strategy, projects, leadership, and partnerships.",
      content:
        "<p>Our team brings together strategic planning, people management, communications, research support, and project delivery experience.</p>"
    },
    {
      slug: "blog",
      title: "Blog & News",
      eyebrow: "Insights",
      summary:
        "Ideas and updates on leadership, strategy, project management, and partnership development.",
      heroImage: siteImages.blog,
      seoTitle: "MGBG Blog & News",
      seoDescription:
        "News and insights from MGBG on partnerships, operations, leadership, and applied research.",
      content:
        "<p>Read practical insights from the MGBG team on building capacity, communicating clearly, and moving work through complex systems.</p>"
    },
    {
      slug: "testimonials",
      title: "Testimonials",
      eyebrow: "Client Trust",
      summary: "What clients and partners value about working with MGBG Inc.",
      heroImage: siteImages.testimonials,
      seoTitle: "MGBG Client Testimonials",
      seoDescription: "Client and partner perspectives on working with MGBG Inc.",
      content:
        "<p>Trust is earned through clarity, reliability, and care in execution. These testimonials reflect the standard we work to maintain.</p>"
    },
    {
      slug: "contact",
      title: "Contact",
      eyebrow: "Start a Conversation",
      summary:
        "Reach out to discuss consulting, planning, partnership development, research support, or project management needs.",
      heroImage: siteImages.contact,
      seoTitle: "Contact MGBG Inc.",
      seoDescription: "Contact MGBG for consulting, partnerships, project support, and planning services.",
      content:
        "<p>Tell us what you are building, improving, or trying to clarify. The MGBG team will review your note and follow up with next steps.</p>"
    },
    {
      slug: "book-free-consultation",
      title: "Book Free Consultation",
      eyebrow: "Free Discovery Call",
      summary:
        "Schedule an initial conversation with MGBG to clarify needs, priorities, and possible next steps.",
      heroImage: siteImages.consultation,
      seoTitle: "Book a Free Consultation | MGBG Inc.",
      seoDescription: "Request a free consultation with MGBG Inc. to discuss strategy, projects, or partnerships.",
      content:
        "<p>Use this form to request a free consultation. Share the challenge, preferred timing, and service area you want to discuss.</p>"
    },
    {
      slug: "useful-links",
      title: "Useful Links",
      eyebrow: "Resources",
      summary:
        "Curated business, funding, leadership, and research resources for organizations and partners.",
      heroImage: siteImages.resources,
      seoTitle: "Useful Links | MGBG Inc.",
      seoDescription: "Curated resources for business planning, grants, project management, and research partnerships.",
      content:
        "<p>Browse curated links that may help with business planning, grant exploration, research collaboration, and operating capacity.</p>"
    },
    {
      slug: "privacy-policy",
      title: "Privacy Policy",
      eyebrow: "Legal",
      summary: "How MGBG Inc. handles website information and inquiry submissions.",
      heroImage: siteImages.resources,
      seoTitle: "Privacy Policy | MGBG Inc.",
      seoDescription: "MGBG Inc. privacy policy for website visitors and form submissions.",
      content:
        "<p>MGBG Inc. collects information that visitors submit through contact, consultation, and newsletter forms. This information is used to respond to inquiries, provide requested services, and improve communication.</p><p>We do not sell personal information. Form submissions may be stored securely in our website database and may be shared internally with authorized team members for response and service delivery.</p><p>To request updates or removal of submitted information, contact us through the website contact form.</p>"
    },
    {
      slug: "terms-conditions",
      title: "Terms & Conditions",
      eyebrow: "Legal",
      summary: "Website terms for using MGBG Inc. content and inquiry tools.",
      heroImage: siteImages.resources,
      seoTitle: "Terms & Conditions | MGBG Inc.",
      seoDescription: "Terms and conditions for using the MGBG Inc. website.",
      content:
        "<p>By using this website, you agree to use its content and forms responsibly. Website content is provided for general informational purposes and does not create a consulting engagement unless confirmed in a written agreement.</p><p>MGBG Inc. may update website content, service descriptions, and these terms at any time. Unauthorized use, copying, or misuse of website materials is not permitted.</p>"
    }
  ],

  services: [
    {
      title: "Business Consulting",
      icon: "BriefcaseBusiness",
      image: siteImages.planning,
      shortDescription:
        "Strategic advisory for organizations that need sharper priorities, operating clarity, and profitable growth pathways.",
      fullDescription:
        "We help leaders understand constraints, identify opportunities, build realistic strategy, and create execution plans that align people, processes, and partnerships.",
      order: 1,
      featured: true
    },
    {
      title: "Project Planning & Management",
      icon: "Milestone",
      image: siteImages.projectMgmt,
      shortDescription:
        "Structured planning, stakeholder coordination, timelines, reporting, and delivery support for complex initiatives.",
      fullDescription:
        "MGBG builds project plans, governance rhythms, communications, and practical management systems that keep work visible and accountable.",
      order: 2,
      featured: true
    },
    {
      title: "Leadership Development",
      icon: "UsersRound",
      image: siteImages.leadership,
      shortDescription:
        "Leadership programs and facilitation that build decision quality, team alignment, and management confidence.",
      fullDescription:
        "We design development sessions, leadership pathways, and coaching structures that help teams communicate better and lead through change.",
      order: 3,
      featured: true
    },
    {
      title: "People Management",
      icon: "Handshake",
      image: siteImages.people,
      shortDescription:
        "People systems, roles, communication expectations, and employee welfare planning for stronger organizational health.",
      fullDescription:
        "We support people management with role clarity, communication frameworks, performance rhythms, employee health considerations, and welfare planning.",
      order: 4,
      featured: true
    },
    {
      title: "Research & Development",
      icon: "FlaskConical",
      image: siteImages.research,
      shortDescription:
        "Research partnership support, applied innovation planning, documentation, and coordination between partners.",
      fullDescription:
        "We help organizations define research questions, connect with partners, prepare collaboration materials, and structure R&D initiatives.",
      order: 5,
      featured: true
    },
    {
      title: "Grant & Proposal Writing",
      icon: "FilePenLine",
      image: siteImages.resources,
      shortDescription:
        "Grant strategy, proposal writing, supporting documentation, and submission readiness for fundable opportunities.",
      fullDescription:
        "MGBG helps teams translate ideas into credible proposals with clear outcomes, budgets, work plans, partner roles, and evidence.",
      order: 6,
      featured: true
    },
    {
      title: "Business Planning",
      icon: "ChartNoAxesCombined",
      shortDescription:
        "Business plans, market assumptions, growth models, operating structures, and investor-ready narratives.",
      fullDescription:
        "We create business plans that connect mission, market, operating capacity, financial logic, and practical action.",
      order: 7,
      featured: false
    },
    {
      title: "Infrastructure & Capacity Planning",
      icon: "Network",
      shortDescription:
        "Capacity reviews and infrastructure planning that help organizations scale without losing operating control.",
      fullDescription:
        "We assess systems, staffing, workflows, and partner dependencies to build realistic capacity plans for growth.",
      order: 8,
      featured: false
    },
    {
      title: "Process Mapping",
      icon: "Workflow",
      shortDescription:
        "Clear process maps that expose bottlenecks, decision points, ownership, and improvement opportunities.",
      fullDescription:
        "We map how work actually moves through teams, then help redesign workflows around clarity, accountability, and speed.",
      order: 9,
      featured: false
    },
    {
      title: "Communication Strategies",
      icon: "MessagesSquare",
      shortDescription:
        "Stakeholder messaging, internal communication plans, and partner communication systems for complex initiatives.",
      fullDescription:
        "MGBG creates communication strategies that improve trust, reduce ambiguity, and keep stakeholders aligned.",
      order: 10,
      featured: false
    },
    {
      title: "Employee Health & Welfare Plans",
      icon: "HeartPulse",
      shortDescription:
        "Employee welfare planning that supports retention, resilience, and a healthier operating culture.",
      fullDescription:
        "We help leadership teams design welfare considerations, feedback loops, and practical employee support plans.",
      order: 11,
      featured: false
    }
  ],

  projects: [
    {
      title: "Agri Trait & Gene Bank Launch",
      clientName: "MGBG Agricultural Genetics Division",
      category: "Research & Development",
      description:
        "Launch planning, partnership narrative, and operating structure for MGBG's agricultural genetics and biotech division focused on crop germplasm and novel traits.",
      image: siteImages.agriTrait,
      date: "2026-04-26",
      status: "Active",
      featured: true
    },
    {
      title: "R&D Partnership Readiness Program",
      clientName: "Agriculture and Applied Research Partners",
      category: "Research & Development",
      description:
        "Structured partner communication, proposal readiness, and operating planning for applied research collaboration.",
      image: siteImages.research,
      date: "2025-08-15",
      status: "Active",
      featured: true
    },
    {
      title: "Leadership Capacity Blueprint",
      clientName: "Growth-stage Service Organization",
      category: "Leadership Development",
      description:
        "Designed a leadership development path, manager communication rhythm, and accountability framework for a growing team.",
      image: siteImages.leadership,
      date: "2025-06-02",
      status: "Completed",
      featured: true
    },
    {
      title: "Grant Proposal Operating Kit",
      clientName: "Community Innovation Group",
      category: "Grant & Proposal Writing",
      description:
        "Built proposal templates, project narratives, budget logic, and evidence structure for repeat funding opportunities.",
      image: siteImages.grant,
      date: "2025-03-20",
      status: "Completed",
      featured: true
    }
  ],

  partnerships: [
    {
      partnerName: "Agri Trait & Gene Bank",
      description:
        "MGBG's agricultural genetics and biotech division developing functional crop germplasm with novel genes and traits for resilience, disease resistance, and nutritional value.",
      country: "Global",
      partnershipType: "Agricultural R&D Division",
      image: siteImages.agriTrait,
      featured: true
    },
    {
      partnerName: "University of Agriculture, Faisalabad",
      description:
        "A research and development relationship focused on applied innovation, institutional knowledge exchange, and practical collaboration pathways.",
      country: "Pakistan",
      partnershipType: "Academic R&D Partnership",
      image: siteImages.research,
      featured: true
    },
    {
      partnerName: "Strategic Business Advisors Network",
      description:
        "A cross-functional advisory network supporting project planning, business development, and implementation capacity.",
      country: "United States",
      partnershipType: "Professional Network",
      image: siteImages.planning,
      featured: true
    }
  ],

  experts: [
    {
      id: "dr-samina-qureshi",
      name: "Dr. Samina Qureshi",
      position: "R&D Partnership Lead",
      photo: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=900&q=85",
      bio: "Samina supports research collaboration, proposal framing, and partner alignment for applied innovation projects.",
      skills: "R&D Strategy, Proposal Development, Partnership Design",
      displayOrder: 1,
      featured: true
    },
    {
      id: "michael-grant",
      name: "Michael Grant",
      position: "Project Management Advisor",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
      bio: "Michael helps teams build delivery plans, governance rhythms, reporting practices, and risk controls.",
      skills: "Project Planning, Risk Management, Stakeholder Reporting",
      displayOrder: 2,
      featured: true
    },
    {
      id: "aisha-bennett",
      name: "Aisha Bennett",
      position: "Leadership & People Strategy Consultant",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
      bio: "Aisha designs leadership development, communication systems, and employee welfare planning for growing teams.",
      skills: "Leadership Development, People Management, Communications",
      displayOrder: 3,
      featured: true
    }
  ],

  testimonials: [
    {
      id: "nadia-rahman",
      clientName: "Nadia Rahman",
      company: "Operations Director",
      rating: 5,
      text: "MGBG turned a complicated planning challenge into a practical roadmap our leadership team could actually use.",
      featured: true
    },
    {
      id: "james-porter",
      clientName: "James Porter",
      company: "Innovation Program Lead",
      rating: 5,
      text: "Their mix of project discipline and partnership thinking helped us organize stakeholders and move faster.",
      featured: true
    },
    {
      id: "farah-siddiqui",
      clientName: "Farah Siddiqui",
      company: "Executive Sponsor",
      rating: 5,
      text: "The team brought clarity, thoughtful communication, and a strong sense of ownership to every stage.",
      featured: true
    }
  ],

  usefulLinks: [
    {
      id: "sba",
      title: "U.S. Small Business Administration",
      url: "https://www.sba.gov/",
      category: "Business Planning",
      description: "Tools and guidance for business planning, funding, and growth.",
      order: 1
    },
    {
      id: "grants-gov",
      title: "Grants.gov",
      url: "https://www.grants.gov/",
      category: "Grant Research",
      description: "A central source for U.S. federal grant opportunity discovery.",
      order: 2
    },
    {
      id: "pmi",
      title: "Project Management Institute",
      url: "https://www.pmi.org/",
      category: "Project Management",
      description: "Professional project management standards, resources, and learning.",
      order: 3
    },
    {
      id: "nsf",
      title: "National Science Foundation",
      url: "https://www.nsf.gov/",
      category: "Research",
      description: "U.S. federal support for research and education in science and engineering.",
      order: 4
    },
    {
      id: "usda",
      title: "USDA Agricultural Research Service",
      url: "https://www.ars.usda.gov/",
      category: "Agriculture & R&D",
      description: "Federal agricultural research resources relevant to applied innovation partnerships.",
      order: 5
    },
    {
      id: "fao",
      title: "FAO — Food and Agriculture Organization",
      url: "https://www.fao.org/",
      category: "Agriculture & R&D",
      description: "International agriculture, food security, and sustainable development resources.",
      order: 6
    }
  ],

  blogPosts: [
    {
      title: "MGBG Launches Agri Trait & Gene Bank",
      category: "News",
      tags: "agriculture,genetics,biotechnology,agri trait gene bank",
      excerpt:
        "MGBG launched an Agricultural Genetics and Biotech Division named Agri Trait & Gene Bank.",
      featuredImage: siteImages.agriTrait,
      publishedAt: "2026-04-26",
      content:
        "<p>MGBG launched an Agricultural Genetics and Biotech Division named <strong>Agri Trait &amp; Gene Bank</strong>.</p><h2>Purpose of the Division</h2><p>Agri Trait &amp; Gene Bank develops and stores functional crop germplasm with novel genes and traits. Its mission is to capture natural diversity and engineer genetics to develop polished germplasm containing high-value traits.</p><h2>Value for Crops and Breeding Programs</h2><p>The designed crop plants will add value to the ecosystem and commercial landscape by reducing the effects of genetic erosion and assisting breeding programs in developing crop varieties that are resilient to biotic and abiotic stresses, resistant to diseases, and enhanced in nutritional value.</p><h2>Scientific and Industry Leadership</h2><p>Agri Trait &amp; Gene Bank will be run by experienced, highly qualified scientists, industry and regulatory experts, and visionary investors. The program will use the latest techniques in genetic engineering and biotechnology in its trait-finding missions.</p>"
    },
    {
      title: "How Strategic Partnerships Create Practical Growth",
      category: "Partnerships",
      tags: "partnerships,strategy,growth",
      excerpt:
        "Strong partnerships work when shared goals, operating roles, and communication rhythms are clear from the beginning.",
      featuredImage: siteImages.partnershipsPost,
      publishedAt: "2025-10-05",
      content:
        "<p>Strategic partnerships create value when organizations define the outcome, clarify who owns each part of the work, and keep communication predictable. The strongest partnerships are built around complementary strengths and visible accountability.</p><h2>Start With Shared Outcomes</h2><p>Partnerships become practical when every party can name the goal, the value being created, and the responsibilities required to move from conversation to execution. MGBG helps organizations translate early interest into a structured pathway with clear priorities.</p><h2>Build an Operating Rhythm</h2><p>A strong partnership needs more than a memorandum or introduction. It needs governance, communication, timelines, documentation, and a rhythm for decisions. These systems keep stakeholders aligned and reduce confusion as work becomes more complex.</p><h2>Turn Collaboration Into Progress</h2><p>MGBG helps partners move from initial interest to structured collaboration through planning, documentation, and practical coordination. The result is a partnership model that can support sustainable growth, funding readiness, research activity, and operational capacity.</p>"
    },
    {
      title: "Process Mapping as a Leadership Tool",
      category: "Operations",
      tags: "process,leadership,operations",
      excerpt:
        "Process maps do more than document workflows. They help leadership teams see friction and choose better interventions.",
      featuredImage: siteImages.planning,
      publishedAt: "2025-09-10",
      content:
        "<p>When teams map how work actually moves, hidden delays and unclear decisions become visible. That visibility gives leaders a better basis for prioritizing change.</p><p>A useful map shows roles, handoffs, decision points, and the information needed to keep work moving.</p>"
    }
  ],

  mediaAssets: [
    {
      id: "mgbg-logo-mark-seed",
      filename: "mgbg-logo-mark.png",
      url: siteImages.logoMark,
      mimeType: "image/png",
      size: 185243,
      altText: "MGBG shield logo mark"
    },
    {
      id: "mgbg-logo-lockup-seed",
      filename: "mgbg-logo-lockup.png",
      url: siteImages.logoLockup,
      mimeType: "image/png",
      size: 206228,
      altText: "Meta Genie Business Group Inc logo lockup"
    },
    {
      id: "agri-trait-gene-bank-image-seed",
      filename: "agri-trait-gene-bank.png",
      url: siteImages.agriTrait,
      mimeType: "image/png",
      size: 560027,
      altText: "Agri Trait and Gene Bank agriculture biotechnology collage"
    }
  ]
} as const;

export type SiteContent = typeof siteContent;

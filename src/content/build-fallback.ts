import type {
  BlogPost,
  Expert,
  HomeContent,
  Page,
  Partnership,
  Project,
  Service,
  SiteSetting,
  Testimonial,
  UsefulLink
} from "@prisma/client";
import { slugify } from "@/lib/format";
import { siteContent } from "./site-content";

const now = new Date("2026-04-26T00:00:00.000Z");

function stamp<T extends { createdAt: Date; updatedAt: Date }>(value: Omit<T, "createdAt" | "updatedAt">): T {
  return { ...value, createdAt: now, updatedAt: now } as T;
}

export function buildFallbackSiteSettings(): SiteSetting {
  return stamp({
    id: "site",
    ...siteContent.siteSettings,
    facebook: null,
    instagram: null,
    x: null,
    youtube: null
  });
}

export function buildFallbackHomeContent(): HomeContent {
  return stamp({
    id: "home",
    ...siteContent.homeContent
  });
}

export function buildFallbackPages(): Page[] {
  return siteContent.pages.map((page, index) =>
    stamp({
      id: `fallback-${page.slug}`,
      ...page,
      published: true,
      order: index
    })
  );
}

export function buildFallbackServices(): Service[] {
  return siteContent.services.map((service) => {
    const slug = slugify(service.title);
    return stamp({
      id: `fallback-service-${slug}`,
      slug,
      title: service.title,
      icon: service.icon,
      image: "image" in service ? service.image ?? null : null,
      shortDescription: service.shortDescription,
      fullDescription: service.fullDescription,
      order: service.order,
      featured: service.featured,
      published: true,
      seoTitle: service.title,
      seoDescription: service.shortDescription
    });
  });
}

export function buildFallbackProjects(): Project[] {
  return siteContent.projects.map((project) =>
    stamp({
      id: `fallback-project-${slugify(project.title)}`,
      slug: slugify(project.title),
      title: project.title,
      clientName: project.clientName,
      category: project.category,
      description: project.description,
      image: project.image,
      date: new Date(project.date),
      status: project.status,
      featured: project.featured,
      published: true
    })
  );
}

export function buildFallbackPartnerships(): Partnership[] {
  return siteContent.partnerships.map((partnership) =>
    stamp({
      id: `fallback-partner-${slugify(partnership.partnerName)}`,
      slug: slugify(partnership.partnerName),
      partnerName: partnership.partnerName,
      logo: null,
      description: partnership.description,
      country: partnership.country,
      partnershipType: partnership.partnershipType,
      image: partnership.image,
      files: null,
      featured: partnership.featured,
      published: true
    })
  );
}

export function buildFallbackExperts(): Expert[] {
  return siteContent.experts.map((expert) =>
    stamp({
      id: `fallback-${expert.id}`,
      name: expert.name,
      position: expert.position,
      photo: expert.photo,
      bio: expert.bio,
      skills: expert.skills,
      linkedin: null,
      email: null,
      displayOrder: expert.displayOrder,
      featured: expert.featured,
      published: true
    })
  );
}

export function buildFallbackTestimonials(): Testimonial[] {
  return siteContent.testimonials.map((testimonial) =>
    stamp({
      id: `fallback-${testimonial.id}`,
      clientName: testimonial.clientName,
      company: testimonial.company,
      photo: null,
      rating: testimonial.rating,
      text: testimonial.text,
      featured: testimonial.featured,
      published: true
    })
  );
}

export function buildFallbackPosts(): BlogPost[] {
  return siteContent.blogPosts.map((post) => {
    const slug = slugify(post.title);
    const publishedAt = new Date(post.publishedAt);
    return stamp({
      id: `fallback-${slug}`,
      title: post.title,
      slug,
      featuredImage: post.featuredImage,
      category: post.category,
      tags: post.tags,
      excerpt: post.excerpt,
      content: post.content,
      seoTitle: post.title,
      seoDescription: post.excerpt,
      published: true,
      publishedAt
    });
  });
}

export function buildFallbackUsefulLinks(): UsefulLink[] {
  return siteContent.usefulLinks.map((link) =>
    stamp({
      id: `fallback-${link.id}`,
      title: link.title,
      url: link.url,
      category: link.category,
      description: link.description,
      order: link.order,
      published: true
    })
  );
}

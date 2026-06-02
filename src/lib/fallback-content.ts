import {
  buildFallbackExperts,
  buildFallbackHomeContent,
  buildFallbackPages,
  buildFallbackPartnerships,
  buildFallbackPosts,
  buildFallbackProjects,
  buildFallbackServices,
  buildFallbackSiteSettings,
  buildFallbackTestimonials,
  buildFallbackUsefulLinks
} from "@/content/build-fallback";

export const fallbackSiteSettings = buildFallbackSiteSettings();
export const fallbackHomeContent = buildFallbackHomeContent();
export const fallbackPages = buildFallbackPages();
export const fallbackServices = buildFallbackServices();
export const fallbackProjects = buildFallbackProjects();
export const fallbackPartnerships = buildFallbackPartnerships();
export const fallbackExperts = buildFallbackExperts();
export const fallbackTestimonials = buildFallbackTestimonials();
export const fallbackPosts = buildFallbackPosts();
export const fallbackUsefulLinks = buildFallbackUsefulLinks();

import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { siteContent } from "../src/content/site-content";
import { ensureDatabaseUrl } from "../src/lib/database-url";
import { slugify } from "../src/lib/format";

const datasourceUrl = ensureDatabaseUrl();
const prisma = new PrismaClient({ datasourceUrl });

async function main() {
  const adminEmail = (process.env.ADMIN_EMAIL || "admin@mgbginc.ca").toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || "Admin@12345";
  const adminPasswordHash = await bcrypt.hash(adminPassword, 12);
  const shouldResetAdminPassword = process.env.RESET_ADMIN_PASSWORD === "true";

  await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: shouldResetAdminPassword ? { passwordHash: adminPasswordHash } : {},
    create: {
      name: "MGBG Admin",
      email: adminEmail,
      role: "ADMIN",
      passwordHash: adminPasswordHash
    }
  });

  await prisma.siteSetting.upsert({
    where: { id: "site" },
    update: siteContent.siteSettings,
    create: { id: "site", ...siteContent.siteSettings }
  });

  await prisma.homeContent.upsert({
    where: { id: "home" },
    update: siteContent.homeContent,
    create: { id: "home", ...siteContent.homeContent }
  });

  for (const page of siteContent.pages) {
    const data = { ...page, published: true, order: 0 };
    await prisma.page.upsert({
      where: { slug: page.slug },
      update: data,
      create: data
    });
  }

  for (const service of siteContent.services) {
    const slug = slugify(service.title);
    const data = {
      title: service.title,
      slug,
      icon: service.icon,
      image: "image" in service ? service.image ?? null : null,
      shortDescription: service.shortDescription,
      fullDescription: service.fullDescription,
      order: service.order,
      featured: service.featured,
      published: true,
      seoTitle: service.title,
      seoDescription: service.shortDescription
    };
    await prisma.service.upsert({
      where: { slug },
      update: data,
      create: data
    });
  }

  for (const project of siteContent.projects) {
    const slug = slugify(project.title);
    const data = {
      title: project.title,
      slug,
      clientName: project.clientName,
      category: project.category,
      description: project.description,
      image: project.image,
      date: new Date(project.date),
      status: project.status,
      featured: project.featured,
      published: true
    };
    await prisma.project.upsert({
      where: { slug },
      update: data,
      create: data
    });
  }

  for (const partnership of siteContent.partnerships) {
    const slug = slugify(partnership.partnerName);
    const data = {
      partnerName: partnership.partnerName,
      slug,
      description: partnership.description,
      country: partnership.country,
      partnershipType: partnership.partnershipType,
      image: partnership.image,
      featured: partnership.featured,
      published: true
    };
    await prisma.partnership.upsert({
      where: { slug },
      update: data,
      create: data
    });
  }

  for (const expert of siteContent.experts) {
    const data = {
      name: expert.name,
      position: expert.position,
      photo: expert.photo,
      bio: expert.bio,
      skills: expert.skills,
      displayOrder: expert.displayOrder,
      featured: expert.featured,
      published: true
    };
    await prisma.expert.upsert({
      where: { id: expert.id },
      update: data,
      create: { id: expert.id, ...data }
    });
  }

  for (const testimonial of siteContent.testimonials) {
    const data = {
      clientName: testimonial.clientName,
      company: testimonial.company,
      rating: testimonial.rating,
      text: testimonial.text,
      featured: testimonial.featured,
      published: true
    };
    await prisma.testimonial.upsert({
      where: { id: testimonial.id },
      update: data,
      create: { id: testimonial.id, ...data }
    });
  }

  for (const link of siteContent.usefulLinks) {
    const data = {
      title: link.title,
      url: link.url,
      category: link.category,
      description: link.description,
      order: link.order,
      published: true
    };
    await prisma.usefulLink.upsert({
      where: { id: link.id },
      update: data,
      create: { id: link.id, ...data }
    });
  }

  for (const asset of siteContent.mediaAssets) {
    await prisma.mediaAsset.upsert({
      where: { id: asset.id },
      update: asset,
      create: asset
    });
  }

  for (const post of siteContent.blogPosts) {
    const slug = slugify(post.title);
    const data = {
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
      publishedAt: new Date(post.publishedAt)
    };
    await prisma.blogPost.upsert({
      where: { slug },
      update: data,
      create: data
    });
  }

  console.log("MGBG site content seeded from src/content/site-content.ts");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

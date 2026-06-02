# Website content (source of truth)

All default copy for MGBG Inc. lives here. The admin dashboard can override records in MySQL; these files define what a **fresh install** loads.

| File | Purpose |
|------|---------|
| `site-content.ts` | Pages, services, projects, home, blog posts, experts, testimonials, links |
| `site-structure.ts` | Navigation, footer links, page slug ↔ URL map |
| `site-images.ts` | Shared image paths and Unsplash URLs |
| `build-fallback.ts` | Builds Prisma-shaped fallbacks when the database is unavailable |

## After editing copy

```bash
npm run db:seed
```

On a new Plesk domain after `npm run db:deploy`, seed runs automatically and loads this content.

## Public routes

| URL | CMS slug |
|-----|----------|
| `/about` | `about-us` |
| `/services` | `services` |
| `/projects` | `projects` |
| `/partnerships` | `partnerships` |
| `/experts` | `experts` |
| `/blog` | `blog` |
| `/testimonials` | `testimonials` |
| `/contact` | `contact` |
| `/book-free-consultation` | `book-free-consultation` |
| `/useful-links` | `useful-links` |
| `/privacy-policy` | `privacy-policy` |
| `/terms-conditions` | `terms-conditions` |

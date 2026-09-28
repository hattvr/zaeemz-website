# Zaeem Zahid Portfolio

A Nuxt 4 personal resume and portfolio website for Zaeem Zahid. It presents a scrollable overview of his background and skills, plus dedicated detail pages for selected work and projects. Genshin Wizard and SwiftRU project counters are fetched from server-side API routes; Alternalize and project content are maintained in local TypeScript data.

## Features

- Single-page portfolio with About Me, Resume, Experience, and Contact sections.
- Sticky top navigation and a desktop section-progress rail. Navigation scrolls to the selected section and updates as the visitor scrolls.
- Scroll reveal effects, a rotating typewriter headline, and an auto-scrolling frameworks carousel. Motion-sensitive visitors receive reduced-motion behavior where supported.
- Resume information including education, work history, skills, languages, and contact details.
- Dedicated project pages at `/project/:slug`, generated from shared project data. Pages include a banner, feature summaries with icons, project insight, counters, description links, and technology tags.
- Local project banners, company logos, and framework/tool logos served from `public/images/`.
- Responsive layouts for desktop and mobile.

## Technology

- Nuxt 4 and Vue 3 with TypeScript
- Nitro server API routes
- MongoDB Node.js driver for SwiftRU stats
- Manrope and JetBrains Mono web fonts
- CSS in `app/assets/css/main.css`

## Requirements

- Node.js compatible with the installed Nuxt version
- npm
- A MongoDB connection string only if you want live SwiftRU statistics

## Run Locally

Install dependencies and start the Nuxt development server:

```sh
npm ci
npm run dev
```

Nuxt prints the local URL when the server starts, typically `http://localhost:3000`.

To build and preview the production server locally:

```sh
npm run build
npm run preview
```

`npm run generate` is also available for static output. Static-only hosting cannot execute Nitro API routes, so live project stats require a Nuxt/Nitro server deployment or separately hosted API endpoints.

## Configuration

SwiftRU live stats are optional. To enable them locally, create a `.env` file in the repository root and set:

```dotenv
SWIFTRU_MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
```

Use a connection string for the SwiftRU database and an account restricted to the required read access. The stats route reads the URI only on the server. Never commit `.env` or expose the URI through a client-side variable. `.env.example` documents the variable without credentials.

Without this variable, the SwiftRU stats API returns null counts and the project page uses its local fallback values. Database connection/query failures also leave the site usable with those fallback values.

## Live Project Statistics

### Genshin Wizard

`GET /api/stats/genshin-wizard` requests these public endpoints in parallel:

- `https://api.genshinwizard.com/info/guilds`
- `https://api.genshinwizard.com/info/users`
- `https://api.genshinwizard.com/info/commands`

The route returns server, user, and command totals. Command total is the sum of command entries across the response categories. Results are cached for five minutes. Failed upstream requests produce a `null` value for that metric; the project page displays available live values and uses configured local fallback values when no live metrics are available.

### SwiftRU

`GET /api/stats/swiftru` counts documents in the configured MongoDB database's `users`, `courses`, and `snipes` collections. Results are cached for two minutes. The current active-snipes metric counts every document in `snipes`; it does not apply a status filter.

The website page itself does not connect to MongoDB. The Nitro server route performs the query so credentials stay on the server.

## Project Content

Project metadata and detail-page content live in `app/data/projects.ts`. Each project entry supplies its slug, banner, summary, features, description links, technology tags, fallback stats, and optionally a live stats endpoint.

Current detail routes:

- `/project/genshin-wizard`
- `/project/alternalize`
- `/project/swiftru`

Add or update project content in `app/data/projects.ts`. Add corresponding banner images under `public/images/projects/`. If a project needs different feature iconography, extend the icon type and component in `app/components/FeatureIcon.vue`.

## Repository Layout

```text
app/
  assets/css/main.css       Global styles and responsive layouts
  components/FeatureIcon.vue
                            Project feature icons
  data/projects.ts          Project content and fallback stats
  pages/index.vue           Main scrollable portfolio
  pages/project/[slug].vue  Dynamic project detail page
server/
  api/stats/
    genshin-wizard.get.ts   Genshin Wizard public API proxy
    swiftru.get.ts          SwiftRU MongoDB stats endpoint
public/
  images/
    companies/              Work history logos
    frameworks/             Carousel logos
    projects/               Project banners
```

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Nuxt development server |
| `npm run build` | Build the production application |
| `npm run preview` | Preview the production build locally |
| `npm run generate` | Generate static output; server API routes need a server runtime to work |
| `npm run postinstall` | Run `nuxt prepare` after dependency installation |

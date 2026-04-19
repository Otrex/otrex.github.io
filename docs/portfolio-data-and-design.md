# Portfolio Data And Design Documentation

Generated from the current repository source on 2026-04-19.

> Privacy note: `lib/data/profile.json` contains direct contact details and a full postal address. If this document is published with the website, review those fields first.

## 1. Site Overview

This portfolio is a Next.js Pages Router project for Treasure Obisike, branded as "Otrex". The current implementation presents a motion-led personal portfolio with a minimal homepage, a theme toggle, social links, an animated hero, a short about section, and a dock-style bottom navigation.

Primary stack:

- Framework: Next.js 15.3.2 with React 19
- Language: TypeScript
- Styling: Tailwind CSS v4, CSS custom properties, shadcn-style component primitives
- Motion/animation: `motion`, `framer-motion`, GSAP, custom animated components
- Theme: `next-themes`, plus local settings stored in `localStorage`
- Icons: `lucide-react` and inline SVG social icons

## 2. Route Map

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `pages/index.tsx` | Main portfolio homepage. |
| `/demo` | `pages/demo.tsx` | Older/experimental dark portfolio concept with square background, click sparks, rotating text, and three expertise cards. |
| `/json` | `pages/json.tsx` | Terminal-style view that renders the full `profile.json` data object. |

## 3. Main Homepage Structure

The homepage is composed in this order:

1. Full-page animated dot-pattern background.
2. Fixed announcement pill at the top center with "Latest update" and "Still in the works...".
3. Fixed top navigation with the "Otrex" logo, social links, and theme toggle.
4. Full-screen hero section with animated hello effect, typed name, typed role, and two call-to-action buttons.
5. About section with summary, education, location, tech stack, database skills, and DevOps/cloud skills.
6. Fixed bottom macOS-style dock with four placeholder actions: Home, Archive, Profile, Settings.

## 4. Content Source Of Truth

The main content data lives in:

- `lib/data/profile.json`

The homepage currently uses only part of this JSON file:

- `personal_information.address.city`
- `personal_information.address.country`
- `summary.professional`
- `education`
- `skills.frontend`
- `skills.backend`
- `skills.languages`
- `skills.databases`
- `skills.devops`

The following data exists in `profile.json` but is not currently displayed on the homepage:

- Full contact details
- Full postal address
- Website, LinkedIn, and GitHub links from the JSON file
- Languages spoken
- Work experience
- Projects
- Open-source packages
- Articles
- `skills.other`

Some homepage text is hard-coded instead of pulled from the data file:

- Hero name: "I'm Obisike Treasure"
- Hero role: "Full-Stack Developer | Technical Writer"
- Hero CTAs: "Checkout my work" and "Contact me"
- Extra about copy beginning with "Passionate about creating innovative web solutions..."
- Top navigation brand: "Otrex"
- Announcement text: "Latest update" and "Still in the works..."
- Dock item labels and alert actions

## 5. Full Data Inventory

### Profile Title

- Fullstack Developer

### Personal Information

| Field | Value |
| --- | --- |
| First name | Treasure |
| Middle name | Chimeziri |
| Last name | Obisike |
| Email | obisiket@gmail.com |
| Phone | +44 744 8319 476 |
| Street | Flat 11, Collins House, Huntly road |
| City | Birmingham |
| State | Birmingham |
| Country | United Kingdom |
| Post code | B16 8JR |
| Website | https://otrex.github.io |
| LinkedIn | https://www.linkedin.com/in/otrex |
| GitHub | https://github.com/otrex |

### Summary

Experienced software developer with a strong background in web development and a passion for creating innovative solutions.

### Education

| Field | Value |
| --- | --- |
| Degree | Bachelor of Science in Computer Science |
| Degree short | BSc |
| Institution | University of Portharcourt |
| Graduation date | 02/2019 |
| Field of study | Mathematics and Computer Science |

### Languages Spoken

| Language | Proficiency |
| --- | --- |
| English | Native |

### Skills

Programming languages:

- PHP
- JavaScript
- TypeScript
- Python

Frontend:

- Vue 2/3
- React
- Next.js
- Nuxt.js
- Tailwind CSS
- Inertia.js
- Ionic + Capacitor
- React Native
- Figma

Backend:

- Laravel
- Node.js (Express.js)
- FastAPI
- Flask

Databases:

- MySQL
- Postgres
- MongoDB
- Redis

DevOps and cloud:

- Docker
- GCP
- AWS
- Azure
- Kubernetes
- CI/CD (GitHub Actions, GitLab CI)

Other:

- OpenAPI/Swagger
- FFmpeg
- Postman

### Work Experience

#### Dinesurf

| Field | Value |
| --- | --- |
| Role | Lead Full-Stack Developer (Frontend heavy) |
| Location | Remote |
| Period | May 2024 - Present |
| Projects | https://vendor.dinesurf.com, https://mastercard.dinesurf.com, https://dinelists.com |

Stack:

- Vue.js
- PHP (Laravel)
- Next.js
- Inertia.js
- Tailwind CSS
- Docker
- GCP
- MySQL
- Laravel Forge
- Redis

Highlights:

- Rebuilt vendor dashboard using Vue 3 and Tailwind CSS.
- Refactored Laravel API routes for maintainability.
- Implemented middleware for validation, rate limiting, and security.
- Developed Next.js campaign platform for Mastercard.
- Created Dinelists.com lead capture site.
- Dockerized backend environment for consistency.

#### Tronweb

| Field | Value |
| --- | --- |
| Role | Full-Stack Developer |
| Location | Remote |
| Period | May 2022 - April 2024 |
| Projects | https://app.usemarshal.co, https://app.usesoteria.com, https://app.socialagency360.com, https://app.useagencyai.com, https://linkdominator.com |

Stack:

- Vue
- Nuxt.js
- PHP (Laravel)
- Flask
- Node.js
- MySQL
- Redis
- AWS
- Azure
- S3
- Nginx
- Apache

Highlights:

- Built frontend components and ADA-compliant widgets.
- Developed AI social post generator in Laravel platform.
- Contributed to Soteria's WordPress plugin.
- Designed REST APIs for website editor and dashboard.
- Migrated Flask AI video API to Node.js, reducing latency by 30%.
- Worked across GCP, AWS, and Azure for deployments.
- Built standalone website editor with integrations.
- Managed Postman collections and OAuth-based authentication.
- Contributed to Wedfuse Dating React Native app.

#### Xtellar

| Field | Value |
| --- | --- |
| Role | Frontend Developer (Contract) |
| Location | Remote |
| Period | Feb 2022 - June 2022 |

Stack:

- Vue 3
- Ionic + Capacitor.js
- TypeScript
- Express.js
- MySQL
- Redis
- AWS EKS

Highlights:

- Built cross-platform UIs from Figma designs.
- Extended Express.js APIs with JWT and OAuth2 authentication.
- Optimized AWS EKS configuration to improve uptime (99.9%).

#### Chigisoft

| Field | Value |
| --- | --- |
| Role | Full-Stack Developer |
| Location | Remote |
| Period | April 2020 - April 2022 |

Stack:

- Vue
- React
- Laravel
- Express.js
- MongoDB
- MySQL
- Docker
- Kubernetes
- GitLab CI

Highlights:

- Built UI for DFLab using Vue.js.
- Created reusable Nuxt/Vue.js component libraries.
- Designed APIs with OpenAPI (Swagger).
- Implemented RBAC, request validation, and rate-limiting.
- Improved architecture of Rivers state RSVP Laravel app.
- Integrated monitoring tools like New Relic.
- Supported CI/CD and deployments with GitLab CI and Docker.

### Projects

#### Fikets – Event Management Platform

| Field | Value |
| --- | --- |
| Role | Co-founder |
| URL | https://fikets.com |

Stack:

- PHP (Laravel)
- Vue.js
- Tailwind CSS
- MySQL
- Inertia.js
- Postgres

Highlights:

- Built event listing, ticketing, dashboards, and authentication.
- Integrated secure payments.
- Optimized performance and product delivery.

#### Telage Concepts (Blip School)

| Field | Value |
| --- | --- |
| Role | Freelance |
| URL | https://blip.school |

Stack:

- Slim
- PHP (Laravel)
- Alpine
- Livewire

Highlights:

- Integrated Paystack for payments.
- Resolved bugs improving speed and reliability.
- Added multi-currency support to fintech app.

#### Paycom (Personal project)

| Field | Value |
| --- | --- |
| Role | Developer |
| URL | https://github.com/Otrex/my-payment-app |

Stack:

- React Native

Highlights:

- Built mobile payment app with QR scanning.
- Added transaction previews.
- Designed clear UI interactions for payments.

### Open Source

| Name | Description |
| --- | --- |
| @obisiket1/express-utils | TypeScript decorators for routing and request validation. |
| Mail-template-sender | Node.js utility for API-based email delivery with templating support. |

### Articles

| Title | Description |
| --- | --- |
| Custom OTP input component with VueJS | A guide to building a reusable OTP input component using VueJS. |
| Steps to manipulating MongoDB with AI | Learn how to leverage AI for efficient MongoDB data manipulation. |
| Distribute Mobile Apps Artifacts via Telegram using Codemagic | Automate the distribution of mobile app artifacts through Telegram. |
| Live Streaming with Mux and Nuxt.js | Integrate Mux for live streaming in your Nuxt.js applications. |
| Cross-platform development using Ionic+Capacitor | Build cross-platform apps using Ionic and Capacitor. |
| Quickly build UI components with AI | Leverage AI to accelerate UI component development. |
| Introduction to FastAPI | Get started with FastAPI for building APIs. |
| Automate Appwrite Functions Deployment with GitHub | Streamline Appwrite functions deployment using GitHub Actions. |
| Docker Swarm with Appwrite and Swarmpit | Manage Appwrite instances in a Docker Swarm with Swarmpit. |
| How to Create Engaging Django Landing Pages with ButterCMS | Learn how to create engaging landing pages for your Django applications using ButterCMS. |
| How to Add a Plug & Play Blog to Your Java App Using ButterCMS | Integrate a blog into your Java application effortlessly with ButterCMS. |
| How to collect marketing campaign email leads with Mailgun and Appwrite in minutes | Quickly set up email lead collection for your marketing campaigns using Mailgun and Appwrite. |
| How to add DigitalOceans Spaces adapter to an Appwrite instance | Extend your Appwrite instance with DigitalOcean Spaces for scalable file storage. |
| How to Add a Blog to Your Golang Application in Minutes with ButterCMS | Easily integrate a blog into your Golang application using ButterCMS. |

Only the first article currently has a `link` field in the JSON, and that value is an empty string.

## 6. Design Pattern And Style

### Overall Direction

The design language is an animated, developer-focused personal portfolio. It uses a clean neutral canvas, precise geometric background detail, glassy/soft UI primitives, colorful gradient headings, and playful motion to create a modern technical identity.

Design keywords:

- Minimal
- Motion-led
- Interactive
- Developer-branded
- Dark/light adaptive
- Soft geometric
- Gradient-accented

### Layout Pattern

The homepage follows a stacked single-page layout:

- Fixed utility/navigation layer at the top.
- Full-viewport hero section for the first impression.
- Content sections beneath the hero, centered inside a max-width container.
- Fixed bottom dock for navigation-like actions.
- Absolute SVG background pattern behind the page content.

Reusable layout choices:

- `main` uses `relative min-h-screen z-10`.
- Hero uses `min-h-screen` and centered flex alignment.
- About section uses `py-20 px-6`.
- About content is constrained with `container mx-auto max-w-6xl`.
- Responsive grids use `md:grid-cols-2`.

### Color System

The color system is based on shadcn-style semantic CSS variables in OKLCH:

- `--background`
- `--foreground`
- `--card`
- `--popover`
- `--primary`
- `--secondary`
- `--muted`
- `--accent`
- `--destructive`
- `--border`
- `--input`
- `--ring`
- chart and sidebar color tokens

Light mode:

- White background
- Dark neutral foreground
- Pale neutral secondary/muted/accent surfaces
- Dark primary with light primary foreground

Dark mode:

- Deep blue-gray/near-black background
- Near-white foreground
- Dark neutral card/popover surfaces
- Muted blue-gray supporting surfaces
- Low-opacity white borders and inputs

Accent colors are applied mostly through Tailwind utility classes:

- Orange to purple gradient for the main "About Me" heading.
- Blue to cyan gradient for "Education & Background".
- Green to blue gradient for "Tech Stack".
- Green badges for frontend skills.
- Blue badges for backend skills.
- Purple badges for programming languages.
- Orange badges for databases.
- Cyan badges for DevOps/cloud.

### Typography

Fonts referenced in the project:

- Edu NSW ACT Cursive: used by the top-left "Otrex" logo.
- Lato: defined for body text in CSS, though the later global `*` rule overrides text to Geist.
- Saira: used in the hero name with the `saira-bold` class.
- Geist: applied globally through `* { font-family: "Geist", sans-serif; }`, but it is not loaded in `_document.tsx` via Google Fonts.

Current typography pattern:

- Brand logo: large, bold, italic cursive.
- Hero name: large bold sans-serif display text.
- Hero profession: smaller supporting line with typing cursor.
- Section headings: bold, large gradient text.
- Body copy: neutral gray, readable line length, medium size.
- Skill badges: small, compact, pill-like labels.

### Components And Interaction Patterns

#### Top Navigation

File: `components/TopNav.tsx`

- Fixed at the top with `left-4 top-4 right-4`.
- Contains brand text, social icons, and theme toggle.
- Uses `mountedHOC` so theme-dependent UI waits until the client has mounted.

#### Social Links

File: `components/Socials.tsx`

- LinkedIn: `https://linkedin.com/in/otrex`
- GitHub: `https://github.com/otrex`
- Twitter/X: `https://twitter.com/otrex__`
- Icons are inline SVGs with `currentColor`.
- Hover states shift text color in light and dark mode.

#### Hero

File: `components/Hero.tsx`

Hero interaction sequence:

1. `AppleHelloEnglishEffect` plays.
2. Name appears using `TypingText`.
3. Profession appears using `TypingText` with cursor.
4. Two `RippleButton` CTAs appear.

The hero depends on local React state:

- `showName`
- `showProfession`
- `showButton`

#### About Cards

File: `components/AboutMe.tsx`

- Uses `SpotlightCard` as the main card container.
- Cards have rounded corners, borders, padding, and hover spotlight effects.
- Skill groups are represented by colored badge clusters.

#### Spotlight Card

File: `components/animated/SpotlightCard.tsx`

- Tracks mouse position inside the card.
- Shows a radial gradient spotlight on hover or focus.
- Uses light/dark adaptive spotlight color:
  - Light: `rgba(0, 0, 0, 0.25)`
  - Dark: `rgba(255, 255, 255, 0.25)`
- Uses large card radius: `rounded-3xl`.

#### Dot Pattern Background

File: `components/ui/shadcn-io/dot-pattern/index.tsx`

- Full-page SVG dot field.
- Measures container dimensions and generates a responsive dot grid.
- Uses optional glow animation.
- Homepage uses `width={20}`, `height={20}`, and `glow={true}`.

#### Announcement Pill

File: `components/ui/shadcn-io/announcement/index.tsx`

- Built on the shared `Badge` component.
- Rounded full pill with tag and title segments.
- Used as a fixed top-center status indicator.

#### Dock

File: `components/animated/Dock.tsx`

- Fixed at the bottom of the page.
- Uses `framer-motion` motion values and springs.
- Items magnify based on mouse proximity.
- Labels appear on hover/focus.
- Current click behavior is placeholder `alert(...)` calls.

#### JSON Data Page

File: `pages/json.tsx`

- Renders the profile JSON as terminal-style colored syntax.
- Uses recursive rendering for strings, numbers, booleans, arrays, and objects.
- Includes the command label `$ cat portfolio.json`.
- Includes an "ESC :q!" decorative terminal hint.

## 7. Theme And State Pattern

Theme state is split across:

- `next-themes`
- `SettingsContext`
- `localStorage` key: `settings`

Default settings:

```json
{
  "mode": "system",
  "theme": {
    "styles": {
      "light": {},
      "dark": {}
    }
  }
}
```

Theme toggle behavior:

- Reads the current mode from settings.
- Switches from `dark` to `light`, or from anything else to `dark`.
- Updates `localStorage`.
- Calls `setTheme(newMode)`.
- Uses the theme-toggle transition helper.

The document script in `_document.tsx` also applies the `dark` class early based on `settings.mode` or system preference.

## 8. Current Design Gaps And Cleanup Opportunities

These are not blocking, but they are useful to know when evolving the site:

- The homepage uses only a subset of the profile data, so experience, projects, articles, open source, and contact information are not yet represented visually.
- The hero content is hard-coded instead of using `profile.json`.
- The dock actions are placeholders and currently show browser alerts.
- `_document.tsx` loads Google Fonts for Edu NSW ACT Cursive, Lato, and Saira, while the global CSS applies Geist everywhere. If Geist is intended, it should be loaded explicitly; if Lato is intended, the global `*` override should be adjusted.
- `README.md` is still the default Next.js starter README and does not describe this portfolio project.
- `profile.json` includes a full postal address, which may be too sensitive for a public portfolio.
- The JSON data contains article titles and descriptions but no usable article links.
- The first article object has an empty `link` field, while the rest of the article objects omit `link` entirely.

## 9. Suggested Content Sections For Future Homepage Expansion

The existing data model can support these sections without needing new content fields:

- Experience timeline from `experience`.
- Featured projects from `projects`.
- Open-source cards from `open_source`.
- Article/blog list from `articles`.
- Contact section from `personal_information.contact` and `personal_information.links`.
- Full skills matrix including `skills.other`.
- Language section from `languages`.

## 10. Style Guide Summary

Use this condensed guide when adding new UI:

- Keep the page background neutral and let motion/details carry the personality.
- Use semantic CSS variables for core surfaces and Tailwind utilities for accent color.
- Prefer gradient text for major section headings, not for body copy.
- Use colored badges for grouped technical skills.
- Keep sections centered and constrained with generous vertical spacing.
- Continue the rounded, bordered, softly interactive card pattern.
- Respect light/dark mode in every new component.
- Use motion as a reveal or interaction enhancement, not as a replacement for readable content.
- Pull portfolio content from `lib/data/profile.json` when possible so the site remains data-driven.

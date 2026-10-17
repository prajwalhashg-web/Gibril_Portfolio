# Gibril Shaji Portfolio

A one-page portfolio for **Gibril Shaji**, a sales professional in Dubai moving into Dubai real estate sales. It is written for recruiters, brokerage owners and developer sales teams.

Built with React 19, TypeScript, Vite 6 and plain modular CSS. Icons come from `lucide-react`. Poppins is self-hosted through `@fontsource/poppins`, so there are no external font requests.

## Run it

```bash
npm install
npm run dev        # local development at http://localhost:5173
npm run build      # type-check and build into dist/
npm run preview    # serve the production build at http://localhost:4173
npm run lint       # ESLint
```

Requires Node 18 or newer (tested on Node 22).

## Deploy

The build is a static site in `dist/`, and asset paths are relative (`base: './'` in `vite.config.ts`).

- **Netlify / Cloudflare Pages:** build command `npm run build`, output directory `dist`.
- **Vercel:** import the repo; it detects Vite automatically.
- **Any static host or a sub-folder:** upload the contents of `dist/`.

Once the real domain is known:

1. Add `<link rel="canonical" href="https://your-domain/">` and `<meta property="og:url" ...>` to `index.html`.
2. Change `og:image` to the absolute URL `https://your-domain/og-image.png`. Social networks need absolute URLs.
3. Add a `Sitemap:` line to `public/robots.txt` and create `public/sitemap.xml` with the single page URL.

## Editing content

All text lives in **`src/data/candidate.ts`**: contact details, hero copy, roles, strengths, the four tables, education, tools and languages. Change it there and the layout follows. Do not add claims the CV does not support: no transactions, revenue, licences, testimonials or agency affiliations.

## Adding the final resume PDF

The resume is served from `public/resume/Gibril_Shaji_Resume.pdf`. Every "Download Resume" button points to it.

To update it, replace that file and keep the same name. To use a different name, change `candidate.resume.href` and `candidate.resume.fileName` in `src/data/candidate.ts`.

## Adding a verified photograph

The site is designed to work without a portrait. Until one is supplied, the intro section shows a "GS" monogram tile.

To add a real photo of Gibril:

1. Save a square JPG or WebP, at least 480 × 480 px, as `public/images/gibril-shaji.jpg`.
2. In `src/data/candidate.ts`, set:
   ```ts
   portrait: { src: 'images/gibril-shaji.jpg', alt: 'Gibril Shaji' },
   ```

Only use a real photograph of Gibril. Never use a stock portrait.

## Adding architectural photography (optional)

No images ship with the site. The build environment could not reach any licensed image source, and nothing broken or placeholder was left in. The design stands on type and flat colour fields.

If you add Dubai architecture photos later:

- Use properly licensed images (your own, Unsplash, or Wikimedia Commons with commercial-use licences).
- Credit the photographer where the licence asks for it.
- Do not use images that suggest Gibril owns, lists or sold a property.

## Structure

```
src/
  data/candidate.ts            all content (typed)
  styles/tokens.css            design tokens: colour, type, space, motion
  styles/base.css              reset, grid, buttons, reveal motion
  styles/sections.css          one block per section
  styles/tables.css            the four tables + stacked phone layout
  hooks/useActiveSection.ts    active nav link (IntersectionObserver)
  hooks/useReveal.ts           staggered entrances (off for reduced motion)
  hooks/useTableRoles.ts       keeps table semantics when rows are stacked
  components/
    Navbar, HeroSection, FitName, ProfessionalIntro, ExperienceTimeline,
    Marquee, StrengthsGrid (cards + Table 1), TransferableSkills (Table 2),
    CareerDirection (Table 4 + picker), QualificationsSection (Table 3),
    LanguagesSection, ContactSection, Footer, ResumeDownload
public/
  resume/Gibril_Shaji_Resume.pdf
  favicon.svg, og-image.png, robots.txt
```

## Design system

- **Colour:** deep plum `#280933` (ink and dark fields), purple `#7423C1` (brand field), coral `#F25346` (resume action, active states, small markers only), white ground, `#F7F7F7` and lilac steps for surfaces.
- **Type:** Poppins only, five size steps (`--step-*` in `tokens.css`).
- **Shape:** square corners everywhere, with tiles on 8px gaps.
- **Theme:** light only.
- **Motion:**
  - One marquee band.
  - Staggered entrances.
  - Hover and press feedback on controls.
  - All of it uses transform and opacity only.
  - Turned off under `prefers-reduced-motion`.

The art direction came from the Taste Skill (direction "The name as a monument"), with the brand colours and Poppins kept.

## Accessibility notes

- Semantic landmarks with a skip link, one `h1`, and a logical heading order.
- Visible coral focus rings.
- The mobile menu has `aria-expanded`. It closes on Escape and returns focus to the menu button.
- Tables use `thead`, `th scope`, captions and column groups. On phones each row stacks into a labelled block, and explicit ARIA roles keep the table semantics.
- The career picker uses `aria-pressed` buttons with a polite live region. The full table stays visible either way.

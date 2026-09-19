# Chiran Binnu Cherian — Personal Research Website

Personal academic and professional website for Chiran Binnu Cherian, Ph.D. student in Aerospace Engineering at Iowa State University.

Live site: https://chiranbc.github.io

## Main sections

- Home
- About
- Research
- Publications
- Experience
- News
- CV and resume downloads

## Research areas

- Space Autonomy, Navigation, and Estimation
- Optimal Control
- AI/ML for Engineering Materials

## Local development

This site uses Astro and Tailwind CSS.

```powershell
npm install
npm run dev
```

The local development server is normally available at `http://localhost:4321/`.

## Production build

```powershell
npm run build
```

The generated static site is written to `dist/`.

## Deployment

The repository is deployed to GitHub Pages through GitHub Actions when changes are pushed to the `main` branch.

## Key files

- `src/pages/` — site routes
- `src/components/ui/TopNavbar.astro` — responsive site navigation
- `src/components/ui/SiteFooter.astro` — shared footer
- `src/components/ui/SEO.astro` — shared SEO and social metadata
- `src/settings.ts` — profile and site settings
- `public/profile.jpg` — profile image
- `public/social-preview.png` — social sharing image
- `public/cv.pdf` — CV
- `public/resume.pdf` — resume

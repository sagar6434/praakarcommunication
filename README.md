# PRaakar Communications

Marketing website for PRaakar Communications LLP. This repository contains a static one-page agency site focused on PR, branding, advertising, digital marketing, and regional campaign reach across India.

## Highlights

- Premium hero section with stronger conversion messaging
- Updated network section with coverage cards and India reach graphic
- Refined brands showcase with stronger proof positioning
- Quick contact actions for call, email, and WhatsApp
- GitHub Pages-ready static entry point

## Project Structure

- `index.html` - Static entry point for GitHub Pages and other static hosting
- `index.php` - PHP wrapper for environments that still use PHP hosting
- `home.html` - Main source file for the site content and layout
- `assets/css/` - Stylesheets
- `assets/js/` - Frontend scripts
- `assets/img/` - Logos, brand visuals, team images, and backgrounds
- `.github/workflows/` - Deployment workflow for GitHub Pages

## Local Preview

Run a lightweight local server from the project root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/
```

## Deployment

This repo is configured for GitHub Pages using GitHub Actions.

It is also ready for Vercel static deployment.

Typical flow:

1. Push changes to `main`
2. GitHub Actions builds and deploys the static site
3. GitHub Pages serves `index.html`

If Pages is not active yet in the repository settings, set the Pages source to `GitHub Actions`.

### Vercel

Recommended settings when importing this repo into Vercel:

- Framework Preset: `Other`
- Build Command: leave empty
- Output Directory: leave empty
- Install Command: leave empty
- Root Directory: `.`

Vercel will serve the static site from `index.html`, and `vercel.json` keeps the root route explicit.

## Notes

- `home.html` remains the editable source page used during development
- `index.html` should stay in sync with `home.html` for static hosting
- The old contact form backend was replaced with direct contact actions to improve reliability and conversion

## Suggested Next Improvements

- Add real case studies with measurable outcomes
- Add client testimonials or media proof
- Replace the stylized coverage graphic with a full India SVG map
- Connect a real lead form or CRM capture flow

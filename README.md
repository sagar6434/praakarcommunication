# PRaakar Communications

Static marketing website for PRaakar Communications LLP. The site presents the agency's services, team, network reach, client showcase, and direct contact options.

## Project Structure

- `index.html` - Canonical static entry point used by GitHub Pages, Vercel, and local preview
- `index.php` - Optional PHP wrapper for environments that still expect a PHP entry file
- `assets/css/` - Site and vendor stylesheets
- `assets/js/` - Frontend behavior and plugin initialization
- `assets/img/` - Brand, team, and client imagery
- `.github/workflows/deploy-pages.yml` - GitHub Pages deployment workflow

## Local Preview

From the project root, run:

```bash
python3 -m http.server 8000
```

Then open `http://127.0.0.1:8000/`.

## Deployment

### GitHub Pages

Push to `main` and the GitHub Actions workflow will publish the static site artifact. In repository settings, set Pages to use `GitHub Actions` as the source.

### Vercel

Recommended import settings:

- Framework Preset: `Other`
- Build Command: leave empty
- Output Directory: leave empty
- Install Command: leave empty
- Root Directory: `.`

`vercel.json` keeps the root route pointed at `index.html`.

## Notes

- `index.html` is the single source of truth for site content
- The contact section uses direct call, email, and WhatsApp actions instead of a server-side form handler

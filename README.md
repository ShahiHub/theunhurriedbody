# The Unhurried Body

This repository contains a standalone website (not tied to Lovable).

Tech stack:
- React + Vite (TypeScript)
- Tailwind CSS
- shadcn/ui

## Run locally

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

A workflow is included at `.github/workflows/deploy-pages.yml` that builds and deploys automatically.

1. Push to `main`.
2. In GitHub: **Settings → Pages → Build and deployment**
3. Set **Source** to **GitHub Actions**.

### Note on project-site URLs

This repo is configured for a GitHub Pages project site URL like:
`https://shahihub.github.io/theunhurriedbody/`

Vite `base` is set to `/theunhurriedbody/` in production, and React Router uses `import.meta.env.BASE_URL` as the router `basename`.

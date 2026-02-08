# Melody Styles — Deploying the static site to Railway

This repo contains a full-stack app, but the static frontend build is available in `dist/public` after running the build.

Quick local build

```bash
npm ci
npx tsx script/build.ts
# or
npm run build
```

This produces the static site at `dist/public`.

Railway (recommended for free hosting of the static site)

1. Sign in to https://railway.app and create a new project.
2. Choose "Deploy from GitHub" and connect/select this repository.
3. In the Railway deploy settings set:
   - Build command: `npm ci && npm run build`
   - Publish directory: `dist/public`
4. Trigger a deploy — Railway will run the build and serve the contents of `dist/public` as a static site.

Notes
- If you prefer, you can build locally and upload the contents of `dist/public` to any static host (Netlify, Vercel, GitHub Pages).
- For a full (API + client) deploy you will need a Postgres `DATABASE_URL`; Railway can also provide a Postgres add-on if you want the backend hosted there.

Push your code to GitHub

```bash
git add .
git commit -m "Prepare for static deploy"
git push origin main
```

If you want, I can add a GitHub Actions workflow to build on push or a Railway GitHub Actions deploy template — tell me which and I will create it.

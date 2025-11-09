# Arife Nur AI World

React + Vite + TypeScript portfolio site. This README focuses on local development and publishing under GitHub.

## Tech Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS + shadcn-ui

## Getting Started

Prerequisites: Node.js 18+ and npm.

```sh
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Publish to GitHub

1. Create a new repository on GitHub (empty repo, no README).
2. Initialize git locally and add the remote:

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Optional: GitHub Pages

This is a SPA built with Vite; you can serve the static files via GitHub Pages.

```sh
# Build static assets
npm run build

# Serve dist/ via Pages (configure your repo to use /dist from the gh-pages branch)
# One simple approach is the gh-pages package:
npm install --save-dev gh-pages

# Add script:
# "deploy": "gh-pages -d dist"

npm run deploy
```

Alternatively, host on any static host (Netlify, Vercel, Cloudflare Pages). Configure the build command `npm run build` and publish the `dist/` directory.

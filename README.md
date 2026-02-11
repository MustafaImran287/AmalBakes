# Amal Bakes Website

A one-page Next.js website for **Amal Bakes** — Cakes & Cookies.

## Features

- **Header** — Full-width hero image (logo) with overlay and gradient
- **Navigation** — Home, Products, About, Contact (smooth scroll)
- **Order Now** — Button linking to WhatsApp
- **WhatsApp** — Floating chat button for direct messages
- **Products** — Section highlighting custom cakes, cookies, and seasonal specials
- **About** — Brand story with logo
- **Footer** — Social media icons, contact details (phone, email, address)

## Theme

- Colors: `#ffa9f9` (pink) and `#fff7ad` (cream) with linear gradients
- Matches the Amal Bakes logo style

## Setup

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## Customize

- **WhatsApp number** — Edit `components/WhatsAppButton.tsx` and replace `WHATSAPP_NUMBER` (e.g. `971501234567` for UAE with country code, no + or leading 0).
- **Contact details** — Edit `components/Footer.tsx`: `CONTACT.phone`, `CONTACT.email`, `CONTACT.address`.
- **Social links** — Update the `href` values in the `SOCIAL` array in `components/Footer.tsx` with your Facebook, Instagram, and Twitter URLs.

## Build

- Production build: `npm run build`
- Start production server: `npm start`

## Deployment (GitHub Pages)

The repo includes a workflow (`.github/workflows/deploy.yml`) that builds and deploys to **GitHub Pages** on every push to `main` or `master`, and via **workflow_dispatch** (Actions tab → Run workflow).

**One-time setup:** In your GitHub repo go to **Settings → Pages**. Under "Build and deployment", set **Source** to **GitHub Actions**. No secrets are required. After the first successful run, the site will be at `https://<username>.github.io/<repo>/` (replace `<repo>` with your repo name). If links or assets don’t load, add `basePath: '/your-repo-name'` and `assetPrefix: '/your-repo-name/'` in `next.config.js` so paths match GitHub Pages.

Logos are served from `public/Logos/` (copied from the project `Logos` folder).

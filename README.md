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

## Deployment (GitHub Actions)

The repo includes a workflow (`.github/workflows/deploy.yml`) that builds and deploys to **Vercel** on every push to `main` and on pull requests (preview).

**Required GitHub secrets** (Repo → Settings → Secrets and variables → Actions):

| Secret             | Where to get it |
|--------------------|-----------------|
| `VERCEL_TOKEN`     | [Vercel Account → Tokens](https://vercel.com/account/tokens): create a token and paste it here. |
| `VERCEL_ORG_ID`    | Vercel dashboard → your project → **Settings → General** → "Project ID" (or run `vercel link` locally and copy from `.vercel/project.json`). |
| `VERCEL_PROJECT_ID`| Same place as Org ID (also in `.vercel/project.json`). |

**One-time setup:** Import this repo in the [Vercel dashboard](https://vercel.com/new) (or run `vercel` in the project once) so the project exists. Then add the three secrets above. Pushes to `main` will deploy to production; PRs will create preview deployments.

Logos are served from `public/Logos/` (copied from the project `Logos` folder).

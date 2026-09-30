# Piya-Skills site

Landing page for [Piya-Boy/piya-skill](https://github.com/Piya-Boy/piya-skill). Next.js (App Router, static export), Tailwind, and two components from [React Bits](https://reactbits.dev) (`TextType`, `CountUp`). Thai at `/th`, English at `/en`.

## Develop

```bash
npm install
npm run dev
```

Adding a skill: add an entry to `lib/skills.ts` (and its real demo text if it has one). Copy for both languages lives in `lib/i18n.ts`.

## Deploy (GitHub Pages)

`.github/workflows/pages.yml` builds a static export and deploys it on every push to `main`, and once a day so the GitHub star count stays fresh. The site is served from `/<repo name>`, which the workflow passes as `NEXT_PUBLIC_BASE_PATH`.

One-time setup: repo Settings → Pages → Source: **GitHub Actions**.

To build the Pages output locally:

```bash
NEXT_PUBLIC_BASE_PATH=/piya-skill-web npm run build   # writes ./out
```

`components/reactbits/` holds vendored React Bits source; ESLint skips it.

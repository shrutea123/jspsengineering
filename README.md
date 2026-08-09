# JSPS Engineering & Solutions Pte. Ltd. — Website

A React + Vite site with React Router for the multi-page "tab" navigation
(Home / About / Services / Projects / Contact).

## Requirements

- Node **≥20.19** (or ≥22.13). This project pins **Node 22.18.0** via `.tool-versions`
  (asdf) — run `asdf install` once if you don't already have that version.

## Getting started

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Structure

```
src/
├── main.jsx              Router + app entry
├── App.jsx                Route definitions
├── index.css               All styling (colors, layout, components)
├── components/
│   ├── Header.jsx          Sticky top nav w/ tabs, mobile menu — edit ONCE, applies everywhere
│   ├── Footer.jsx          Footer w/ contact info & links — edit ONCE, applies everywhere
│   ├── PageHero.jsx        Shared banner used at the top of inner pages
│   ├── PlaceholderImg.jsx  Dashed placeholder block — swap for a real <img> once you have photos
│   └── ScrollToTop.jsx     Resets scroll position on page navigation
└── pages/
    ├── Home.jsx
    ├── About.jsx
    ├── Services.jsx
    ├── Projects.jsx (has a working category filter, client-side)
    └── Contact.jsx (form + map)
```

## What to customize

Search `src/` for `TODO` and `[Placeholder]` / `[Insert ...]` text:

- Company stats, mission/vision, certifications, milestones, team bios — `About.jsx`
- Service details per offering — `Services.jsx`
- Project case studies + photos — `Projects.jsx`
- Office address, operating hours, social links — `Contact.jsx` + `Footer.jsx`
- Logo: replace the "JSPS" text badge in `Header.jsx` with an `<img>` once you have a logo file
- Photos: drop files into `src/assets/` and replace `<PlaceholderImg>` calls with `<img src={...} alt="..." />`

## Connecting the contact form

`src/pages/Contact.jsx` has a `FORM_ACTION` constant currently pointing at a
placeholder Formspree URL. To make it actually deliver messages to your inbox:

1. Sign up free at https://formspree.io (or Web3Forms / Getform as alternatives)
2. Create a form and copy your unique endpoint (`https://formspree.io/f/xxxxxxx`)
3. Paste it into `FORM_ACTION` at the top of `Contact.jsx`
4. Delete the `FORM_ACTION.includes('YOUR_FORM_ID')` guard in `handleSubmit` in the same file

No backend code needed — the browser posts the form directly to the service.

## Deploying

`npm run build` produces static files in `dist/` — deploy that folder to
Netlify, Vercel, GitHub Pages, or any static host.

Because this is a client-side-routed single-page app, the host needs to
serve `index.html` for any unknown path (so `/about` works on a hard
refresh, not just via in-app navigation):

- **Netlify**: already handled — `public/_redirects` (`/* /index.html 200`) is included.
- **Vercel**: works out of the box for Vite SPAs, no extra config needed.
- **GitHub Pages**: needs the 404.html-redirect trick — ask if you go this route.

## Brand palette

| Role          | Color     |
|---------------|-----------|
| Navy (primary)| `#0A2A43` |
| Teal (accent) | `#0F8B8D` |
| Amber (CTA)   | `#F2994A` |

Defined as CSS variables at the top of `src/index.css` — change them there
to retint the whole site.

## Note

A plain static-HTML version of an earlier draft of this site (no build step,
no npm required) is kept in `site/` for reference — it's not part of the
live app and can be deleted if you don't need it.

# Elizabeth West — Creative Portfolio

A visually led marketing portfolio for Elizabeth West, built to accompany her resume. It showcases social media, blog/analytics work, promotional items (swag + brochure), with scaffolded sections for consulting and event planning.

**Live site:** https://lizportfolio.com/  
(GitHub Pages project URL also works once paths match the host; this build uses `base: '/'` for the custom domain.)

## Local development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds with Vite and deploys to GitHub Pages.

In the repo on GitHub: **Settings → Pages → Source → GitHub Actions**.

## Adding images later

Drop files into the matching folder, then ask to wire them into the section (or edit `src/content.js`):

| Section | Folder |
| --- | --- |
| Hero | `public/images/hero/` |
| Promotional / swag / brochure | `public/images/promo/` |
| Social stills (optional) | `public/images/social/` |
| Consulting | `public/images/consulting/` |
| Event planning | `public/images/event-planning/` |

Copy and links live in [`src/content.js`](src/content.js).

## Contact

- Email: emm.west17@gmail.com
- LinkedIn: https://www.linkedin.com/in/elizabeth-west-1b0294189/

# Scale Webb

Static corporate website for Scale Webb, a European technology holding and venture studio.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## Local development

```sh
npm install
npm run dev
```

## Validation

```sh
npm run lint
npm run test
npm run build
```

## Deployment

The production output is generated in `dist/` and can be deployed directly to Cloudflare Pages.

- Build command: `npm run build`
- Output directory: `dist`
- SPA fallback: configured in `public/_redirects`

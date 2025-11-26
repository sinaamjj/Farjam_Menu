# Farjam Cafe Menu

This project is built with Vite and can be deployed either to **Cloudflare Pages** or as a **Cloudflare Worker with static assets**. The Worker fallback ensures that even environments that still call `wrangler deploy` (instead of `wrangler pages deploy`) will publish a working build.

## Build

```sh
pnpm install
pnpm run build
```

## Deploy to Cloudflare Pages

1. Ensure you have `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` available in your environment.
2. Run the combined build-and-deploy command:

   ```sh
   pnpm run deploy
   ```

   This builds the project and then calls `wrangler pages deploy ./dist/public --project-name=farjam-cafe-menu` under the hood.

If your CI/CD pipeline previously used `npx wrangler deploy`, change it to `pnpm run deploy` (or `pnpm run deploy:pages`) so the Pages-specific command is executed. A GitHub Actions workflow is provided at `.github/workflows/cloudflare-pages.yml` that performs the correct Pages deployment after building the site.

## Deploy as a Worker (for environments that run `wrangler deploy`)

Some CI/CD platforms default to `wrangler deploy`. A lightweight Worker wrapper is included so those pipelines succeed without additional configuration.

```sh
pnpm run build
npx wrangler deploy
```

The Worker serves the static assets from `dist/public` and falls back to `index.html` for SPA routes, matching the Cloudflare Pages behavior.

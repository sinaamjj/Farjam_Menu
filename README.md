# Farjam Cafe Menu

This project is built with Vite and is intended to be deployed to **Cloudflare Pages**. The Pages deployment must use the `wrangler pages deploy` command; running `wrangler deploy` will fail because that command is for Workers projects.

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

   This calls `wrangler pages deploy ./dist/public --project-name=farjam-cafe-menu` under the hood.

If your CI/CD pipeline previously used `npx wrangler deploy`, change it to `pnpm run deploy` (or `pnpm run deploy:pages`) so the Pages-specific command is executed.

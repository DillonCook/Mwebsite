import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://wesleychapelac.com",
  trailingSlash: "always",
  integrations: [sitemap()],
  vite: {
    server: {
      host: true,
    },
  },
});

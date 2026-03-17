import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const rawBasePath = process.env.BASE_PATH ?? "/";
const normalizedBasePath =
  rawBasePath === "/" || rawBasePath === ""
    ? "/"
    : `/${rawBasePath.replace(/^\/+|\/+$/g, "")}/`;

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://wesleychapelac.com",
  base: normalizedBasePath,
  trailingSlash: "always",
  integrations: [sitemap()],
  vite: {
    server: {
      host: true,
    },
  },
});

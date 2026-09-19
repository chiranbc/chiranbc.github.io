// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const excludedSitemapPaths = new Set(["/404", "/cv", "/papers"]);

export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/\/$/, "") || "/";
        return !excludedSitemapPaths.has(pathname);
      },
    }),
  ],
  site: "https://chiranbc.github.io",
});

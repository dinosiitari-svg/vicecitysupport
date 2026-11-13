import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vicecitysupport.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // Template pages are for you to copy, not for Google.
      filter: (page) => !page.includes('/template-') && !page.includes('/thanks/'),
    }),
  ],
});

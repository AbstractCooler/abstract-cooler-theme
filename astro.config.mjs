// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import decapCmsOauth from 'astro-decap-cms-oauth';

// https://astro.build/config
export default defineConfig({
  site: 'https://abstract-cooler-theme.vercel.app',
  output: 'static',
  adapter: vercel(),
  integrations: [
    sitemap(),
    decapCmsOauth({
      decapCMSSrcUrl: 'https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js',
    }),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        // Bulma 1.0.4 still uses the legacy Sass if() function; silence the
        // dependency warning without hiding warnings from our own styles.
        scss: {
          silenceDeprecations: ['if-function'],
        },
      },
    },
  },
});

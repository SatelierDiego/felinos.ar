// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://felinos.ar',
  trailingSlash: 'ignore',

  image: {
    defaultFormat: 'webp',
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: { quality: { webp: 80, avif: 70, jpeg: 85, png: 100 } },
    },
  },

  integrations: [
    sitemap(),
    icon({
      iconDir: 'src/assets/icons/tabler/outline',
    }),
  ],

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Open Sans',
      cssVariable: '--font-open-sans',
      styles: ['normal'],
      weights: ['300 800'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Quicksand',
      cssVariable: '--font-quicksand',
      styles: ['normal'],
      weights: ['300 700'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  devToolbar: {
    enabled: false,
  },
});

// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  base: '/',
  site: 'https://spritle-new.vercel.app/',
  output: 'static',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    svg: {
      mode: 'sprite'
    }
  }
});
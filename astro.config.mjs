// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/', // Add your repo name here
  site: 'https://Suryasu5678.github.io/Spritle-2025/', // Your GitHub Pages URL
  output: 'static', // GitHub Pages needs static output

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});

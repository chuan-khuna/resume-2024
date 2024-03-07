import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://github.com/chuan-khuna' : 'http://localhost:4321',
  markdown: {
    syntaxHighlight: 'shiki',
    gfm: true,
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), mdx()]
});
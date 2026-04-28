import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: './ella_ai',
  },
  plugins: [react(), cloudflare()],
});
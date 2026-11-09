import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ztword.github.io',
  base: '/one-more-token/',
  output: 'static',
  build: {
    format: 'directory',
  },
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});

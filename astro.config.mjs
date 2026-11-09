import { defineConfig } from 'astro/config';

export default defineConfig({
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

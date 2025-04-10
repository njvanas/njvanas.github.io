import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Base path for GitHub Pages
  base: '/njvanas.github.io/', // Ensure this matches your GitHub Pages repo

  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for production build
    assetsDir: 'assets', // Where static assets like images go
    rollupOptions: {
      external: ['react-router-dom'], // Externalize react-router-dom
    },
  },
});

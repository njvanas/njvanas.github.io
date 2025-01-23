import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import react from '@vitejs/plugin-react';

export default defineConfig({ // Set the base path to match the GitHub repository name
  base: process.env.NODE_ENV === 'github' ? '/njvanas.github.io/' : '/', // Dynamic base path
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure output directory is named 'dist'
    assetsDir: 'assets', // Specify directory for assets
    rollupOptions: {
      external: ['react-router-dom', 'react-icons'],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

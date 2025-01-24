import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Set the base path to match the GitHub repository name
  base: '/njvanas.github.io/', // Replace with your GitHub repository name, if necessary
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom'], // Specify external dependencies
    },
    outDir: 'dist', // Ensure output directory is named 'dist'
    assetsDir: 'assets', // Specify directory for assets
  },
});

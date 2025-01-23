import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ // Set the base path to match the GitHub repository name
  base: '/', // Replace <repository-name> with your actual repository name
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

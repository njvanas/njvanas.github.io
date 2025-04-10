import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Set the base path to match the GitHub repository name
  base: '/njvanas.github.io/', // Replace with your actual repository name if different

  plugins: [react()], // React plugin for handling JSX and React files

  build: {
    outDir: 'dist', // Ensure output directory is named 'dist' for GitHub Pages
    assetsDir: 'assets', // Specify directory for assets

    // Add any necessary rollup options, such as externalizing react-router-dom
    rollupOptions: {
      external: ['react-router-dom'], // Externalize react-router-dom
    },
  },

  server: {
    // Optional: Set up server configuration for local development
    port: 3000, // Port for local development server (adjust as needed)
  },
});

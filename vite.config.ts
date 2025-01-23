import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Set the base path dynamically based on the environment
  base: '/njvanas.github.io/',
  plugins: [
	react(), 
	mkcert() // Keep any other plugins you might need
	],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      external: [], // Do not exclude any dependencies from bundling
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

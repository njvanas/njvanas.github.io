import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // For a root-level GitHub Pages deployment
  plugins: [react()],
})

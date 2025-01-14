import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Base is root since the repo matches your GitHub Pages domain
  plugins: [react()],
})

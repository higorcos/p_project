import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  base: '/p_project/',
  plugins: [
    react(),
    ViteImageOptimizer({
      jpeg: { quality: 78 },
      jpg:  { quality: 78 },
      png:  { quality: 78 },
    }),
  ],
  assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.webp'],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/p_project/',
  plugins: [react()],
  assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.webp'],
})

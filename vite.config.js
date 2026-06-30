import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  base: '/p_project/',
  plugins: [
    react(),
    /*
    ViteImageOptimizer({
      jpeg: { quality: 78 },
      jpg:  { quality: 78 },
      png:  { quality: 78 },
      webp: { quality: 78, method: 6 },
    }),*/

    ViteImageOptimizer({
  jpeg: { quality: 65 }, // 65 é excelente para fotos de fundo e paisagens
  jpg:  { quality: 65 },
  png:  { quality: 75 }, // PNGs geralmente guardam prints ou logos; evite baixar de 70/75 para não borrar textos
  webp: { quality: 65, method: 6 }, // WebP é muito eficiente, 65 mantém ótima fidelidade
})
  ],
 
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separa as bibliotecas da pasta node_modules em chunks individuais de forma segura
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})

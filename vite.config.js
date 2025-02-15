import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Your App Name',
        short_name: 'ShortName',
        description: 'Your app description',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/src/assets/imgs/favicon.ico',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/src/assets/imgs/favicon.ico',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/src/assets/imgs/favicon.ico',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
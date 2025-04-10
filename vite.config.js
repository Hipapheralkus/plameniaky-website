import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import { resolve } from 'path'

// Ensure robots.txt and sitemap.xml are copied to dist during build
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-static-files',
      buildEnd() {
        // This is not needed for development, only for production build
        if (process.env.NODE_ENV === 'production') {
          // This will be executed during the build
          console.log('Copying static files to build output...')
        }
      }
    }
  ],
  // Handle public directory properly
  publicDir: 'public',
})
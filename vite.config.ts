import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths so the build works from any folder or sub-path.
  base: './',
  plugins: [react()],
})

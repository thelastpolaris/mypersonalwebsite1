import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: Replace 'artem-fedoskin-portfolio' with your GitHub repository name.
  base: '/mypersonalwebsite1/', 
  plugins: [react()],
})

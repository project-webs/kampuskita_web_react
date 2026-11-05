import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://project-webs.github.io/kampuskita_web_react/
// base di bawah ini supaya path asset jadi /kampuskita_web_react/assets/...
export default defineConfig({
  plugins: [react()],
  base: '/kampuskita_web_react/',
})

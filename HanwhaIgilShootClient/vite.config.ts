import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/HanWhaEaglesClient/', // GitHub Pages에서 repository 이름이 base path가 됨
})

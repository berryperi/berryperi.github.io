import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 저장소 이름이 <계정>.github.io 라서 base 는 '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 80,
    proxy: {
      '/api': 'http://localhost:8080' //'http://217.160.66.229:8080' //http://172.23.103.35:8080/ //http://localhost:8080
    }
  },
  plugins: [vue()],
})

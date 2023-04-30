import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@examples': path.resolve(__dirname, './examples'),
    }
  },
  build: {
    outDir: './dist-site'
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: '/',
    https: false,
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: true,
    proxy: {
      "/api":{
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      }
    }
  },
  define: {
    global: "globalThis",
    "process.env": {},
  },
  build: {
    rollupOptions: {
      external: [
        "@safe-globalThis/safe-ethers-adapters",
        "@safe-globalThis/safe-core-sdk",
        "@safe-globalThis/safe-ethers-lib"
      ],
    },
  },
  plugins: [nodePolyfills(),react()],
})

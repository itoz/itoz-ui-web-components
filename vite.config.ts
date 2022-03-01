import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir:"static",
  build: {
    outDir:'dist',
    lib: {
      entry: 'src/itoz-ui-web-components.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})

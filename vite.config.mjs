import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), tailwindcss(), netlify()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
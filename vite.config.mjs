import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vercel from 'vite-plugin-vercel'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), tailwindcss(), vercel()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
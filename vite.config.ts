import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    clearScreen: false,
    root: 'src',
    build: {
        outDir: '../dist',
        minify: 'terser',
        target: 'esnext'
    },
    server: {
        fs: {
            strict: false
        }
    },
    plugins: [
        svelte(),
        createHtmlPlugin({
            minify: true
        }),
    ]
})

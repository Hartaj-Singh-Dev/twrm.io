/*
 *  Vite.js bundler configuration for twrm.io project.
 *  Created On 14 March 2022
 */

import { defineConfig } from 'vite'
import postcss from './postcss.config.js'
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
    css: {
        postcss,
    },
    plugins: [
        svelte(),
        createHtmlPlugin({
            minify: true
        }),
    ]
})

/*
 *  TailwindCSS config for twrm.io project.
 *  Created On 14 March 2022
 */

const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{svelte,html,svg}'],
    theme: {
        colors: {
            white: '#FFFFFF',
            black: '#000000',
            slate: colors.slate,
        },
        container: {
            center: true
        }
    },
    plugins: [],
}

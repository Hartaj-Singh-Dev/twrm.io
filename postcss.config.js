/*
 *  PostCSS config for twrm.io project.
 *  Created On 14 March 2022
 */

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import twConfig from './tailwind.config.cjs'

export default {
    plugins: [
        tailwindcss(twConfig),
        autoprefixer()
    ]
}

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import twConfig from './tailwind.config.cjs'

export default {
    plugins: [
        tailwindcss(twConfig),
        autoprefixer()
    ]
}

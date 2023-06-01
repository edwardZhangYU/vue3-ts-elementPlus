import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map((i) => i + startAt)
}

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  },
  darkMode: 'class',
  plugins: [formsPlugin]
})

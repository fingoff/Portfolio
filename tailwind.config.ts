import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a192f',
        surface: '#112240',
        'surface-light': '#1d3461',
        border: '#233554',
        muted: '#8892b0',
        text: '#ccd6f6',
        heading: '#e6f1ff',
        accent: '#F59E0B',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config

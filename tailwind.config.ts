import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: { 
        'light-blue': '#7289DA',
        'dark_gray': '#424549',
        'charcoal_gray': '#36393E',
        'gunmetal_gray': '#282B30',
        'jet_black': '#1E2124',
      }
    },
  },
  plugins: [],
}
export default config

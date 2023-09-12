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
        'purple': '#AD1FEA',
        'blue': '#4661E6',
        'white': '#FFFFFF',
        'gray-1': '#F7F8FD',
        'gray-2': '#F2F4FF',
        'gray-3': '#647196',
        'dark-1': '#3A4374',
        'dark-2': '#4661E6',
        'orange': '#F49F85',
        'cyan': '#62BCFA'
      },
    },
  },
  plugins: [],
}
export default config

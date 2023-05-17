/** @type {import('tailwindcss').Config} */
module.exports = {
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
      backgroundColor: {
        '--main-color': '#FDE5B1',
        '--sub-color': '#FCFAF4',
        '--cream-color': '#F8F6F4',
        '--bg-brand-1': '#FF6741',
        '--bg-brand-2': '#E95E3B',
        '--bg-brand-3': '#FA9A82',
      },
      textColor: {
        '--main-color': '#FDE5B1',
        '--sub-color': '#FCFAF4',
        '--cream-color': '#F8F6F4',
        '--text-brand-1': '#FF6741',
        '--text-brand-2': '#E95E3B',
        '--text-brand-3': '#FA9A82',
      },
    },
  },
  plugins: [],
};

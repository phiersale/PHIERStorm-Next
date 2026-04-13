/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Typography tokens
      fontSize: {
        'h1': ['56px', { lineHeight: '1.1', fontWeight: '900' }],
        'h2': ['36px', { lineHeight: '1.2', fontWeight: '800' }],
        'h3': ['26px', { lineHeight: '1.3', fontWeight: '700' }],
        'body': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      // Spacing system (8pt grid)
      spacing: {
        '0': '0px',
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '48px',
        '6': '64px',
        '7': '80px',
        '8': '96px',
      },
      // Container max-width
      maxWidth: {
        'container': '1040px',
        'hero': '1200px',
        'diagram': '1100px',
        'inline': '900px',
      },
      // Colors (existing)
      colors: {
        'bg-deep': '#080d1a',
        'bg-dark': '#0d1525',
        'bg-card': '#111d35',
        'green': '#3ddc84',
        'red': '#e63946',
        'gold': '#ffd60a',
        'text-bright': '#f0f4ff',
        'text-body': '#b8c8e8',
        'text-dim': '#7a94b8',
      },
      fontFamily: {
        'display': ['Bebas Neue', 'sans-serif'],
        'condensed': ['Barlow Condensed', 'sans-serif'],
        'body': ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

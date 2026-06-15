import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        urucum: { DEFAULT: '#C0392B', dark: '#922B21', light: '#E74C3C' },
        genipapo: { DEFAULT: '#1A237E', dark: '#0D1457', light: '#283593' },
        terra: {
          50:  '#F5E6C8',
          100: '#E8D5A3',
          200: '#D4A843',
          300: '#C49A6C',
          400: '#8D6E63',
          500: '#6B4226',
          600: '#4E342E',
          700: '#3E2723',
          900: '#1A0F0A',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        serif:   ['Lora', ...defaultTheme.fontFamily.serif],
        sans:    ['Inter', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'fade-in':  'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(32px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}

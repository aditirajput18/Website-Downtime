/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#14B8A6',
          50: '#E7F9F7',
          100: '#D0F3EF',
          200: '#A2E7DF',
          300: '#73DCD0',
          400: '#45D0C0',
          500: '#14B8A6',
          600: '#119385',
          700: '#0D6E64',
          800: '#094A43',
          900: '#042521',
        },
        'secondary': {
          DEFAULT: '#3B82F6',
          50: '#EBF3FE',
          100: '#D7E6FD',
          200: '#AFCDFB',
          300: '#87B4F9',
          400: '#5F9BF7',
          500: '#3B82F6',
          600: '#0B61EE',
          700: '#084BBC',
          800: '#06368A',
          900: '#042158',
        },
        'accent': {
          DEFAULT: '#EF4444',
          50: '#FDECEC',
          100: '#FCD9D9',
          200: '#F9B4B4',
          300: '#F68E8E',
          400: '#F26969',
          500: '#EF4444',
          600: '#E71414',
          700: '#B30F0F',
          800: '#7F0B0B',
          900: '#4B0707',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.5' }],
        lg: ['1.125rem', { lineHeight: '1.5' }],
        xl: ['1.25rem', { lineHeight: '1.2' }],
        '2xl': ['1.5rem', { lineHeight: '1.2' }],
        '3xl': ['1.875rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
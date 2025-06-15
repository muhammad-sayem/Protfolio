// @ts-ignore - Ignore TS error in pure JS project
import daisyui from 'daisyui'; // Import DaisyUI

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}', 
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], 
  daisyui: {
    themes: ['light'], 
  },
}

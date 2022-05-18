import { resolve } from 'path';
import { defineWindiSetup } from '@slidev/types';

export default defineWindiSetup(() => ({
  extract: {
    include: [resolve(__dirname, '../**/*.{vue,ts}')],
  },
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-[#2F88F0] text-[#fff] dark:(bg-[#27303E] text-[#fff])',
  },
  theme: {
    textColor: {
      primary: '#2F88F0',
      white: '#fff',
      secondary: '#d6eeff',
    },
    backgroundColor: {
      primary: '#2F88F0',
      white: '#fff',
    },
    extend: {
      animation: {
        spin1: 'spin1 60s linear infinite',
        spin2: 'spin2 60s linear infinite',
        spin3: 'spin3 240s linear infinite',
        spin4: 'spin4 120s linear infinite',
      },
      keyframes: {
        spin1: {
          '0%': { transform: 'rotate(20deg)' },
          '100%': { transform: 'rotate(-340deg)' },
        },
        spin2: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spin3: {
          '0%': { transform: 'rotate(40deg)' },
          '100%': { transform: 'rotate(400deg)' },
        },
        spin4: {
          '0%': { transform: 'rotate(-40deg)' },
          '100%': { transform: 'rotate(-400deg)' },
        },
      },
    },
  },
}));

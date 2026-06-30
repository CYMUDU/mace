import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          primary: '#00E5FF',
          secondary: '#00A3FF',
          danger: '#FF3D3D',
          success: '#00FF88',
          warning: '#FFB800',
          background: '#04070D',
          panels: '#0B111A',
          borders: '#12202D',
          text: '#E6F7FF',
          muted: '#7FA8C7',
          dark: '#030507',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(0, 229, 255, 0.3)',
        'glow-secondary': '0 0 20px rgba(0, 163, 255, 0.3)',
        'glow-danger': '0 0 20px rgba(255, 61, 61, 0.3)',
        'glow-success': '0 0 20px rgba(0, 255, 136, 0.3)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin-reverse 30s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'radar-sweep': 'radar-sweep 4s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'spin-reverse': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'radar-sweep': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #00E5FF 0%, #00A3FF 100%)',
        'gradient-danger': 'linear-gradient(135deg, #FF3D3D 0%, #FF6B6B 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config

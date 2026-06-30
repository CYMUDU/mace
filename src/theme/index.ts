export const COLORS = {
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
} as const

export const THEME = {
  colors: COLORS,
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.2)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.3)',
    'glow-primary': `0 0 20px ${COLORS.primary}40`,
    'glow-secondary': `0 0 20px ${COLORS.secondary}40`,
    'glow-danger': `0 0 20px ${COLORS.danger}40`,
  },
} as const

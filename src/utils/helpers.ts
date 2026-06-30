export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const formatNumber = (num: number, decimals = 2): string => {
  return num.toFixed(decimals)
}

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', { hour12: false })
}

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
}

export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max)
}

export const randomInRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min
}

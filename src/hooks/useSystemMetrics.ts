import { useCallback } from 'react'

export const useSystemMetrics = () => {
  const generateRandomMetrics = useCallback(() => {
    return {
      cpu: Math.floor(Math.random() * 100),
      ram: Math.floor(Math.random() * 100),
      network: Math.floor(Math.random() * 20),
      battery: Math.floor(Math.random() * 100),
    }
  }, [])

  return { generateRandomMetrics }
}

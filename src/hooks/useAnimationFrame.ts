import { useEffect, useRef } from 'react'

export const useAnimationFrame = (callback: (time: number) => void) => {
  const animationIdRef = useRef<number>()

  useEffect(() => {
    const animate = (time: number) => {
      callback(time)
      animationIdRef.current = requestAnimationFrame(animate)
    }

    animationIdRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [callback])
}

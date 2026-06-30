import { useCallback, useState, useEffect } from 'react'

interface UseLocalStorageOptions {
  serialize?: (value: unknown) => string
  deserialize?: (value: string) => unknown
}

export const useLocalStorage = <T,>(
  key: string,
  initialValue: T,
  options: UseLocalStorageOptions = {}
) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null
      if (item) {
        return options.deserialize ? (options.deserialize(item) as T) : JSON.parse(item)
      }
      return initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)
        if (typeof window !== 'undefined') {
          const serialized = options.serialize
            ? options.serialize(valueToStore)
            : JSON.stringify(valueToStore)
          window.localStorage.setItem(key, serialized)
        }
      } catch {
        console.error('localStorage error:', key)
      }
    },
    [key, storedValue, options]
  )

  return [storedValue, setValue] as const
}

export const useAsync = <T, E = unknown>(
  asyncFunction: () => Promise<T>,
  immediate = true
) => {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
  const [value, setValue] = useState<T | null>(null)
  const [error, setError] = useState<E | null>(null)

  const execute = useCallback(async () => {
    setStatus('pending')
    setValue(null)
    setError(null)
    try {
      const response = await asyncFunction()
      setValue(response)
      setStatus('success')
      return response
    } catch (error) {
      setError(error as E)
      setStatus('error')
    }
  }, [asyncFunction])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return { execute, status, value, error }
}

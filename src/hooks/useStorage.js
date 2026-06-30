import { useCallback, useState, useEffect } from 'react';
export const useLocalStorage = (key, initialValue, options = {}) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
            if (item) {
                return options.deserialize ? options.deserialize(item) : JSON.parse(item);
            }
            return initialValue;
        }
        catch {
            return initialValue;
        }
    });
    const setValue = useCallback((value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                const serialized = options.serialize
                    ? options.serialize(valueToStore)
                    : JSON.stringify(valueToStore);
                window.localStorage.setItem(key, serialized);
            }
        }
        catch {
            console.error('localStorage error:', key);
        }
    }, [key, storedValue, options]);
    return [storedValue, setValue];
};
export const useAsync = (asyncFunction, immediate = true) => {
    const [status, setStatus] = useState('idle');
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);
    const execute = useCallback(async () => {
        setStatus('pending');
        setValue(null);
        setError(null);
        try {
            const response = await asyncFunction();
            setValue(response);
            setStatus('success');
            return response;
        }
        catch (error) {
            setError(error);
            setStatus('error');
        }
    }, [asyncFunction]);
    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);
    return { execute, status, value, error };
};

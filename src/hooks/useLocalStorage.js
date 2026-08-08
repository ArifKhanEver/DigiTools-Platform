import { useState, useEffect, useCallback } from 'react';

/**
 * useLocalStorage
 * Syncs state to localStorage. Falls back gracefully if storage is unavailable.
 *
 * @param {string} key - localStorage key
 * @param {any} initialValue - default value if key doesn't exist
 * @returns {[any, Function, Function]} [storedValue, setValue, removeValue]
 */
const useLocalStorage = (key, initialValue) => {
    const readValue = useCallback(() => {
        try {
            if (typeof window === 'undefined') return initialValue;
            const item = window.localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        }
    }, [key, initialValue]);

    const [storedValue, setStoredValue] = useState(readValue);

    const setValue = useCallback((value) => {
        try {
            const newValue = value instanceof Function ? value(storedValue) : value;
            window.localStorage.setItem(key, JSON.stringify(newValue));
            setStoredValue(newValue);
            window.dispatchEvent(new Event('local-storage'));
        } catch (err) {
            console.warn(`useLocalStorage: Error setting key "${key}":`, err);
        }
    }, [key, storedValue]);

    const removeValue = useCallback(() => {
        try {
            window.localStorage.removeItem(key);
            setStoredValue(initialValue);
        } catch (err) {
            console.warn(`useLocalStorage: Error removing key "${key}":`, err);
        }
    }, [key, initialValue]);

    // Sync across tabs
    useEffect(() => {
        const handleStorageChange = () => setStoredValue(readValue());
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('local-storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('local-storage', handleStorageChange);
        };
    }, [readValue]);

    return [storedValue, setValue, removeValue];
};

export default useLocalStorage;

import { useState, useEffect } from 'react';

/**
 * useDebounce
 * Delays updating the returned value until after `delay` ms of no changes.
 * Useful for search inputs to reduce unnecessary re-renders or API calls.
 *
 * @param {any} value - The value to debounce
 * @param {number} delay - Delay in milliseconds (default 300)
 * @returns {any} The debounced value
 */
const useDebounce = (value, delay = 300) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cancel the timeout if the value or delay changes
        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;

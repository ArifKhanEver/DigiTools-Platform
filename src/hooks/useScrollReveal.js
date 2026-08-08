import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal
 * Watches an element and returns `revealed: true` when it enters the viewport.
 *
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - 0–1, default 0.15
 * @param {string} options.rootMargin - CSS margin, default '0px'
 * @returns {{ ref: React.RefObject, revealed: boolean }}
 */
const useScrollReveal = ({ threshold = 0.15, rootMargin = '0px' } = {}) => {
    const ref = useRef(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setRevealed(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin }
        );

        const el = ref.current;
        if (el) observer.observe(el);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return { ref, revealed };
};

export default useScrollReveal;

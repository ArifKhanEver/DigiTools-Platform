import React, { useState, useEffect } from 'react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            title="Scroll back to top"
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20 cursor-pointer group"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
};

export default BackToTop;

// Code styling and structural review completed.

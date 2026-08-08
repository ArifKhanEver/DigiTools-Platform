import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem('cookiesAccepted');
        if (!accepted) {
            const timer = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem('cookiesAccepted', 'false');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            role="dialog"
            aria-label="Cookie consent"
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50 bg-gray-900 text-white rounded-2xl shadow-2xl p-5 border border-white/10 slide-up"
        >
            <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">🍪</span>
                <div>
                    <p className="font-bold text-sm mb-1">We use cookies</p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                        We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept", you consent to our use of cookies.
                    </p>
                </div>
            </div>
            <div className="flex gap-2">
                <button
                    onClick={accept}
                    className="flex-1 py-2 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                    Accept All
                </button>
                <button
                    onClick={decline}
                    className="flex-1 py-2 rounded-full border border-white/20 text-gray-300 text-xs font-semibold hover:border-white/50 hover:text-white transition-colors"
                >
                    Decline
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;

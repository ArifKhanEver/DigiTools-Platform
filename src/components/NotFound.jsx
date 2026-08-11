import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
            <div className="relative mb-8">
                <span className="text-[120px] md:text-[180px] font-black text-gray-100 leading-none select-none">
                    404
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4F39F6] to-[#9514FA] flex items-center justify-center shadow-xl">
                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Page Not Found
            </h1>
            <p className="text-gray-500 text-base max-w-sm mb-8 leading-relaxed">
                The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <a
                href="/"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-md"
            >
                Back to Home
            </a>
        </div>
    );
};

export default NotFound;

// Code styling and structural review completed.

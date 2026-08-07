import React from 'react';

const Counter = () => {
    const stats = [
        {
            value: "50K+",
            label: "Active Users",
            subtext: "Worldwide creators & devs",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            value: "200+",
            label: "Premium Tools",
            subtext: "Curated AI & design assets",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            value: "4.9/5",
            label: "Customer Rating",
            subtext: "Based on 12,000+ reviews",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-amber-300 fill-amber-300" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            )
        }
    ];

    return (
        <section aria-label="Platform Statistics" className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12 md:py-16 text-white shadow-inner relative overflow-hidden'>
            <div className='max-w-[90%] md:max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/20'>
                {stats.map((stat, idx) => (
                    <div key={idx} className='text-center px-6 pt-4 sm:pt-0 flex flex-col items-center justify-center group transition-all duration-300 hover:scale-105 cursor-default'>
                        <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-xs flex items-center justify-center mb-3 group-hover:bg-white/25 group-hover:shadow-lg transition-all duration-300">
                            {stat.icon}
                        </div>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-black mb-1 tracking-tight text-white group-hover:text-purple-100 transition-colors'>
                            {stat.value}
                        </h2>
                        <p className='text-white text-base md:text-lg font-bold'>
                            {stat.label}
                        </p>
                        <p className='text-purple-100 text-xs md:text-sm font-medium mt-0.5 opacity-90 group-hover:opacity-100 transition-opacity'>
                            {stat.subtext}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Counter;
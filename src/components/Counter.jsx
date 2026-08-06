import React from 'react';

const Counter = () => {
    const stats = [
        { value: "50K+", label: "Active Users" },
        { value: "200+", label: "Premium Tools" },
        { value: "4.9/5", label: "Customer Rating" }
    ];

    return (
        <section className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12 md:py-16 text-white shadow-inner'>
            <div className='max-w-[90%] md:max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/20'>
                {stats.map((stat, idx) => (
                    <div key={idx} className='text-center px-4 pt-4 sm:pt-0'>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-black mb-2 tracking-tight'>
                            {stat.value}
                        </h2>
                        <p className='text-purple-100 text-sm md:text-lg font-medium'>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Counter;
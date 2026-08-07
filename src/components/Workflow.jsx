import React from 'react';

const Workflow = () => {
    return (
        <section id="workflow" className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] scroll-mt-20 relative overflow-hidden'>
            <div className='max-w-[90%] md:max-w-[1200px] mx-auto py-14 md:py-[100px] text-white text-center relative z-10'>
                <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs text-purple-100 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                    🚀 Level Up Today
                </div>
                <h2 className='text-3xl md:text-5xl font-extrabold mb-4 tracking-tight'>
                    Ready to Transform Your Digital Workflow?
                </h2>
                <p className='mb-8 max-w-[580px] mx-auto text-purple-100 text-base md:text-lg leading-relaxed'>
                    Join thousands of professionals, developers, and creators who are already using DigiTools to build, ship, and scale faster.
                </p>

                <div className='flex flex-wrap justify-center gap-4 mb-8'>
                    <a
                        href="#products"
                        className="btn bg-white hover:bg-gray-100 text-[#4F39F6] font-bold rounded-full px-8 border-none shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                    >
                        Explore Products
                    </a>
                    <a
                        href="#pricing"
                        className="btn btn-outline text-white hover:bg-white hover:text-[#4F39F6] rounded-full px-8 border-white hover:scale-105 active:scale-95 transition-all"
                    >
                        View Pricing
                    </a>
                </div>

                <div className='flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm text-purple-100 font-medium'>
                    <div className="flex items-center gap-1.5">
                        <span className="text-emerald-300 font-bold">✓</span>
                        <span>14-day free trial</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-emerald-300 font-bold">✓</span>
                        <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-emerald-300 font-bold">✓</span>
                        <span>Cancel anytime</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
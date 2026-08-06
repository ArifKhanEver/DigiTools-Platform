import React from 'react';

const Workflow = () => {
    return (
        <section id="workflow" className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] scroll-mt-20'>
            <div className='max-w-[90%] md:max-w-[1200px] mx-auto py-14 md:py-[100px] text-white text-center'>
                <h2 className='text-3xl md:text-5xl font-extrabold mb-4 tracking-tight'>
                    Ready to Transform Your Workflow?
                </h2>
                <p className='mb-8 max-w-[550px] mx-auto text-purple-100 text-base md:text-lg leading-relaxed'>
                    Join thousands of professionals and creators who are already using DigiTools to work smarter and ship faster.
                </p>

                <div className='flex flex-wrap justify-center gap-4 mb-6'>
                    <a
                        href="#products"
                        className="btn bg-white hover:bg-gray-100 text-[#4F39F6] font-bold rounded-full px-8 border-none shadow-lg hover:shadow-xl transition-all"
                    >
                        Explore Products
                    </a>
                    <a
                        href="#pricing"
                        className="btn btn-outline text-white hover:bg-white hover:text-[#4F39F6] rounded-full px-8 border-white transition-all"
                    >
                        View Pricing
                    </a>
                </div>
                <p className='text-sm text-purple-200'>
                    ✓ 14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </section>
    );
};

export default Workflow;
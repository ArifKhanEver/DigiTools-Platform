import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='max-w-[90%] md:max-w-[1200px] mx-auto py-14 md:py-[120px] text-white'>
                <h2 className='text-3xl md:text-5xl font-extrabold text-center mb-4'>
                    Ready to Transform Your Workflow?
                </h2>
                <p className='text-center mb-10 max-w-[500px] mx-auto text-[#ffffffc9]'>
                    Join thousands of professionals who are already using Digitools to work smarter. <br></br>Start your free trial today.
                </p>

                <div className='flex justify-center gap-4 mb-4'>
                    <button className="btn rounded-full">
                        Explore Products
                    </button>
                    <button className="btn btn-outline rounded-full">
                        View Pricing
                    </button>
                </div>
                <p className='text-center text-[#ffffffc9]'>
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>
            
        </div>
    );
};

export default Workflow;
import React from 'react';
import userIcon from '../assets/user.png'
import packageImg from '../assets/package.png'
import rocket from '../assets/rocket.png'

const Steps = () => {
    return (
        <div className='bg-[#F1f1f1]'>
            <div className='max-w-[1200px] mx-auto py-[120px]'>
                <h2 className='text-5xl font-extrabold text-center mb-4'>
                    Get Started in 3 Steps
                </h2>
                <p className='text-center mb-10'>
                    Start using premium digital tools in minutes, not hours.
                </p>
                <div className="steps flex flex-col md:flex-row gap-7">
                    <div className='p-6 flex-1 bg-white rounded-xl text-right'>
                        <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full inline-flex items-center justify-center w-9 h-9'>01</span>
                        <img className='bg-[#E1E7FF] rounded-full p-4 block mx-auto' src={userIcon} alt="User Icon" />
                        <h5 className='text-2xl font-bold py-4 text-center'>Create Account</h5>
                        <p className='text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='p-6 flex-1 bg-white rounded-xl text-right'>
                        <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full inline-flex items-center justify-center w-9 h-9'>02</span>
                        <img className='bg-[#E1E7FF] rounded-full p-4 block mx-auto' src={packageImg} alt="Package Icon" />
                        <h5 className='text-2xl font-bold py-4 text-center'>Choose Products</h5>
                        <p className='text-center'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='p-6 flex-1 bg-white rounded-xl text-right'>
                        <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full inline-flex items-center justify-center w-9 h-9'>03</span>
                        <img className='bg-[#E1E7FF] rounded-full p-4 block mx-auto' src={rocket} alt="rocket Icon" />
                        <h5 className='text-2xl font-bold py-4 text-center'>Start Creating</h5>
                        <p className='text-center'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;
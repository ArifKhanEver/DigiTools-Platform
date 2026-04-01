import React from 'react';

const Counter = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-[60px]'>
            <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center items-center'>
                <div className='px-20 text-center'>
                    <h2 className='text-[60px] font-extrabold mb-4 text-white leading-9'>50K+</h2>
                    <p className='text-gray-200 text-[24px] font-medium'>Active Users</p>
                </div>
                <div className='px-20 text-center border-l-2 border-r-2 border-gray-400'>
                    <h2 className='text-[60px] font-extrabold mb-4 text-white leading-9'>200+</h2>
                    <p className='text-gray-200 text-[24px] font-medium'>Premium Tools</p>
                </div>
                <div className='px-20 text-center'>
                    <h2 className='text-[60px] font-extrabold mb-4 text-white leading-9'>4.9</h2>
                    <p className='text-gray-200 text-[24px] font-medium'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;
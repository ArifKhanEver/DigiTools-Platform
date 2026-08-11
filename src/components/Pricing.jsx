import React from 'react';
import { toast } from 'react-toastify';

const Pricing = () => {
    const handleSelectPlan = (planName) => {
        toast.success(`You selected the ${planName} plan! Redirecting to setup...`);
    };

    return (
        <section id="pricing" className='bg-gray-50/50'>
            <div className='max-w-[90%] md:max-w-[1200px] mx-auto py-14 md:py-[100px]'>
                <h2 className='text-3xl md:text-5xl font-extrabold text-center mb-4'>
                    Simple, Transparent Pricing
                </h2>
                <p className='text-center mb-10 max-w-[500px] mx-auto text-gray-600'>
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>

                <div className='flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto'>

                    {/* Starter Card */}
                    <div className="card rounded-2xl w-full max-w-sm mx-auto lg:max-w-none lg:w-1/3 bg-white shadow-md border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="card-body flex flex-col justify-between p-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Starter</h2>
                                <p className="text-gray-500 mt-1">Perfect for getting started</p>
                                <div className="text-xl mt-6">
                                    <span className='text-[42px] font-extrabold text-gray-900'>$0</span>
                                    <span className='text-gray-500 text-base'> /month</span>
                                </div>
                            </div>
                            <ul className="mt-6 flex flex-col gap-3 text-[15px] text-gray-700">
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to 10 free tools</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                    <span>Basic templates</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                    <span>Community support</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                    <span>1 project per month</span>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <button
                                    onClick={() => handleSelectPlan('Starter')}
                                    className="btn btn-block bg-purple-50 hover:bg-purple-100 text-[#4F39F6] border border-purple-200/80 font-bold rounded-full transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-2xs"
                                >
                                    Get Started Free
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Pro Card (Highlighted) */}
                    <div className="card rounded-2xl w-full max-w-sm mx-auto lg:max-w-none lg:w-1/3 shadow-xl bg-linear-to-b from-[#4F39F6] to-[#9514FA] text-white relative transform lg:-translate-y-2 hover:scale-[1.03] transition-all duration-300">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <span className="badge bg-amber-300 text-gray-900 font-extrabold px-4 py-3 shadow-lg rounded-full text-xs uppercase tracking-wider border-none">
                                ★ Most Popular
                            </span>
                        </div>
                        <div className="card-body flex flex-col justify-between p-8 pt-10">
                            <div>
                                <h2 className="text-3xl font-bold">Pro</h2>
                                <p className="text-purple-100 mt-1">Best for professionals</p>
                                <div className="text-xl mt-6">
                                    <span className='text-[42px] font-extrabold'>$29</span>
                                    <span className='text-purple-100 text-base'> /month</span>
                                </div>
                            </div>
                            <ul className="mt-6 flex flex-col gap-3 text-[15px]">
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to all premium tools</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited templates</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                    <span>Priority support</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited projects</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                    <span>Cloud sync</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                    <span>Advanced analytics</span>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <button
                                    onClick={() => handleSelectPlan('Pro')}
                                    className="btn btn-block bg-white hover:bg-gray-100 text-[#4F39F6] font-extrabold rounded-full border-none shadow-md hover:shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
                                >
                                    Start Pro Trial
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Enterprise Card */}
                    <div className="card rounded-2xl w-full max-w-sm mx-auto lg:max-w-none lg:w-1/3 bg-white shadow-md border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="card-body flex flex-col justify-between p-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Enterprise</h2>
                                <p className="text-gray-500 mt-1">For teams and businesses</p>
                                <div className="text-xl mt-6">
                                    <span className='text-[42px] font-extrabold text-gray-900'>$99</span>
                                    <span className='text-gray-500 text-base'> /month</span>
                                </div>
                            </div>
                            <ul className="mt-6 flex flex-col gap-3 text-[15px] text-gray-700">
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                    <span>Everything in Pro</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                    <span>Team collaboration</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom integrations</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                    <span>Dedicated support</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                    <span>SLA guarantee</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom branding</span>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <button
                                    onClick={() => handleSelectPlan('Enterprise')}
                                    className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-95 text-white font-bold rounded-full border-none shadow-md hover:shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
                                >
                                    Get Enterprise
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
// Code styling and structural review completed.

import React from 'react';

const Pricing = () => {
    return (
        <div>
            <div className='py-[120px] max-w-[1200px] mx-auto'>
                <h2 className='text-5xl font-extrabold text-center mb-4'>
                    Simple, Transparent Pricing
                </h2>
                <p className='text-center mb-10'>
                    Choose the plan that fits your needs. Upgrade or downgrade anytime..
                </p>

                <div className='flex flex-col md:flex-row justify-between gap-4'>

                    <div className="card rounded-2xl w-96 bg-base-100 shadow-sm">
                        <div className="card-body flex flex-col justify-between">
                            <div className="">
                            <h2 className="text-3xl font-bold">Starter</h2>
                            <p>Perfect for getting started</p>
                            <h5 className="text-xl mt-6"><span className='text-[40px] font-bold'>$0</span>/month</h5>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Community support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>1 project per month</span>
                                </li>
                            
                            </ul>
                            <div className="mt-6">
                            <button className="btn btn-primary btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">Get Started Free</button>
                            </div>
                        </div>
                    </div>

                    <div className="card rounded-2xl w-96 bg-base-100 shadow-sm bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
                        <span className="badge badge-xs bg-amber-200 mx-auto -mt-1.5 text-[14px] font-medium p-3 rounded-full">Most Popular</span>
                        <div className="card-body flex flex-col justify-between">
                            <div className="">
                                <h2 className="text-3xl font-bold">Pro</h2>
                                <p>Best for professionals</p>
                                <h5 className="text-xl mt-6"><span className='text-[40px] font-bold'>$29</span>/month</h5>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to all premium tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Priority support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited projects</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Cloud sync</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Advanced analytics</span>
                                </li>
                            
                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary btn-block bg-white text-[#4F39F6] font-medium rounded-full">Start Pro Trial</button>
                            </div>
                        </div>
                    </div>

                    <div className="card rounded-2xl w-96 bg-base-100 shadow-sm">
                        <div className="card-body flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-bold">Enterprise</h2>
                                <p>For teams and businesses</p>
                                <h5 className="text-xl mt-6"><span className='text-[40px] font-bold'>$99</span>/month</h5>
                            </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Everything in Pro</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Team collaboration</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom integrations</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Dedicated support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>SLA guarantee</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom branding</span>
                                </li>
                            
                                </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">Get Started For Free</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
import React from 'react';
import userIcon from '../assets/user.png';
import packageImg from '../assets/package.png';
import rocket from '../assets/rocket.png';

const Steps = () => {
    const stepsData = [
        {
            num: "01",
            icon: userIcon,
            title: "Create Account",
            tag: "Quick Signup",
            desc: "Sign up for free in seconds. No credit card required to get started exploring tools."
        },
        {
            num: "02",
            icon: packageImg,
            title: "Choose Products",
            tag: "Curated Catalog",
            desc: "Browse our curated catalog and select the tools that fit your creative and technical needs."
        },
        {
            num: "03",
            icon: rocket,
            title: "Start Creating",
            tag: "Instant Access",
            desc: "Download and start using your premium tools, APIs, and templates immediately."
        }
    ];

    return (
        <section id="features" className='bg-gray-50/70 scroll-mt-20'>
            <div className='max-w-[90%] md:max-w-[1200px] mx-auto py-14 md:py-[100px]'>
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-1.5 bg-purple-100 text-[#4F39F6] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
                        ⚡ Seamless Process
                    </div>
                    <h2 className='text-3xl md:text-5xl font-extrabold mb-3 text-gray-900 tracking-tight'>
                        Get Started in 3 Simple Steps
                    </h2>
                    <p className='text-gray-600 text-base md:text-lg'>
                        Start accelerating your digital product creation in minutes, not hours.
                    </p>
                </div>

                <div className="steps-container grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stepsData.map((step) => (
                        <div
                            key={step.num}
                            className='p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between relative group hover:-translate-y-1'
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className='w-16 h-16 bg-[#E1E7FF] rounded-2xl p-3.5 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#d4ddff] transition-all duration-300 shadow-xs'>
                                        <img src={step.icon} alt={step.title} className='w-8 h-8 object-contain' />
                                    </div>
                                    <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold rounded-full inline-flex items-center justify-center w-10 h-10 text-sm shadow-md'>
                                        {step.num}
                                    </span>
                                </div>

                                <div className="mb-2">
                                    <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                                        {step.tag}
                                    </span>
                                </div>
                                <h3 className='text-2xl font-bold text-gray-900 mb-3'>{step.title}</h3>
                                <p className='text-gray-600 leading-relaxed text-sm'>{step.desc}</p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-xs font-semibold text-[#4F39F6] group-hover:text-[#9514FA] transition-colors">
                                <span>Learn more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;
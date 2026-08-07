import React from 'react';
import heroImage from '../assets/banner.png';
import ai from '../assets/AiTool.png';
import playBtn from '../assets/Play.png';
import { toast } from 'react-toastify';

const Hero = () => {
    const handleWatchDemo = () => {
        toast.info("Interactive demo walkthrough coming soon! Explore tools below.");
    };

    return (
        <section id="hero" className='max-w-[90%] md:max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center py-12 md:py-[60px] gap-8'>
            <div className="text space-y-5 flex-1">
                <div className='inline-block bg-[#E1E7FF] hover:bg-purple-100 hover:border-purple-300 hover:shadow-xs px-5 py-2 rounded-full border border-purple-200/50 shadow-2xs transition-all cursor-default'>
                    <div className='flex items-center gap-2 text-sm font-semibold text-[#4F39F6]'>
                        <img src={ai} alt="AI tool icon" className='w-4 h-4' />
                        <span>New: AI-Powered Tools Available</span>
                    </div>
                </div>
                <h1 className='text-4xl md:text-[64px] lg:text-[72px] font-extrabold leading-tight tracking-tight text-gray-900'>
                    Supercharge Your Digital Workflow
                </h1>
                <p className='text-[16px] md:text-[18px] max-w-[600px] leading-[28px] md:leading-[30px] text-gray-600'>
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                </p>
                <div className='flex flex-wrap gap-4 pt-2'>
                    <a
                        href="#products"
                        className="btn btn-primary rounded-full px-8 bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none text-white hover:opacity-95 hover:scale-105 hover:shadow-lg transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                        Explore Products
                    </a>
                    <button
                        onClick={handleWatchDemo}
                        className="btn btn-outline border-[#4F39F6] text-[#4F39F6] hover:bg-[#4F39F6] hover:text-white hover:border-[#4F39F6] rounded-full px-6 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#4F39F6] group-hover:text-white transition-colors">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                        Watch Demo
                    </button>
                </div>

                {/* Trust and Social Proof Badge */}
                <div className='pt-3 flex items-center gap-3 text-xs md:text-sm text-gray-500 font-medium'>
                    <div className='flex text-amber-400'>
                        {"★★★★★"}
                    </div>
                    <span>Loved by <strong className='text-gray-800 font-bold'>10,000+</strong> designers & developers worldwide</span>
                </div>
            </div>

            <div className="image flex-1 flex justify-center md:justify-end">
                <img
                    src={heroImage}
                    alt="Digitools Platform Hero"
                    className='max-w-full h-auto drop-shadow-xl rounded-2xl transition-transform duration-500 hover:scale-[1.02]'
                />
            </div>
        </section>
    );
};

export default Hero;
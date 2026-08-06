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
                <div className='inline-block bg-[#E1E7FF] px-5 py-2 rounded-full'>
                    <div className='flex items-center gap-2 text-sm font-semibold text-[#4F39F6]'>
                        <img src={ai} alt="AI tool" className='w-4 h-4' />
                        <span>New: AI-Powered Tools Available</span>
                    </div>
                </div>
                <h1 className='text-4xl md:text-[64px] lg:text-[72px] font-extrabold leading-tight tracking-tight'>
                    Supercharge Your Digital Workflow
                </h1>
                <p className='text-[16px] md:text-[18px] max-w-[600px] leading-[28px] md:leading-[30px] text-gray-600'>
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                </p>
                <div className='flex flex-wrap gap-4 pt-2'>
                    <a href="#products" className="btn btn-primary rounded-full px-8 bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none text-white hover:opacity-90 transition-all shadow-md">
                        Explore Products
                    </a>
                    <button onClick={handleWatchDemo} className="btn btn-outline border-[#4F39F6] text-[#4F39F6] hover:bg-[#4F39F6] hover:text-white rounded-full px-6 flex items-center gap-2 transition-all">
                        <img src={playBtn} alt="Play button" className='w-4 h-4' />
                        Watch Demo
                    </button>
                </div>
            </div>
            <div className="image flex-1 flex justify-center md:justify-end">
                <img src={heroImage} alt="Digitools Platform Hero" className='max-w-full h-auto drop-shadow-lg rounded-2xl' />
            </div>
        </section>
    );
};

export default Hero;
import React from 'react';
import heroImage from '../assets/banner.png'
import ai from '../assets/AiTool.png'
import playBtn from '../assets/Play.png'

const Hero = () => {
    return (
        <div className='max-w-[90%] md:max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center items-center py-[60px]'>
            <div className="text space-y-4">
                <div className='inline-block bg-[#E1E7FF] px-5 py-2 rounded-full'>
                    <div className='flex items-center gap-1'><img src={ai} alt="Ai tool"/><span> New: AI-Powered Tools Available</span>
                    </div>
                </div>
                <h1 className='text-3xl md:text-[72px] font-extrabold'>Supercharge Your Digital Workflow</h1>
                <p className='text-[18px] max-w-[600px] leading-[30px] mb-8'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.<br></br> Explore Products</p>
                <div className='flex gap-4'>
                    <button className="btn btn-primary rounded-full">Explore Products</button>
                    <button className="btn btn-outline btn-primary rounded-full"><img src={playBtn} alt="Play button" />Watch Demo</button>
                </div>
            </div>
            <div className="image md:flex-none">
                <img src={heroImage} alt="hero image" />
            </div>
        </div>
    );
};

export default Hero;
import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const features = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        gradient: 'from-violet-500 to-purple-600',
        title: 'Lightning Fast Delivery',
        description: 'Instant access to all purchased tools and assets. No waiting, no delays — download and get to work immediately.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        gradient: 'from-blue-500 to-cyan-500',
        title: 'Secure & Trusted',
        description: 'Every tool is vetted by our expert team. Your payments are protected with bank-grade encryption and fraud prevention.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
        gradient: 'from-emerald-500 to-teal-500',
        title: 'Lifetime Updates',
        description: 'Buy once, benefit forever. All tools come with free lifetime updates so you always have the latest features and fixes.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        gradient: 'from-amber-500 to-orange-500',
        title: 'Expert Community',
        description: 'Join 50,000+ creators, developers, and designers. Share workflows, get feedback, and collaborate on projects.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        gradient: 'from-pink-500 to-rose-500',
        title: 'AI-Powered Tools',
        description: 'Harness the power of artificial intelligence. From code generation to design automation, our AI tools supercharge your workflow.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
        gradient: 'from-indigo-500 to-violet-600',
        title: 'Cloud-Ready Assets',
        description: 'All assets are optimized for cloud deployment. Seamlessly integrate with AWS, GCP, Azure, and Vercel workflows.',
    },
];

const Features = () => {
    const { ref, revealed } = useScrollReveal({ threshold: 0.1 });

    return (
        <section id="features" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
            <div className="max-w-[90%] md:max-w-[1200px] mx-auto">
                <div className="text-center mb-14">
                    <span className="inline-block bg-purple-100 text-[#4F39F6] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        Why DigiTools
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                        Everything you need to ship faster
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                        We've built the platform with creators in mind — every feature is designed to save you time and amplify your output.
                    </p>
                </div>

                <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            style={{ animationDelay: `${i * 80}ms` }}
                            className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group ${revealed ? 'slide-up' : 'opacity-0'}`}
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                                {f.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

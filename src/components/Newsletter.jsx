import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle | success | error

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setStatus('error');
            return;
        }
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 4000);
    };

    return (
        <section id="newsletter" className="py-16 md:py-24 bg-white scroll-mt-20">
            <div className="max-w-[90%] md:max-w-[700px] mx-auto text-center">
                <span className="inline-flex items-center gap-2 bg-purple-100 text-[#4F39F6] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Newsletter
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                    Stay ahead of the curve
                </h2>
                <p className="text-gray-500 text-base md:text-lg mb-8 max-w-lg mx-auto">
                    Get weekly updates on the latest tools, design trends, and productivity tips — delivered straight to your inbox. No spam, ever.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                    <input
                        type="email"
                        id="newsletter-email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="flex-1 px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-[#4F39F6] text-sm bg-gray-50 focus:bg-white transition-colors"
                        aria-label="Email address for newsletter"
                    />
                    <button
                        type="submit"
                        className="px-7 py-3 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold text-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-md"
                    >
                        Subscribe
                    </button>
                </form>

                {status === 'success' && (
                    <div className="mt-4 flex items-center justify-center gap-2 text-emerald-600 font-medium text-sm">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        You're subscribed! Check your inbox soon.
                    </div>
                )}
                {status === 'error' && (
                    <p className="mt-4 text-red-500 text-sm font-medium">Please enter a valid email address.</p>
                )}

                <p className="mt-5 text-xs text-gray-400">
                    Join <strong className="text-gray-600">10,000+</strong> subscribers. Unsubscribe anytime.
                </p>
            </div>
        </section>
    );
};

export default Newsletter;

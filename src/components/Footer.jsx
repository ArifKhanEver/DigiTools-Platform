import React, { useState } from 'react';
import logo from '../assets/DigiToolswhite.png';
import { toast } from 'react-toastify';

const Footer = () => {
    const [newsletterEmail, setNewsletterEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!newsletterEmail || !newsletterEmail.includes('@')) {
            toast.warning('Please enter a valid email address.');
            return;
        }
        toast.success('Thank you for subscribing to our newsletter!');
        setNewsletterEmail('');
    };

    const handlePolicyClick = (policy) => {
        toast.info(`${policy} document opened.`);
    };

    return (
        <footer className='bg-[#101727] text-white'>
            <div className='max-w-[90%] md:max-w-[1200px] mx-auto pt-16 md:pt-20 pb-10'>
                {/* Top Section: Brand + Navigation + Newsletter */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-700/60">
                    {/* Brand Info */}
                    <div className='lg:col-span-2 space-y-4'>
                        <a href="#hero" className="inline-block">
                            <img src={logo} alt="DigiTools" className="w-40 h-auto" />
                        </a>
                        <p className='text-gray-400 text-sm leading-relaxed max-w-sm'>
                            Premium digital tools, UI templates, and developer kits crafted for creators, builders, and modern teams worldwide.
                        </p>
                        
                        {/* Newsletter Input */}
                        <form onSubmit={handleSubscribe} className="pt-2">
                            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                                Subscribe to tool releases
                            </label>
                            <div className="flex max-w-sm gap-2">
                                <input
                                    type="email"
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="input input-sm rounded-full bg-gray-800 text-white placeholder-gray-400 border-gray-700 hover:border-purple-400 focus:border-[#4F39F6] focus:outline-none flex-1 text-xs transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-sm rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-95 text-white border-none px-5 text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
                                >
                                    Join
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Navigation Columns */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200 mb-4">Product</h4>
                        <ul className="space-y-2.5 text-sm text-gray-400">
                            <li><a href="#products" className="hover:text-purple-300 hover:translate-x-1 transition-all inline-block">All Tools</a></li>
                            <li><a href="#features" className="hover:text-purple-300 hover:translate-x-1 transition-all inline-block">Features</a></li>
                            <li><a href="#pricing" className="hover:text-purple-300 hover:translate-x-1 transition-all inline-block">Pricing Plans</a></li>
                            <li><a href="#faq" className="hover:text-purple-300 hover:translate-x-1 transition-all inline-block">FAQ</a></li>
                            <li><a href="#workflow" className="hover:text-purple-300 hover:translate-x-1 transition-all inline-block">Workflow</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200 mb-4">Company</h4>
                        <ul className="space-y-2.5 text-sm text-gray-400">
                            <li><button onClick={() => handlePolicyClick('About DigiTools')} className="hover:text-purple-300 hover:translate-x-1 transition-all text-left cursor-pointer inline-block">About Us</button></li>
                            <li><button onClick={() => handlePolicyClick('Careers')} className="hover:text-purple-300 hover:translate-x-1 transition-all text-left cursor-pointer inline-block">Careers</button></li>
                            <li><button onClick={() => handlePolicyClick('Press Kit')} className="hover:text-purple-300 hover:translate-x-1 transition-all text-left cursor-pointer inline-block">Press Kit</button></li>
                            <li><button onClick={() => handlePolicyClick('Contact Support')} className="hover:text-purple-300 hover:translate-x-1 transition-all text-left cursor-pointer inline-block">Contact</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200 mb-4">Connect</h4>
                        <div className="flex gap-3 mb-4">
                            <a
                                href="https://github.com/ArifKhanEver/DigiTools-Platform"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:scale-110 transition-all shadow-xs"
                                aria-label="DigiTools on GitHub"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#4F39F6] flex items-center justify-center text-gray-300 hover:text-white hover:scale-110 transition-all shadow-xs"
                                aria-label="DigiTools on Twitter"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#1877F2] flex items-center justify-center text-gray-300 hover:text-white hover:scale-110 transition-all shadow-xs"
                                aria-label="DigiTools on Facebook"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                        </div>
                        <p className="text-xs text-gray-400">
                            Available 24/7 for dedicated enterprise support.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar: Copyright and Legal */}
                <div className='pt-8 flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-gray-400'>
                    <p>© {new Date().getFullYear()} DigiTools Platform. All rights reserved.</p>
                    <ul className='flex flex-wrap gap-6'>
                        <li>
                            <button onClick={() => handlePolicyClick('Privacy Policy')} className="hover:text-purple-300 transition-colors cursor-pointer">
                                Privacy Policy
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handlePolicyClick('Terms of Service')} className="hover:text-purple-300 transition-colors cursor-pointer">
                                Terms of Service
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handlePolicyClick('Cookie Preferences')} className="hover:text-purple-300 transition-colors cursor-pointer">
                                Cookies
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
// Code styling and structural review completed.

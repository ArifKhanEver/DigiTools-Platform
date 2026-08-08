import React from 'react';
import ThemeToggle from './ThemeToggle';
import NavLink from './NavLink';
import cart from '../assets/shopping-cart.png';
import { toast } from 'react-toastify';

const Navbar = ({ cartCount = 0, onCartClick }) => {
    const handleLogin = () => {
        toast.info("User authentication portal will be available soon!");
    };

    const handleGetStarted = () => {
        const pricingElem = document.getElementById('pricing');
        if (pricingElem) {
            pricingElem.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
                <header className='shadow-xs sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all fade-in'>
            <div className="max-w-[1200px] mx-auto navbar py-3 px-4 md:px-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle lg:hidden mr-1"
                            aria-label="Toggle navigation menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-md dropdown-content bg-white rounded-2xl z-50 mt-3 w-56 p-3 shadow-xl border border-gray-100 font-medium space-y-1"
                        >
                            <li><a href="#hero" className="rounded-xl hover:bg-purple-50 hover:text-[#4F39F6] active:bg-purple-100 transition-colors">Home</a></li>
                            <li><a href="#products" className="rounded-xl hover:bg-purple-50 hover:text-[#4F39F6] active:bg-purple-100 transition-colors">Products</a></li>
                            <li><a href="#features" className="rounded-xl hover:bg-purple-50 hover:text-[#4F39F6] active:bg-purple-100 transition-colors">Features</a></li>
                            <li><a href="#pricing" className="rounded-xl hover:bg-purple-50 hover:text-[#4F39F6] active:bg-purple-100 transition-colors">Pricing</a></li>
                            <li><a href="#faq" className="rounded-xl hover:bg-purple-50 hover:text-[#4F39F6] active:bg-purple-100 transition-colors">FAQ</a></li>
                            <li><a href="#workflow" className="rounded-xl hover:bg-purple-50 hover:text-[#4F39F6] active:bg-purple-100 transition-colors">Workflow</a></li>
                        </ul>
                    </div>

                    <a href="#hero" className='flex items-center gap-2 hover:opacity-90 transition-opacity'>
                        <img src={logo} alt="DigiTools logo" className='w-32 md:w-44 h-auto' />
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-gray-700 gap-1 text-[15px]">
                        <li><a href="#hero" className="rounded-full px-4 py-2 hover:bg-purple-50 hover:text-[#4F39F6] active:scale-95 transition-all">Home</a></li>
                        <li><a href="#products" className="rounded-full px-4 py-2 hover:bg-purple-50 hover:text-[#4F39F6] active:scale-95 transition-all">Products</a></li>
                        <li><a href="#features" className="rounded-full px-4 py-2 hover:bg-purple-50 hover:text-[#4F39F6] active:scale-95 transition-all">Features</a></li>
                        <li><a href="#pricing" className="rounded-full px-4 py-2 hover:bg-purple-50 hover:text-[#4F39F6] active:scale-95 transition-all">Pricing</a></li>
                        <li><a href="#faq" className="rounded-full px-4 py-2 hover:bg-purple-50 hover:text-[#4F39F6] active:scale-95 transition-all">FAQ</a></li>
                        <li><a href="#workflow" className="rounded-full px-4 py-2 hover:bg-purple-50 hover:text-[#4F39F6] active:scale-95 transition-all">Workflow</a></li>
                    </ul>
                </div>

                <div className="navbar-end flex items-center gap-2 md:gap-3">
                    <button
                        onClick={onCartClick}
                        className="btn btn-ghost btn-circle relative hover:bg-purple-50 hover:text-[#4F39F6] transition-all cursor-pointer"
                        aria-label={`Shopping cart with ${cartCount} items`}
                        title="View Cart"
                    >
                        <div className="indicator">
                            <img src={cart} alt="Cart" className='w-5 h-5' />
                            {cartCount > 0 && (
                                <span className="badge badge-sm indicator-item bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-white border font-bold shadow-xs">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </button>

                    <button
                        onClick={handleLogin}
                        className="btn btn-ghost text-gray-700 font-semibold hover:bg-purple-50 hover:text-[#4F39F6] rounded-full px-4 transition-all hidden sm:inline-flex cursor-pointer"
                    >
                        Login
                    </button>

                    <button
                        onClick={handleGetStarted}
                        className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-95 hover:scale-105 active:scale-95 text-white font-semibold border-none px-5 shadow-sm hover:shadow-md transition-all cursor-pointer text-sm md:text-base"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
import React from 'react';
import logo from '../assets/DigiTools.png'
import cart from '../assets/shopping-cart.png'

const Navbar = ({cartCount}) => {
    return (
        <div className='shadow-sm sticky top-0 z-10 bg-white'>
            <div className=" max-w-[1200px] mx-auto navbar bg-base-100 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                    </div>
                    <div className='w-25 md:w-50'>
                        <a><img src={logo} alt="Digitools logo" /></a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle -mr-4 md:mr-0">
                        <div className="indicator">
                            <img src={cart} alt="cart icon" />
                            <span className="badge badge-sm indicator-item">{cartCount}</span>
                        </div>
                    </div>
                    <button className="btn btn-ghost">Login</button>
                    <button className="btn rounded-full bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
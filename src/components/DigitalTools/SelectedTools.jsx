import React from 'react';
import { toast } from 'react-toastify';

const SelectedTools = ({ selectedTools, setSelectedTools, onBrowseClick }) => {

    const handleCheckout = () => {
        if (selectedTools.length === 0) {
            toast.warning("Your cart is empty. Please add items to proceed!");
            return;
        }

        const count = selectedTools.length;
        setSelectedTools([]);
        toast.success(`🎉 Purchase complete for ${count} item${count > 1 ? 's' : ''}! Order confirmation sent.`);
    };

    const handleRemoveItem = (item) => {
        setSelectedTools(prev => prev.filter(e => e.id !== item.id));
        toast.info(`${item.name} removed from your cart.`);
    };

    const handleClearCart = () => {
        if (selectedTools.length === 0) return;
        setSelectedTools([]);
        toast.info("Cart has been cleared.");
    };

    const totalPrice = selectedTools.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className='max-w-3xl mx-auto'>
            <div className='bg-white p-6 md:p-8 shadow-lg rounded-2xl border border-gray-100 space-y-6'>
                <div className='flex justify-between items-center border-b pb-4'>
                    <div>
                        <h3 className='text-2xl font-bold text-gray-800'>Shopping Cart</h3>
                        <p className='text-sm text-gray-500'>
                            {selectedTools.length} {selectedTools.length === 1 ? 'tool' : 'tools'} in your selection
                        </p>
                    </div>
                    {selectedTools.length > 0 && (
                        <button
                            onClick={handleClearCart}
                            className="btn btn-ghost btn-sm text-red-500 hover:bg-red-50 font-medium"
                        >
                            Clear Cart
                        </button>
                    )}
                </div>

                {selectedTools.length === 0 ? (
                    <div className='py-16 text-center space-y-4'>
                        <div className="w-20 h-20 mx-auto rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <h4 className='text-xl font-bold text-gray-700'>Your Cart is Empty</h4>
                        <p className='text-gray-500 max-w-sm mx-auto text-sm'>
                            Explore our premium catalog to discover AI tools, boilerplates, and design kits.
                        </p>
                        {onBrowseClick && (
                            <button
                                onClick={onBrowseClick}
                                className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-8 mt-2 border-none shadow-md"
                            >
                                Browse Products
                            </button>
                        )}
                    </div>
                ) : (
                    <div className='space-y-3'>
                        {selectedTools.map(tool => (
                            <div
                                key={tool.id}
                                className='flex justify-between items-center bg-gray-50/80 hover:bg-gray-100/80 p-4 rounded-xl transition-all border border-gray-100'
                            >
                                <div className='flex items-center gap-4'>
                                    <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center border border-gray-200 shrink-0">
                                        <img src={tool.icon} alt={tool.name} className='w-full h-full object-contain' />
                                    </div>
                                    <div>
                                        <h5 className='text-base md:text-lg font-bold text-gray-800'>{tool.name}</h5>
                                        <p className='text-sm text-gray-500 capitalize'>{tool.period} plan</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <span className='font-bold text-lg text-gray-900'>${tool.price}</span>
                                    <button
                                        onClick={() => handleRemoveItem(tool)}
                                        className="btn btn-ghost btn-circle btn-sm text-red-500 hover:bg-red-50"
                                        title="Remove tool"
                                        aria-label={`Remove ${tool.name}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className='pt-6 border-t mt-6 space-y-4'>
                            <div className='flex justify-between items-center px-2'>
                                <span className='text-gray-600 font-medium'>Subtotal</span>
                                <span className='font-semibold text-gray-800'>${totalPrice}</span>
                            </div>
                            <div className='flex justify-between items-center px-2'>
                                <span className='text-gray-600 font-medium'>Instant Access Fee</span>
                                <span className='font-semibold text-emerald-600'>Free</span>
                            </div>
                            <div className='flex justify-between items-center px-2 pt-2 border-t text-lg'>
                                <span className='font-bold text-gray-900'>Total:</span>
                                <span className='font-extrabold text-2xl text-[#4F39F6]'>${totalPrice}</span>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 text-white font-semibold rounded-full border-none shadow-lg mt-4 cursor-pointer text-base"
                            >
                                Proceed To Checkout (${totalPrice})
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SelectedTools;
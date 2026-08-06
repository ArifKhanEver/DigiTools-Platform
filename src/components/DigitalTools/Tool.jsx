import React from 'react';
import { toast } from 'react-toastify';

const Tool = ({ tool, selectedTools, setSelectedTools }) => {
    const isAdded = selectedTools.some(item => item.id === tool.id);

    const handleAddToCart = () => {
        if (isAdded) {
            toast.warning('This item is already in your cart.');
            return;
        }

        setSelectedTools(prev => [...prev, tool]);
        toast.success(`${tool.name} added to cart!`);
    };

    const getTagColor = (tag) => {
        switch (tag) {
            case "Exclusive":
                return "bg-purple-600 text-white";
            case "Top Pick":
                return "bg-blue-500 text-white";
            case "Essential":
                return "bg-teal-600 text-white";
            case "Enterprise":
                return "bg-indigo-600 text-white";
            default:
                return "bg-amber-500 text-white";
        }
    };

    return (
        <div className="card w-full bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl border border-gray-100 flex flex-col justify-between">
            <div className="card-body p-6 flex flex-col justify-between flex-1">
                <div>
                    <div className='flex justify-between items-center mb-3'>
                        <div className='w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full p-2.5 bg-gray-50/50'>
                            <img src={tool.icon} alt={tool.name} className='w-full h-full object-contain' />
                        </div>
                        <span className={`badge rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wider border-none ${getTagColor(tool.tag)}`}>
                            {tool.tag}
                        </span>
                    </div>

                    <div className="space-y-2 mt-2">
                        <h3 className="text-xl font-bold text-gray-800">{tool.name}</h3>
                        <p className='text-gray-500 text-sm min-h-[40px] leading-relaxed'>{tool.description}</p>
                        <div className="pt-2">
                            <span className='text-3xl font-extrabold text-gray-900'>${tool.price}</span>
                            <span className='text-gray-500 text-sm font-medium'>/{tool.period}</span>
                        </div>
                    </div>

                    <div className="divider my-4"></div>

                    <ul className="flex flex-col gap-2.5 text-sm text-gray-600 mb-6">
                        {tool.features && tool.features.map((feature, ind) => (
                            <li key={ind} className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <button
                        onClick={handleAddToCart}
                        disabled={isAdded}
                        className={`btn btn-block rounded-full font-semibold transition-all duration-200 ${
                            isAdded
                                ? "bg-gray-200 text-gray-500 cursor-not-allowed border-none"
                                : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 text-white border-none shadow-md hover:shadow-lg cursor-pointer"
                        }`}
                    >
                        {isAdded ? "✓ Added to Cart" : "Buy Now"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tool;
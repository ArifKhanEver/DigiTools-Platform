import React, { use } from 'react';
import AllTools from './AllTools';
import SelectedTools from './SelectedTools';

const DigitalTools = ({ toolsData, selectedTools, setSelectedTools, activeTab = "Products", setActiveTab }) => {
    const tools = use(toolsData);

    const handleToggle = (tabName) => {
        if (setActiveTab) {
            setActiveTab(tabName);
        }
    };

    return (
        <section id="products" className='bg-white scroll-mt-20'>
            <div className='max-w-[90%] md:max-w-[1200px] mx-auto py-14 md:py-[100px]'>
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className='text-3xl md:text-5xl font-extrabold mb-3 text-gray-900 tracking-tight'>
                        Premium Digital Tools
                    </h2>
                    <p className='text-gray-600 text-base md:text-lg'>
                        Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                    </p>
                </div>

                <div className="toggleBtns flex justify-center mb-12">
                    <div className='bg-gray-100 p-1.5 rounded-full inline-flex shadow-inner'>
                        <button
                            onClick={() => handleToggle('Products')}
                            className={`btn btn-sm md:btn-md rounded-full px-6 md:px-8 font-semibold transition-all border-none ${
                                activeTab === "Products"
                                    ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md"
                                    : "bg-transparent text-gray-700 hover:text-black shadow-none"
                            }`}
                        >
                            All Products ({tools ? tools.length : 0})
                        </button>
                        <button
                            onClick={() => handleToggle('Cart')}
                            className={`btn btn-sm md:btn-md rounded-full px-6 md:px-8 font-semibold transition-all border-none ${
                                activeTab === "Cart"
                                    ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md"
                                    : "bg-transparent text-gray-700 hover:text-black shadow-none"
                            }`}
                        >
                            Cart ({selectedTools.length})
                        </button>
                    </div>
                </div>

                <div className="toolCards">
                    {activeTab === "Products" ? (
                        <AllTools
                            tools={tools || []}
                            selectedTools={selectedTools}
                            setSelectedTools={setSelectedTools}
                        />
                    ) : (
                        <SelectedTools
                            selectedTools={selectedTools}
                            setSelectedTools={setSelectedTools}
                            onBrowseClick={() => handleToggle('Products')}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default DigitalTools;
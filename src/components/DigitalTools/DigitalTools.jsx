import React, { use, useState, useMemo } from 'react';
import AllTools from './AllTools';
import SelectedTools from './SelectedTools';

const DigitalTools = ({ toolsData, selectedTools, setSelectedTools, activeTab = "Products", setActiveTab }) => {
    const rawTools = use(toolsData);
    const tools = useMemo(() => rawTools || [], [rawTools]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleToggle = (tabName) => {
        if (setActiveTab) {
            setActiveTab(tabName);
        }
    };

    const categories = useMemo(() => {
        const uniqueTags = Array.from(new Set(tools.map(t => t.tag).filter(Boolean)));
        return ['All', ...uniqueTags];
    }, [tools]);

    const filteredTools = useMemo(() => {
        return tools.filter(tool => {
            const matchesCategory = selectedCategory === 'All' || tool.tag === selectedCategory;
            const matchesSearch =
                tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (tool.description && tool.description.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [tools, selectedCategory, searchQuery]);


    const handleResetFilters = () => {
        setSearchQuery('');
        setSelectedCategory('All');
    };

    return (
        <section id="products" className='bg-white scroll-mt-20'>
            <div className='max-w-[90%] md:max-w-[1200px] mx-auto py-14 md:py-[100px]'>
                <div className="text-center max-w-2xl mx-auto mb-8">
                    <h2 className='text-3xl md:text-5xl font-extrabold mb-3 text-gray-900 tracking-tight'>
                        Premium Digital Tools
                    </h2>
                    <p className='text-gray-600 text-base md:text-lg'>
                        Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                    </p>
                </div>

                {/* Tab switcher: All Products vs Shopping Cart */}
                <div className="toggleBtns flex justify-center mb-10">
                    <div className='bg-gray-100 p-1.5 rounded-full inline-flex shadow-inner'>
                        <button
                            onClick={() => handleToggle('Products')}
                            className={`btn btn-sm md:btn-md rounded-full px-6 md:px-8 font-semibold transition-all border-none ${
                                activeTab === "Products"
                                    ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md"
                                    : "bg-transparent text-gray-700 hover:text-black shadow-none"
                            }`}
                        >
                            All Products ({rawTools.length})
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

                {/* Filter & Search Bar - only shown when on Products tab */}
                {activeTab === "Products" && (
                    <div className="mb-10 space-y-4">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                            {/* Category Filter Pills */}
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`btn btn-sm rounded-full text-xs font-semibold transition-all ${
                                            selectedCategory === category
                                                ? "bg-gray-900 text-white border-gray-900 shadow-xs"
                                                : "bg-gray-100 hover:bg-gray-200 text-gray-700 border-none"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            {/* Search Box */}
                            <div className="w-full md:w-72 relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search tools & kits..."
                                    className="input input-bordered input-sm md:input-md w-full rounded-full pl-10 pr-4 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#4F39F6] border-gray-200 text-sm"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="btn btn-ghost btn-circle btn-xs absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Search result summary if filter/search is active */}
                        {(selectedCategory !== 'All' || searchQuery) && (
                            <div className="flex items-center justify-between text-sm text-gray-500 px-1">
                                <span>
                                    Showing {filteredTools.length} of {rawTools.length} tools
                                </span>
                                <button
                                    onClick={handleResetFilters}
                                    className="text-[#4F39F6] font-medium hover:underline text-xs"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Content Cards */}
                <div className="toolCards">
                    {activeTab === "Products" ? (
                        <AllTools
                            tools={filteredTools}
                            selectedTools={selectedTools}
                            setSelectedTools={setSelectedTools}
                            onReset={handleResetFilters}
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

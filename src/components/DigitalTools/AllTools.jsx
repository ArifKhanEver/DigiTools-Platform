import React from 'react';
import Tool from './Tool';

const AllTools = ({ tools = [], selectedTools, setSelectedTools, onReset }) => {
    if (tools.length === 0) {
        return (
            <div className="text-center py-16 bg-gray-50/70 rounded-2xl border border-gray-100 p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">No matching tools found</h3>
                <p className="text-gray-500 max-w-sm mx-auto text-sm">
                    Try adjusting your search query or selecting another category tag.
                </p>
                {onReset && (
                    <button
                        onClick={onReset}
                        className="btn btn-sm rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 border-none shadow-sm"
                    >
                        Clear Filters
                    </button>
                )}
            </div>
        );
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {tools.map((tool) => (
                <Tool
                    key={tool.id}
                    tool={tool}
                    selectedTools={selectedTools}
                    setSelectedTools={setSelectedTools}
                />
            ))}
        </div>
    );
};

export default AllTools;

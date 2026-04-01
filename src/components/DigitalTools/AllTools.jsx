import React from 'react';
import Tool from './Tool';

const AllTools = ({tools, cartCount, setCartCount, selectedTools, setSelectedTools}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
                tools.map((tool, ind) => <Tool key={ind} tool={tool} cartCount={cartCount} setCartCount={setCartCount} selectedTools={selectedTools} setSelectedTools={setSelectedTools}></Tool>
                )
            }
        </div>
    );
};

export default AllTools;
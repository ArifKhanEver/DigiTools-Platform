import React from 'react';
import Tool from './Tool';

const AllTools = ({ tools, selectedTools, setSelectedTools }) => {
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
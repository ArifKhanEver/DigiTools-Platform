import React, { use, useState } from 'react';
import AllTools from './AllTools';
import SelectedTools from './SelectedTools';

const DigitalTools = ({toolsData, cartCount, setCartCount}) => {
    const tools = use(toolsData);

    const [toggleState, setToggleState] = useState("Products")

    const [selectedTools, setSelectedTools] = useState([])

    const handleToggle = (clickState)=> {
        setToggleState(clickState);
    }

    return (
        <div className='bg-[#ffffff]'>
            <div className='max-w-[90%] md:max-w-[1200px] mx-auto py-14 md:py-[120px]'>
                <h2 className='text-3xl md:text-5xl font-extrabold text-center mb-2'>
                    Premium Digital Tools
                </h2>
                <p className='text-center mb-10 max-w-[500px] mx-auto'>
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>

                <div className="toggleBtns flex justify-center mb-10">
                    <div className='shadow-sm p-2 rounded-full'>
                        <button onClick={()=>handleToggle('Products')} className={`btn rounded-full px-8 ${toggleState === "Products"? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-white text-black shadow-none border-none"}`}>
                            Products
                        </button>
                        <button onClick={()=>handleToggle('Cart')} className={`btn rounded-full px-8 ${toggleState !== "Products"? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-white text-black shadow-none border-none"}`}>
                            Cart({cartCount})
                        </button>

                    </div>
                </div>


                <div className="toolCards">
                    {
                        toggleState === "Products"?<AllTools tools={tools} cartCount={cartCount} setCartCount={setCartCount} selectedTools={selectedTools} setSelectedTools={setSelectedTools}></AllTools>: <SelectedTools setCartCount={setCartCount} selectedTools={selectedTools} setSelectedTools={setSelectedTools}></SelectedTools>
                    }
                </div>

            </div>
        </div>
    );
};

export default DigitalTools;
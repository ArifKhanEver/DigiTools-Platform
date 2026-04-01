import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Tool = ({tool, cartCount, setCartCount, selectedTools, setSelectedTools}) => {
    const [buyBtnState, setBuyBtnState] = useState(false)

    useEffect(()=>{selectedTools.map(item=>item.id == tool.id && setBuyBtnState(true))}, [selectedTools, buyBtnState])

    const handleCard = ()=> {
        
        const isFound = selectedTools.find(item=> item.id === tool.id)
        
        if(isFound){
            toast.error('This item is already in the Cart')
            return
        }
        
        setSelectedTools([...selectedTools, tool])
        setCartCount(cartCount + 1)
        setBuyBtnState(true)
        toast(`${tool.name} has been added to your cart`)

    }

    return (
        <div>
            <div className="card md:w-96 bg-[#fff] shadow-sm">
                <div className="card-body">
                    <div className='flex justify-end items-center'>
                        <span className={`badge badge-l rounded-full badge-${tool.tag == "Exclusive"? "secondary": tool.tag =="Top Pick"? "info":tool.tag =="Essential"? "accent":"warning"} text-[#fff] inline-block`}>{tool.tag}</span>
                    </div>

                    <div className="flex flex-col justify-between space-y-2 md:space-y-4">
                        <div className='w-12 h-12 md:w-15 md:h-15 flex items-center justify-center border border-gray-300 rounded-full p-3'>
                            <img src={tool.icon} alt="Tool icon" />
                        </div>
                        <h2 className="text-2xl font-bold">{tool.name}</h2>
                        <p className='text-[#627382]'>{tool.description}</p>
                        <p className="text-[18px]"><span className='text-2xl font-bold'>${tool.price}</span>/{tool.period}</p>
                    </div>
                    <ul className=" flex flex-col gap-2 text-xs">
                        {
                            tool.features.map((feature, ind)=>
                                    <li key={ind} className='text-[1rem]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>{feature}</span>
                                    </li>
                            )
                        }
                    </ul>
                    <div className="mt-6">
                        <button onClick={handleCard} className={`btn ${buyBtnState? "bg-gray-300 text-black": "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}  rounded-full btn-block hover:from-[#9514FA] hover:to-[#4F39F6] hover:scale-[1.01] pointer`} disabled={buyBtnState}>
                            {buyBtnState? "Added to Cart":"Buy Now"}
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;
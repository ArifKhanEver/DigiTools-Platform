import React from 'react';
import { toast } from 'react-toastify';

const SelectedTools = ({setCartCount, selectedTools, setSelectedTools}) => {

    const cartProceed =()=> {
        setSelectedTools([])
        setCartCount(0)
        toast.error("Cart is Empty")
    }

    const handleDeleteBtn =(item)=>{
        const filteredTool = selectedTools.filter(e=>e.id !== item.id);
        setSelectedTools(filteredTool)
        setCartCount(selectedTools.length-1)
        toast.error(`${item.name} is removed from Cart`)

    }

    const totalPrice = selectedTools.reduce((sum, item)=> sum + item.price, 0)

    return (
        <div>
            <div className='p-6 max-w-4xl shadow-sm rounded-2xl mx-auto space-y-4'>
                <h4 className='mt-4 font-bold'>Your Cart</h4>


                {
                    selectedTools.length === 0? <h1 className='h-[200px] grid place-content-center text-xl '>No data found</h1> :
                        selectedTools.map(tool=>
                            <div className='flex justify-between items-center bg-gray-100 p-4 rounded-2xl'>
                                <div className='flex items-center gap-4'>
                                    <div className="icon w-10">
                                        <img src={tool.icon} alt="Tool icon" />
                                    </div>
                                    <div>
                                        <h5 className='text-[20px] font-semibold'>{tool.name}</h5>
                                        <p className='font-medium'>$ {tool.price}</p>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={()=>handleDeleteBtn(tool)} className="btn text-red-600 font-bold bg-transparent border-none shadow-none">Remove</button>
                                </div>
    
                            </div>
                        )
                    
                }

                <div className='flex justify-between px-6'>
                    <span>Total:</span>
                    <span className='font-bold text-2xl'>${totalPrice}</span>
                </div>
                <button onClick={cartProceed} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block text-white rounded-full hover:from-[#9514FA] hover:to-[#4F39F6] hover:scale-[1.01] pointer">
                    Proceed To Checkout
                </button>

            </div>
        </div>
    );
};

export default SelectedTools;
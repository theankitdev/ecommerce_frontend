import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const QtyBox = () => {
    const [qty, setQty] = useState(1);

    const plusQty = () => {
        setQty(prev => prev + 1);
    }

    const minusQty = () => {
        setQty(prev => (prev > 1 ? prev - 1 : 1));
    }

    return (
        <div className='qtyBox flex items-center relative h-[40px] w-[80px]'>

            <input
                type='number'
                min={1}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className='h-[40px] w-full text-[15px] border border-gray-400 rounded-md focus:outline-none p-2 pr-[30px]'
            />

            <div className='flex flex-col absolute right-0 h-[40px] border-l border-gray-400 z-50'>
                <Button
                    onClick={plusQty}
                    className='!min-w-[30px] !w-[30px] !h-[20px] !text-black rounded-none!'
                >
                    <FaAngleUp size={12} />
                </Button>

                <Button
                    onClick={minusQty}
                    className='!min-w-[30px] !w-[30px] !h-[20px] !text-black rounded-none!'
                >
                    <FaAngleDown size={12} />
                </Button>
            </div>
        </div>
    )
}

export default QtyBox
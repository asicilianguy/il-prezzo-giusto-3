'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Counter() {
     const [count, setCount] = useState<number>(1);

     const handleDecrement = () => {
          if (count > 1) setCount(prev => prev - 1);
     };

     const handleIncrement = () => {
          setCount(prev => prev + 1);
     };

     return (
          <div className='border border-black/[10%] gap-0.5 rounded-full py-[1px] px-0.5 flex items-center'>
               <button
                    onClick={handleDecrement}
                    className="flex items-center cursor-pointer justify-center"
               >
                    <img src="/icons/minus-icon.svg" alt="Minus" />
               </button>

               <input
                    type="number"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value) || 0)}
                    className='text-lg font-medium text-black-1 placeholder:text-black-1 bg-transparent border-0 w-6 text-center outline-none'
               />

               <button
                    onClick={handleIncrement}
                    className="flex items-center cursor-pointer justify-center"
               >
                    <img src="/icons/plus-icon.svg" alt="Plus" />
               </button>
          </div>
     );
}

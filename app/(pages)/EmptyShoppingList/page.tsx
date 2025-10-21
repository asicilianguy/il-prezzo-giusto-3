import Link from 'next/link'
import React from 'react'
import BottomNav from '@/app/components/BottomNav'

function page() {
     return (
          <main className="min-h-screen flex flex-col relative container mx-auto ">
               <div className='flex items-center justify-between py-5 px-[18px]'>
                    <h2 className='text-[22px] font-bold leading-[130%] text-black-1'>My Shopping List</h2>
                    <Link href="/" className='flex items-center gap-1.5 px-3 py-[7px] text-xs font-medium text-white bg-black rounded-full'><img src="/icons/whatsapp-icon.svg" alt="" /> Share on WhatsApp</Link>
               </div>
               <div className='bg-white-2 flex flex-col justify-center items-center text-center min-h-screen px-6 py-[30px]'>
                    <div className='gradient3 w-14 h-14 rounded-[12px] flex items-center justify-center mx-auto'>
                         <img src="/icons/bag-cross.svg" alt="" />
                    </div>
                    <h2 className='text-[32px] leading-[38px] mt-[22px] mb-2.5 text-black font-semibold capitalize'>Your list is empty</h2>
                    <p className='text-lg mb-[30px] font-normal leading-6 text-gray-1'>Add items from offers to start saving!</p>
                    <Link href="/" className='text-[17px] font-medium capitalize text-black-1 leading-5 inline-block rounded-full py-[14px] px-[30px] bg-black-1/[6%]'>Browse Offers</Link>
               </div>
               <BottomNav></BottomNav>
          </main>
     )
}

export default page

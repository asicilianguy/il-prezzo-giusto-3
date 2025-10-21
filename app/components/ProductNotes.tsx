import React from "react";

export default function ProductNotes() {
     return (
          <div className="p-[14px] bg-white -mt-5 rounded-b-[14px] shadow-3xl border-t border-black/[13%]">
               <div className="flex items-center justify-between">
                    <h6 className="text-sm font-medium text-black-1">Notes</h6>
                    <span className="block text-sm font-medium text-gray-1">Discard</span>
               </div>
               <div className="relative mt-2.5">
                    <textarea
                         placeholder="Type your notes...."
                         className="block text-[13px] font-normal placeholder:text-gray-1 text-gray-1 p-[15px] h-[100px] rounded-[10px] w-full border border-black/[12%] pb-[34px]"
                    ></textarea>
                    <button
                         type="button"
                         className="text-[13px] font-medium text-white inline-block py-[4.5px] px-[13.5px] leading-4 bg-blue-1 rounded-full absolute bottom-2.5 right-2.5"
                    >
                         Save
                    </button>
               </div>
          </div>
     );
}

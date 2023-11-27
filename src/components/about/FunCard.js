import React from 'react'

export default function FunCard({ icon, des }) {
  return (
    <>
     <div className="full">
         <div className="w-full flex flex-col items-center gap-2 border-r-[1px] border-r-zinc-800 border-b-[1px] border-b-zinc-800 py-8">
             <span className='text-2xl text-dColor'> { icon } </span>
             <p className='text-base w-32 h-10 text-center text-gray-300 hover:text-white duration-200'>{des}</p>
         </div>
     </div>
    </>
  )
}

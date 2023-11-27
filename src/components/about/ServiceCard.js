import React from 'react';
import { BiCodeAlt } from "react-icons/bi";
export default function ServiceCard({ icon, title, subTitle}) {
  return (
    <>
      <div className="py-8 px-6 flex flex-col items-center gap-2 bRight bBottom">
          <span className='text-2xl lg:text-4xl text-dColor mb-2'>{icon}</span>
          <h2 className='font-tFont text-md lg:text-lg font-semobold'>{title}</h2>
          <p className='text-sm lg:text-base text-center text-zinc-400 px-6'>{subTitle}</p>
      </div>
    </>
  )
}

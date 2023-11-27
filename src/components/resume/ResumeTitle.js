import React from 'react';


export default function ResumeTitle({ icon, title }) {
  return (
    <>
        <div className="">
            <h1 className="text-md lg:text-lg text-gray-300 uppercase font-medium flex items-center gap-2 py-3 border-b-[1px] border-b-zinc-800">
                <span className='text-dColor text-xl lg:text-2xl'>
                    { icon }
                </span>
                { title }
            </h1>
        </div>
    </>
  )
}

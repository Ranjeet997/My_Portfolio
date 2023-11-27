import React from "react";

export default function ResumeCard({ badge, title, subTitle, des1, des2 }) {
  return (
    <>
      <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800">
        <div className="max-w-max">
        {badge === "" ? (
          <h6 className="text-center text-[.8rem] lg:text-sm py-[1px] text-dColor border-[1px] border-dColor rounded-sm px-1">2015 - 2019</h6>
        ) : (
          <span className="text-center text-[.8rem] lg:text-sm py-[1px] text-dColor border-[1px] border-dColor rounded-sm px-1">
            {badge}
          </span>
        )}</div>
        <h2 className="text-md lg:text-lg font-tFont text-gray-200 font-medium"> {title} </h2>
        <p className="text-sm text-[#999] -mt-2"> {subTitle} </p>
    
        <p className="text-sm lg:text-base text-[#999] font-medium pr-10"> {des1} </p>
        <p className="text-sm lg:text-base text-[#999] font-medium pr-10"> {des2} </p>
      </div>
    </>
  );
}

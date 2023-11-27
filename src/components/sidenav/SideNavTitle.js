import React from "react";

export default function SideNavTitle({ title, subTitle }) {
  return (
    <div>
      <h1 className="font-tFont text-lg md:text-xl font-semibold text-zinc-100 tracking-wide relative pb-4 mt-6 border-b-[1px] border-b-zinc-500">
        <span className="text-dColor">{title}</span>
        {subTitle}
        <span className="w-8 h-8 bg-gradient-to-t from-dColor to-gray-600 inline-block rounded-full absolute -left-3 top-0 opacity-10 z-10"></span>
      </h1>
    </div>
  );
}

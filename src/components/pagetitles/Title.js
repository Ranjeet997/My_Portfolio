import React from "react";

export default function Title({ title, subTitle}) {
  return (
    <>
      <h1 className="font-tFont font-bold text-lg lg:text-xl capitalize text-tcolor relative z-10 px-6 py-3 bBottom group">
        <span className="text-dColor">{title}</span> {subTitle}
        <span className="w-8 h-8 bg-gradient-to-t from-dColor to-gray-600 inline-block rounded-full absolute left-2 top-3 opacity-20 -z-10 translate-x-0 group-hover:translate-x-24 transition:transform duration-500"></span>
      </h1>
    </>
  );
}

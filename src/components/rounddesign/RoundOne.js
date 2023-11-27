import React from "react";

export default function RoundOne() {
  return (
    <>
      <div className="w-96 h-96 relative top-0 left-10 animate-spin-slow">
        <div className="w-32 h-32 rounded-full bg-dColor absolute top-0 blur-xl"></div>
        <div className="w-24 h-24 rounded-full bg-green-600 absolute -bottom-10 left-16 blur-xl"></div>
        <div className="w-24 h-24 rounded-full bg-dColor absolute top-32 -right-10 blur-2xl"></div>
      </div>
    </>
  );
}

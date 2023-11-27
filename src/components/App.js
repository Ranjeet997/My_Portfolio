import Home from "@/pages/Home";
import React from "react";
import RoundFive from "./rounddesign/RoundFive";
import RoundFour from "./rounddesign/RoundFour";
import RoundOne from "./rounddesign/RoundOne";
import RoundThree from "./rounddesign/RoundThree";
import RoundTwo from "./rounddesign/RoundTwo";

export default function App() {
  return (
    <>
      <div className="w-full h-screen font-bFont text-tColor bg-black relative overflow-hidden">
        <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
            <Home/>
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-10">
          <RoundOne/>
          <RoundTwo/>
          <RoundThree/>
          <RoundFour/>
          <RoundFive/>
        </div>
      </div>
    </>
  );
}

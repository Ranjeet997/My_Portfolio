import React from 'react'
import FunCard from './FunCard'
import { BsTrophyFill } from "react-icons/bs"
import { SiAntdesign } from "react-icons/si"
import { BiCodeAlt } from "react-icons/bi"


export default function FunFact() {
  return (
    <>
    <div className="px-0 grid md:grid-cols-3 pb-10">
        <FunCard icon={<BsTrophyFill/>} des="10 Award Won" />
        <FunCard icon={<SiAntdesign/>} des="5 Finished Project" />
        <FunCard icon={<BiCodeAlt/>} des="10 hours of coding" />
    </div>
    </>
  )
}

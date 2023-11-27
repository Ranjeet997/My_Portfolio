'use client'
import React from "react";
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import { BsCloudLightningFill, BsFacebook} from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { FiInstagram, FiMail, FiSend } from "react-icons/fi"
import Link from "next/link";

export default function Left() {
  const [ text ] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "ReactJs Developer"],loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000
  })
  return (
    <>
      <div className="w-full h-[18vh] md:h-[20vh] block flex justify-between lg:block lg:w-5/12 lg:h-full bg-bColor rounded-xl mt-1.5 md:mt-0">
          <div className="lg:w-full lg:h-3/6 xl:h-3/5">
              <img className="w-[25vw] h-full md:w-[32vw] lg:w-full object-cover rounded-2xl" src="/images/profile_pic.jpeg" alt="bannerImage" loading="priority" />
          </div>
          <div className="w-[55vw] md:w-full lg:w-full lg:h-3/6 xl:h-2/5 mx-5 md:mx-0 my-auto">
            {/* contain the intro */}
            <div className="flex flex-col items-center gap-2 py-3 md:py-8 lg:py-10">
              <h1 className=" text-xl md:text-2xl text-gray-300 lg:text-4xl font-semibold">Ranjeet Kumar</h1>
              <p className="text-sm lg:text-base text-dColor tracking-wide">{text} <Cursor cursorBlinking="false"/></p>
              <div className="flex justify-center gap-2 mt-2">
                <a href="https://github.com/Ranjeet997" rel="noopener noreferrer" className="hover:text-dColor duration-300 cursor-pointer md:text-md lg:text-xl"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/ranjeet-kumar-ba5b5a230" className="hover:text-dColor duration-300 cursor-pointer md:text-md lg:text-xl"><FaLinkedin/></a>
                <a href="https://twitter.com/home" rel="noopener noreferrer" className="hover:text-dColor duration-300 cursor-pointer md:text-md lg:text-xl"><AiFillTwitterCircle/></a>
                <a href="https://www.instagram.com/ranjeetsharma8806" rel="noopener noreferrer" className="hover:text-dColor duration-300 cursor-pointer md:text-md lg:text-xl"><FiInstagram/></a>
                <a href="" rel="noopener noreferrer" className="hover:text-dColor duration-300 cursor-pointer md:text-md lg:text-xl"><FiMail/></a>
                {/* <span className="hover:text-dColor duration-300 cursor-pointer md:text-md lg:text-xl"><FiSend/></span> */}
                {/* <a href="https://www.facebook.com/profile.php?id=100025225909303&mibextid=ZbWKwL" rel="noopener noreferrer" className="hover:text-dColor duration-300 cursor-pointer md:text-md lg:text-xl"><BsFacebook/></a> */}
              </div>
            </div>
            {/* buttons */}
            <div className="hidden md:flex md:h-14">
              <button className="md:w-1/2 h-full flex justify-center items-center gap-2 bTop bRight text-xs md:text-sm lg:text-sm tracking-wide uppercase hover:text-dColor">Download CV <BsCloudLightningFill/></button>
              <button className="md:w-1/2 h-full flex justify-center items-center gap-2 bTop text-xs md:text-sm lg:text-sm tracking-wide uppercase hover:text-dColor">Contact me <FiSend/></button>

            </div>
          </div>
          
      </div>
    </>
  );
}

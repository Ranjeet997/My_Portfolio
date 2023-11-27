"use client";
import { React, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Left from "./Left";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork, MdOutlineClose } from "react-icons/md";
import { BsTelephonePlusFill } from "react-icons/bs";
import About from "@/components/about/About";
import Resume from "@/components/resume/Resume";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import SideNav from "@/components/sidenav/SideNav";

export default function Home() {
  const ref = useRef();
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  const [sidenav, setSidenav] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e)=>{
      if(e.target.contains(ref.current)){
        setSidenav(false);
      }
    })
  }, [])
  

  return (
    <>
      <div className="w-[85%] h-[95%] md:h-[85%] bg-transparent text-white z-50 md:flex justify-center">
        <div className="w-full md:w-[6vw] h-14 md:h-96 lg:w-16 bg-transparent flex md:flex-col gap-1.5 md:gap-4">
          <div className="w-[12%] md:w-full md:h-16 bg-bColor rounded-3xl flex justify-center items-center group cursor-pointer">
            <div
              onClick={() => setSidenav(true)}
              className="flex flex-col gap-1.5 overflow-hidden"
            >
              <span className="w-8 h-[2px] bg-dColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-dColor"></span>
              <span className="w-8 h-[2px] bg-dColor inline-block duration-300 group-hover:bg-dColor"></span>
              <span className="w-8 h-[2px] bg-dColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-dColor"></span>
            </div>
          </div>

          {/* ================== Side nav start here ===================== */}

          {sidenav && (
            <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50 z-50">
              <div className="w-2/3 md:w-96 h-full relative">
                <motion.div
                  ref={ref}
                  initial={{ x: -500, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full bg-bColor overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]"
                >
                  <SideNav />
                  <span
                    onClick={() => setSidenav(false)}
                    className="absolute top-0 -right-16 w-12 h-12 bg-bColor text-2xl text-dColor hover:text-dColor duration-300 cursor-pointer flex items-center justify-center z-50"
                  >
                    <MdOutlineClose />
                  </span>
                </motion.div>
              </div>
            </div>
          )}

          {/* ================== Side nav end here ===================== */}

          {/* Other icons */}
          <div className="w-[88%] flex justify-evenly items-center md:block bg-bColor rounded-3xl md:py-6 md:space-y-5 ">
            <span
              onClick={() => {
                setAbout(true) &
                  setResume(false) &
                  setProjects(false) &
                  setContact(false);
              }}
              className="w-6 md:w-full h-6 text-dColor text-xl flex items-center justify-center hover:text-dColor duration-300 cursor-pointer relative group"
            >
              <FaUser />
              <span className="absolute text-black font-medium text-xs uppercase bg-dColor px-4 py-[1px] rounded-xl text-center md:left-0  -translate-y-1 group-hover:-translate-y-5 md:-translate-y-0 md:group-hover:-translate-y-0 md:translate-x-8 md:group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
                About
              </span>
            </span>

            <span
              onClick={() => {
                setAbout(false) &
                  setResume(true) &
                  setProjects(false) &
                  setContact(false);
              }}
              className="w-6 md:w-full h-6 text-dColor text-xl flex items-center justify-center hover:text-dColor duration-300 cursor-pointer relative group"
            >
              <IoIosPaper />
              <span className="absolute text-black font-medium text-xs uppercase bg-dColor px-4 py-[1px] rounded-xl text-center md:left-0  -translate-y-1 group-hover:-translate-y-5 md:-translate-y-0 md:group-hover:-translate-y-0 md:translate-x-8 md:group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
                Resume
              </span>
            </span>

            <span
              onClick={() => {
                setAbout(false) &
                  setResume(false) &
                  setProjects(true) &
                  setContact(false);
              }}
              className="w-6 md:w-full h-6 text-dColor text-xl flex items-center justify-center hover:text-dColor duration-300 cursor-pointer relative group"
            >
              <MdWork />
              <span className="absolute text-black font-medium text-xs uppercase bg-dColor px-4 py-[1px] rounded-xl text-center md:left-0  -translate-y-1 group-hover:-translate-y-5 md:-translate-y-0 md:group-hover:-translate-y-0 md:translate-x-8 md:group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
                Projects
              </span>
            </span>

            {/* <span className="w-full h-6 text-dColor text-xl flex items-center justify-center hover:text-dColor duration-300 cursor-pointer relative group">
              <SiGooglechat />
              <span className="absolute text-black font-medium text-xs uppercase bg-dColor px-4 py-[1px] rounded-xl text-center md:left-0  -translate-y-1 group-hover:-translate-y-5 md:-translate-y-0 md:group-hover:-translate-y-0 md:translate-x-8 md:group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
                Blog
              </span>
            </span> */}

            <span
              onClick={() => {
                setAbout(false) &
                  setResume(false) &
                  setProjects(false) &
                  setContact(true);
              }}
              className="w-6 md:w-full h-6 text-dColor text-xl flex items-center justify-center hover:text-dColor duration-300 cursor-pointer relative group"
            >
              <FaEnvelope />
              <span className="absolute text-black font-medium text-xs uppercase bg-dColor px-4 py-[1px] rounded-xl text-center md:text-center md:left-0 -translate-y-1 group-hover:-translate-y-5 md:-translate-y-0 md:group-hover:-translate-y-0 md:translate-x-8 md:group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
                Contact
              </span>
            </span>

            <span className="w-6 md:w-full h-6 text-dColor text-xl flex items-center justify-center hover:text-dColor duration-300 cursor-pointer relative group">
              <BsTelephonePlusFill />
              <span
                className="absolute text-black font-medium text-xs uppercase bg-dColor px-4 py-[1px] rounded-xl text-center md:left-0  -translate-y-1 group-hover:-translate-y-5
              md:-translate-y-0 md:group-hover:-translate-y-0 md:-translate-y-0 md:group-hover:-translate-y-0 md:translate-x-8 md:group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100"
              >
                Call
              </span>
            </span>
          </div>
        </div>
        <div className="w-full h-full md:w-[94%] lg:h-full bg-transparent lg:flex lg:items-center gap-1 md:ml-2">
          {/* Left part start */}
          <Left />
          {/* Right part start */}
          <div className="w-full h-[65%] md:h-[71%] lg:w-8/12 lg:h-[95%] bg-bColor rounded-xl mt-1.5 md:mt-3">
            <div className="w-full h-[96%] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
              {about && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <About />
                </motion.div>
              )}

              {resume && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Resume />
                </motion.div>
              )}

              {projects && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Projects />
                </motion.div>
              )}

              {contact && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Contact />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

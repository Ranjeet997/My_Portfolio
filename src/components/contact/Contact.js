import { React, useState } from "react";
import Title from "../pagetitles/Title";
import axios from "axios";

export default function Contact() {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ===================Error Message Start here ======================
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessages] = useState(false);
  // ===================Error Message End here =======================

  // =================== Email validation start here ==================

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  };
  // =================== Email validation end here ==================

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleMessage = (e) => {
    setMessages(e.target.value);
    setErrMessages(false);
  };
  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      if (!email) {
        setErrEmail(true);
      }
    }
    if (!messages) {
      setErrMessages(true);
    }
    if (clientName && email && EmailValidation(email) && messages) {
        axios.post("https://getform.io/f/2db54d3b-e66f-4bfe-89fc-9ee617c73f2c", {
            name:clientName,
            email: email,
            message: messages
        })
      setSuccessMsg(
        `Hello dear ${clientName}, Your message has been sent seccessfully. Thank you for your time!`
      );
      console.log(clientName, email, messages);
      setClientName("");
      setEmail("");
      setMessages("");
    }
  };
  return (
    <>
      <div className="">
        <Title title="Get" subTitle="In Touch" />
        <div className="p6 flex justify-between gap-20">
          <div className="w-full grid 2xl:grid-cols-2 gap-x-12 px-3 md:px-6">
            <p className="flex justify-between w-full text-sm md:text-base text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
              <span className="bg-dColor text-gray-700 text-xs lg:text-sm font-tFont font-medium px-2 rounded-md flex items-center justify-center">
                Address :
              </span>
              Panipat, Haryana, India
            </p>

            <p className="flex justify-between w-full text-sm md:text-base text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
              <span className="bg-dColor text-gray-700 text-xs lg:text-sm font-tFont font-medium px-2 rounded-md flex items-center justify-center">
                Phone :
              </span>
              9917894859
            </p>

            <p
              className="flex justify-between w-full text-sm md:text-base text-[#ccc] py-4 border-b-[1px]
                     border-b-zinc-800"
            >
              <span className="bg-dColor text-gray-700 text-xs lg:text-sm font-tFont font-medium px-2 rounded-md flex items-center justify-center">
                Email :
              </span>
              ranjeetkumar9264@gmail.com
            </p>
          </div>
        </div>

        
        <div className="w-full mt-10">
          <Title title="Send" subTitle="Message" />
          {/* ============================== Form start here =============================== */}
          {successMsg ? (
            <p className="text-center text-base font-tFont p-3 md:p-20 text-dColor">{successMsg}</p>
          ) : (
            <form
              id="form"
              action="https://getform.io/f/2db54d3b-e66f-4bfe-89fc-9ee617c73f2c"
              method="POST"
              className="p-6 flex flex-col gap-6"
            >
              <div className="w-full flex gap-10 justify-between">
                <input
                  onChange={handleName}
                  value={clientName}
                  type="text"
                  placeholder="Full Name"
                  className={`${
                    errClientName
                      ? "border-red-600 focus-visible:border-red-600"
                      : "border-zinc-600 focus-visible:border-dColor"
                  } w-full bg-transparent border-2 px-4 py-2 text-sm lg:text-base text-gray-200 outline-none duration-300`}
                />

                <input
                  onChange={handleEmail}
                  value={email}
                  type="email"
                  placeholder="Email Address"
                  className={`${
                    errEmail
                      ? "border-red-600 focus-visible:border-red-600"
                      : "border-zinc-600 focus-visible:border-dColor"
                  } w-full bg-transparent border-2 px-4 py-2 text-sm lg:text-base text-gray-200 outline-none duration-300`}
                />
              </div>
              <div className="">
                <textarea
                  onChange={handleMessage}
                  value={messages}
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  className={`${
                    errMessages
                      ? "border-red-600 focus-visible:border-red-600"
                      : "border-zinc-600 focus-visible:border-dColor"
                  } w-full bg-transparent border-2 px-4 py-2 text-sm lg:text-base text-gray-200 outline-none duration-300`}
                ></textarea>

                <button
                  onClick={handleSend}
                  className="text-sm lg:text-base w-44 flex items-center gap-1 text-gray-200 hover:text-dColor duration-200"
                >
                  Send message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

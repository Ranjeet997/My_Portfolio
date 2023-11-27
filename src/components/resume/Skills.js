import React from "react";
import ResumeTitle from "./ResumeTitle";
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";

export default function Skills() {
  return (
    <>
      <div className="w-full grid md:grid-cols-9 px-6">
        <div className="col-span-4">
          <ResumeTitle title="PROGRAMMING" icon={<SiArtstation />} />
          <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-[.9rem] lg:text-base -m-1 5">
                HTML
              </p>
              <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                <span className="w-[91%] h-full absolute top-0 left-0 bg-dColor"></span>
              </span>
            </div>
          </div>

          <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-[.9rem] lg:text-base text-gray-300 -m-1 5">
                CSS
              </p>
              <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                <span className="w-[85%] h-full absolute top-0 left-0 bg-dColor"></span>
              </span>
            </div>
          </div>

          <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-[.9rem] lg:text-base text-gray-300 -m-1 5">
                JavaScript
              </p>
              <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                <span className="w-[90%] h-full absolute top-0 left-0 bg-dColor"></span>
              </span>
            </div>
          </div>

          <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-[.9rem] lg:text-base text-gray-300 -m-1 5">
                Python
              </p>
              <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                <span className="w-[88%] h-full absolute top-0 left-0 bg-dColor"></span>
              </span>
            </div>
          </div>

          <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-[.9rem] lg:text-base text-gray-300 -m-1 5">
                C/C++
              </p>
              <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                <span className="w-[80%] h-full absolute top-0 left-0 bg-dColor"></span>
              </span>
            </div>
          </div>

          <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-[.9rem] lg:text-base text-gray-300 -m-1 5">
                PHP
              </p>
              <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                <span className="w-[70%] h-full absolute top-0 left-0 bg-dColor"></span>
              </span>
            </div>
          </div>
          
          <div className="col-span-4">
            <ResumeTitle title="Language" icon={<FaFlag />} />
            <div className="py-4">
              <div className="py-3 border-b-[1px] border-zinc-800">
                <p className="text-[.9rem] lg:text-base text-gray-300 -m-1 5">
                  English
                </p>
                <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                  <span className="w-[66%] h-full absolute top-0 left-0 bg-dColor"></span>
                </span>
              </div>
            </div>

            <div className="py-4">
              <div className="py-3 border-b-[1px] border-zinc-800">
                <p className="text-[.9rem] lg:text-base text-gray-300 -m-1 5">
                  Hindi
                </p>
                <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                  <span className="w-[90%] h-full absolute top-0 left-0 bg-dColor"></span>
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="w-full h-full flex justify-center items-center">
          <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
        </div>

        <div className="col-span-4">
          <ResumeTitle title="TOOLS AND FRAMEWORKS" icon={<SiArtstation />} />
          <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-[.9rem] lg:text-base text-gray-300 -m-1 5">
                ReactJs
              </p>
              <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                <span className="w-[91%] h-full absolute top-0 left-0 bg-dColor"></span>
              </span>
            </div>
          </div>

          <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-[.9rem] lg:text-base text-gray-300 -m-1 5">
                NextJs
              </p>
              <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                <span className="w-[85%] h-full absolute top-0 left-0 bg-dColor"></span>
              </span>
            </div>
          </div>

          <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-[.9rem] lg:text-base text-gray-300 -m-1 5">
                NodeJs
              </p>
              <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                <span className="w-[90%] h-full absolute top-0 left-0 bg-dColor"></span>
              </span>
            </div>
          </div>

          <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-[.9rem] lg:text-base text-gray-300 -m-1 5">
                Redux
              </p>
              <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                <span className="w-[88%] h-full absolute top-0 left-0 bg-dColor"></span>
              </span>
            </div>
          </div>

          <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-[.9rem] lg:text-base text-gray-300 -m-1 5">
                tailwind CSS
              </p>
              <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                <span className="w-[80%] h-full absolute top-0 left-0 bg-dColor"></span>
              </span>
            </div>
          </div>

          <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-[.9rem] lg:text-base text-gray-300 -m-1 5">
                Bootstrap
              </p>
              <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                <span className="w-[70%] h-full absolute top-0 left-0 bg-dColor"></span>
              </span>
            </div>
          </div>

          <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-[.9rem] lg:text-base text-gray-300 -m-1 5">
                PostgreSql
              </p>
              <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                <span className="w-[70%] h-full absolute top-0 left-0 bg-dColor"></span>
              </span>
            </div>
          </div>

          <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-[.9rem] lg:text-base text-gray-300 -m-1 5">
                MongoDb
              </p>
              <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                <span className="w-[70%] h-full absolute top-0 left-0 bg-dColor"></span>
              </span>
            </div>
          </div>

          <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
              <p className="text-[.9rem] lg:text-base text-gray-300 -m-1 5">
                MySql
              </p>
              <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                <span className="w-[70%] h-full absolute top-0 left-0 bg-dColor"></span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

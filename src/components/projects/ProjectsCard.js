import React from 'react'

export default function ProjectsCard({ image, title,gitHubLink, githubLinkName }) {
  return (
    <>
      <div className="w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800 text-center">
          <div className="w-full h-full mb-3 overflow-hidden relative cursor-pointer group">
              <img src={image} alt="cardImage" className='w-full h-[16vh] lg:h-[30vh]' />
              <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-t from-green-600 via-green-600 to-green-200 opacity-20">
              </div>
          </div>
          <h3 className="font-tFont text-base lg:text-lg font-semibold text-[#ccc]">{ title }</h3>
          <a href={`${gitHubLink}`} target="_blank" className="text-sm lg:text-base text-blue-300 hover:text-blue-500 -mt-.5">{ githubLinkName }</a>
      </div>
    </>
  )
}

import React from 'react'

export default function AboutMe() {
  return (
    <>
      <div className="md:flex lg:block xl:flex pb-6">
          <div className="md:w-1/2 lg:w-full text-zinc-400 p-6 bRight block flex flex-col">
            <h2 className='font-semibold mb-1 text-md lg:text-lg'>Hello I'm Ranjeet Kumar</h2>
            <p className="text-sm lg:text-base leading-6">I am pursuing B.Tech in Computer Science from KUK University.
            I completed 4 months internship training as a reactjs developer in Quadb Tech company.
            I have successfully completed several projects that showcase my skills and capabilities as a web developer.</p>
          </div>
          <div className="md:w-1/2 p-6 lg:w-full">
              <ul>
                  <li className='abouutRightLi'>
                      <span className='aboutRightSpan'>Age :</span>23
                  </li>

                  <li className='abouutRightLi'>
                      <span className='aboutRightSpan'>residence :</span>India
                  </li>

                  <li className='abouutRightLi'>
                      <span className='aboutRightSpan'>AdS :</span>Panipat,Haryana,India
                  </li>

              </ul>
          </div>
      </div>
    </>
  )
}

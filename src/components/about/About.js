import React from 'react'
import Title from '../pagetitles/Title'
import AboutMe from './AboutMe'
import FunFact from './FunFact'
import MyServices from './MyServices'

export default function About() {
  return (
    <>
     <section id="about" className='w-full'>
      <Title title="About" subTitle="Me"/>
      <AboutMe/>
      <Title title="My" subTitle="Services" />
      <MyServices/>
      {/* <FunFact/> */}
     </section>
    </>
  )
}

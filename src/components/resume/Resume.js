import React from 'react'
import Title from '../pagetitles/Title'
import Education from './Education'
import Skills from './Skills'

export default function Resume() {
  return (
    <>
     <section>
         <Title title="My" subTitle="Resume"/>
         <Education/>
         <Title title="My" subTitle="Skills" />
         <Skills/>
     </section>
    </>
  )
}

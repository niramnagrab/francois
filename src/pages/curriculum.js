import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSectionCurriculum from '../components/HeroSectionCurriculum'
import Footer from '../components/Footer'
import OneLinerHowTo1 from '../components/OneLinerHowTo1'
import OneLinerHowTo2 from '../components/OneLinerHowTo2'
import Philosophy from '../components/Philosophy'
import CourseOptions from '../components/CourseOptions'

const OurCurriculum = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSectionCurriculum />
      <Philosophy />
      <OneLinerHowTo1 />
      <CourseOptions />
      <OneLinerHowTo2 />
      <Footer />
    </>
  )
}

export default OurCurriculum

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSectionAbout from '../components/HeroSectionAbout'
import SportsAcademy from '../components/SportsAcademy'
import Footer from '../components/Footer'
import OurServices from '../components/OurServices'
import AboutSportsAcademy from '../components/AboutSportsAcademy/AboutSportsAcademy'
import OneLinerAbout from '../components/OneLinerAbout'
import HeroAbout from '../components/HeroAbout'

const About = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSectionAbout />
      <HeroAbout />
      <SportsAcademy />
      <OneLinerAbout />
      <AboutSportsAcademy />
      <OurServices />
      <Footer />
    </>
  )
}

export default About

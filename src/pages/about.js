import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSectionAbout from '../components/HeroSectionAbout'
import SportsAcademy from '../components/SportsAcademy'
import Footer from '../components/Footer'
import OurServices from '../components/OurServices'
import AboutSportsAcademy from '../components/AboutSportsAcademy/AboutSportsAcademy'
import OneLinerAbout from '../components/OneLinerAbout'

const About = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Sidebar isOpen={isOpen} />
      <Navbar />
      <HeroSectionAbout />
      <SportsAcademy />
      <OneLinerAbout />
      <AboutSportsAcademy />
      <OurServices />
      <Footer />
    </>
  )
}

export default About

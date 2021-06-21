import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import OneLiner from '../components/OneLiner'
import WhyUs from '../components/Why'
import Team from '../components/Team'
import Steps from '../components/Steps'
import Numbers from '../components/Numbers'
import OneLinerBottom from '../components/OneLinerBottom'
import HeroBottom from '../components/HeroBottom'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <HeroBottom />
      <OneLiner />
      <WhyUs />
      <Numbers />
      <Team />
      <Steps />
      <OneLinerBottom />
      <Footer />
    </>
  )
}

export default Home

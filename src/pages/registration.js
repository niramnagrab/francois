import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSectionRegistration from '../components/HeroSectionRegistration'
import RegistrationForm from '../components/RegistrationForm'
import Footer from '../components/Footer'

const Registration = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSectionRegistration />
      {/* <RegistrationForm /> */}
      <Footer />
    </>
  )
}

export default Registration

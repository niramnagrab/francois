import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSectionAbout from '../components/HeroSectionAbout'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Testimonial = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSectionAbout />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Testimonial

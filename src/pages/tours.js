import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import OneLinerTours from '../components/OneLinerTours'
import Footer from '../components/Footer'
import TourOptions from '../components/TourOptions'

const Tours = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <TourOptions />
      <OneLinerTours />
      <Footer />
    </>
  )
}

export default Tours

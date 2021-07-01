import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ToursTop from '../components/ToursTop'
import ToursChoices from '../components/ToursChoices'
import OneLinerTours from '../components/OneLinerTours'
import ToursContact from '../components/ToursContact'
import Footer from '../components/Footer'
import TourOptions from '../components/TourOptions'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../components/ImageSlider/SliderData'

const Tours = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ToursTop />
      <ImageSlider slides={SliderData} />
      {/* <ToursChoices /> */}
      <OneLinerTours />
      <TourOptions />
      <ToursContact />
      <Footer />
    </>
  )
}

export default Tours

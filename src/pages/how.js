import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSectionHowTo from '../components/HeroSectionHowTo'
import Footer from '../components/Footer'
import Steps from '../components/Steps'
import Classin from '../components/Classin'
import Approach from '../components/Approach'
import HeroHow from '../components/HeroHow'

const How = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSectionHowTo />
      <HeroHow />
      <Steps />
      <Classin />
      <Approach />
      <Footer />
    </>
  )
}

export default How

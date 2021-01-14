import React from 'react'
import { homeObjTwo } from '../InfoSection/Data'
import InfoSection from '../InfoSection'
import NavBar from '../Navbar2'
import Footer from '../../components/Footer'

function About() {
  return (
    <div>
      <NavBar />
      <InfoSection {...homeObjTwo} />
      <Footer />
    </div>
  )
}

export default About

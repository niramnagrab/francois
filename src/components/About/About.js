import React from 'react'
import { homeObjTwo } from '../InfoSection/Data'
import InfoSection from '../InfoSection'

function About() {
  return (
    <div>
      <InfoSection {...homeObjTwo} />
    </div>
  )
}

export default About

import React from 'react'
import HeroImage from '../../images/about-hero.png'
import './style.css'

function HeroAbout() {
  return (
    <div className="heroabout">
      <img src={HeroImage} alt="Hero About Image" />
    </div>
  )
}

export default HeroAbout

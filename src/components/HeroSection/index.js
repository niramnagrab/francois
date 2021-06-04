import React, { useState, useEffect, Link } from 'react'
import './heroElements.css'
import HeroImage from '../../images/hero-teacher-computer.png'
import WhiteBackground from '../../images/white-vector-hero.png'
import { StickyContainer, Sticky } from 'react-sticky'
import QRCode from '../../images/qr-code.jpg'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <>
      <div className="heroContainer">
        <img src={WhiteBackground} className="heroVector" />
        <div className="heroLeftArea">
          <h1 className="heroTitle">
            Learn English through football with native, experienced teachers
          </h1>
          <h3 className="heroDescription">
            {' '}
            The online English academy that connects interest with learning to
            enhance results
          </h3>
          <div class="register">
            <div class="info">
              <h3 class="steps-text">Get a Free Trial Class</h3>
              <form action="">
                <input type="text" class="input" placeholder="Your Name" />
                <input type="email" class="input" placeholder="Email" />
                <input type="text" class="input" placeholder="We Chat ID" />
                <button class="buttons">Request Free Trial</button>
              </form>
            </div>
          </div>
        </div>
        <div className="heroRightHomepage">
          <img src={HeroImage} height="680px" width="670px" />
        </div>
        <div className="qr-code">
          {' '}
          <img src={QRCode} width="60px" height="60px" />
        </div>
      </div>
    </>
  )
}

export default HeroSection

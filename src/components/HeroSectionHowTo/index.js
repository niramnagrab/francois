import React, { useState, useEffect, Link } from 'react'
import './heroElements.css'
import HeroImage from '../../images/hero-carlos.png'
import WhiteBackground from '../../images/white-vector-half.png'
import QRCode from '../../images/qr-code.jpg'

const HeroSectionHowTo = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <div className="howtoContainer">
      <img src={WhiteBackground} className="howtoVector" />
      <div className="heroLeft">
        <h1 className="heroTitle">How to start learning with us</h1>
        {/* <h3 className="heroDescription">
          {' '}
          The online English academy that connects interest with learning to
          enhance results
        </h3> */}
      </div>
      <div className="heroRightHow">
        <img
          src={HeroImage}
          className="hero-how"
          height="620px"
          width="400px"
        />
      </div>
      <div className="qr-code">
        {' '}
        <img src={QRCode} width="60px" height="60px" />
      </div>
    </div>
  )
}

export default HeroSectionHowTo

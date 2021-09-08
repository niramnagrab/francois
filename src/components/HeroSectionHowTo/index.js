import React, { useState, useEffect, Link } from 'react'
import './heroElements.css'
import HeroImage from '../../images/hero-carlos1.png'
import WhiteBackground from '../../images/white-vector-half.png'
import QRCode from '../../images/qr-code.jpg'
import { useTranslation } from 'react-i18next'
const HeroSectionHowTo = () => {
  const { t } = useTranslation()

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <div className="howtoContainer">
      <img src={WhiteBackground} className="howtoVector" alt="How To Image" />
      <div className="heroLeft">
        <h1 className="heroTitle">{t('how_to_start_learn')}</h1>
      </div>
      <div className="heroRightHow">
        <img
          src={HeroImage}
          className="hero-how"
          height="300px"
          width="200px"
          alt="Hero Image"
        />
      </div>
      <div className="qr-code">
        {' '}
        <img src={QRCode} width="60px" height="60px" alt="QR Code" />
      </div>
    </div>
  )
}

export default HeroSectionHowTo

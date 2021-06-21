import React, { useState, useEffect, Link } from 'react'
import './heroElements.css'
import HeroImage from '../../images/about-hero.png'
import WhiteBackground from '../../images/white-vector-half.png'
import QRCode from '../../images/qr-code.jpg'
import { useTranslation } from 'react-i18next'
const HeroSectionAbout = () => {
  const { t } = useTranslation()
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <div className="aboutheroContainer">
      <img src={WhiteBackground} className="heroVectorAbout" />
      <div className="heroLeftAbout">
        <h1 className="heroTitle">{t('about_heading')}</h1>
        {/* <h3 className="heroDescription">
          {' '}
          The online English academy that connects interest with learning to
          enhance results
        </h3> */}
      </div>
      <div className="heroRightAbout">
        <img
          className="heroRightAboutImage"
          src={HeroImage}
          height="500px"
          width="500px"
        />
      </div>
      <div className="qr-code">
        {' '}
        <img src={QRCode} width="60px" height="60px" />
      </div>
    </div>
  )
}

export default HeroSectionAbout

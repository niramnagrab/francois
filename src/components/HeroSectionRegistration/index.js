import React, { useState, useEffect, Link } from 'react'
import './heroElements.css'
import HeroImage from '../../images/howto-hero.png'
import WhiteBackground from '../../images/white-vector-hero.png'
import Child from '../../images/child-wave.png'
import QRCode from '../../images/qr-code.jpg'
import { useTranslation } from 'react-i18next'
const HeroSectionRegistration = () => {
  const { t } = useTranslation()
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <div className="heroContainer">
      <img src={WhiteBackground} className="heroVector" />
      <div className="heroLeftRegistration">
        <h1 className="heroTitle">{t('reg_your_interest')}</h1>
        <div class="registration">
          <div class="info">
            <h3 class="steps-text">Get a Free Trial Class</h3>
            <form action="">
              <input type="text" class="input" placeholder="Your Name" />
              <input type="email" class="input" placeholder="Email" />
              <input type="text" class="input" placeholder="We Chat ID" />
              <button class="buttons"> {t('req_free_trail')}</button>
            </form>
          </div>
        </div>
      </div>
      <div className="heroRightRegistration">
        <img src={Child} height="680px" width="670px" />
      </div>
      <div className="qr-code">
        {' '}
        <img src={QRCode} width="60px" height="60px" />
      </div>
    </div>
  )
}

export default HeroSectionRegistration

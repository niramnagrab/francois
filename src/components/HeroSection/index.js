import React, { useState, useEffect, Link } from 'react'
import './heroElements.css'
import HeroImage from '../../images/hero-teacher-computer.png'
import WhiteBackground from '../../images/white-vector-hero.png'
import { StickyContainer, Sticky } from 'react-sticky'
import QRCode from '../../images/qr-code.jpg'
import { useTranslation } from 'react-i18next'

const HeroSection = () => {
  const { t } = useTranslation()
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  const showMessage = (e) => {
    e.preventDefault()
    document.getElementById('Bene').value = ''
    document.getElementById('Email').value = ''
    document.getElementById('WeChatId').value = ''
    document.getElementById('showMessage').innerHTML = t(
      'free_trail_request_success',
    )
  }

  return (
    <>
      <div className="heroContainer">
        <img src={WhiteBackground} className="heroVector" alt="Hero Image" />
        <div className="heroLeftArea">
          <h1 className="heroTitle">{t('home_hero_heading')}</h1>
          <h4 className="heroDescription"> {t('home_hero_sub_heading')}</h4>
          <div className="register">
            <div className="info">
              <h3 className="steps-text">{t('form_title')}</h3>
              <form
                action=""
                name="Get a Free Trial"
                onSubmit={(e) => showMessage(e)}
              >
                <input
                  type="text"
                  className="input"
                  required
                  id="Bene"
                  name="Bene"
                  placeholder={t('subscriber_name')}
                />
                <input
                  type="email"
                  className="input"
                  required
                  id="Email"
                  name="Email"
                  placeholder={t('subscriber_email')}
                />
                <input
                  type="text"
                  className="input"
                  required
                  id="WeChatId"
                  name="WeChatId"
                  placeholder={t('subscriber_wechat')}
                />
                <button className="buttons" aria-label="Trial Class">
                  {t('req_free_trail')}
                </button>
              </form>
            </div>
            <p className="text-success" id="showMessage"></p>
          </div>
        </div>
        <div className="heroRightHomepage">
          <img src={HeroImage} height="680px" width="670px" />
        </div>
        <div className="qr-code">
          {' '}
          <img src={QRCode} width="60px" height="60px" alt="QR Code Image" />
        </div>
      </div>
    </>
  )
}

export default HeroSection

import React, { useState, useEffect, Link } from 'react'
import './heroElements.css'
import HeroImage from '../../images/curriculum_final.png'
import WhiteBackground from '../../images/white-vector-half.png'
import QRCode from '../../images/qr-code.jpg'
import { useTranslation } from 'react-i18next'
const HeroSectionCurriculum = () => {
  const { t } = useTranslation()
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <div className="curriculumContainer">
      <img src={WhiteBackground} className="heroVectorCurriculum" />
      <div className="heroLeftCurriculum">
        <h1 className="heroTitle">{t('curr_hero_head')}</h1>
        {/* <h3 className="heroDescription">
          {' '}
          The online English academy that connects interest with learning to
          enhance results
        </h3> */}
      </div>
      <div className="heroRightCurriculumImage">
        <img
          className="curriculum-hero"
          src={HeroImage}
          height="550px"
          width="650px"
        />
      </div>
      <div className="qr-code">
        {' '}
        <img src={QRCode} width="60px" height="60px" />
      </div>
    </div>
  )
}

export default HeroSectionCurriculum

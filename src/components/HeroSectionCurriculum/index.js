import React, { useState, useEffect, Link } from 'react'
import './heroElements.css'
import HeroImage from '../../images/philosophy-teacher.png'
import WhiteBackground from '../../images/white-vector-half.png'
import QRCode from '../../images/qr-code.jpg'


const HeroSectionCurriculum = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <div className="curriculumContainer">
      <img src={WhiteBackground} className="heroVectorCurriculum" />
      <div className="heroLeftCurriculum">
        <h1 className="heroTitle">
          We connect interest with learning and teach English through football
        </h1>
        {/* <h3 className="heroDescription">
          {' '}
          The online English academy that connects interest with learning to
          enhance results
        </h3> */}
      </div>
      <div className="heroRightCurriculum">
        <img src={HeroImage} height="280px" width="470px" />
      </div>
      <div className="qr-code">
        {' '}
        <img src={QRCode} width="60px" height="60px" />
      </div>
    </div>
  )
}

export default HeroSectionCurriculum

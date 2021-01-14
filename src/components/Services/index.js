import React from 'react'
import Icon3 from '../../images/image7.svg'
import Icon8 from '../../images/image8.svg'
import Icon9 from '../../images/image9.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="social-media">
      <ServicesH1>
        Some of my latest Youtube videos and social media posts
      </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <iframe
            width="350"
            height="250"
            src="https://www.youtube.com/embed/TJXxhTgKrso"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </ServicesCard>
        <ServicesCard>
          <iframe
            width="350"
            height="250"
            src="https://www.youtube.com/embed/qVA4frN2X_0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </ServicesCard>
        <ServicesCard>
          <iframe
            width="350"
            height="250"
            src="https://www.youtube.com/embed/b3TwsqCTVc4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services

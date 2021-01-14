import React, { useState, useEffect, Link } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements'
import Typing from 'react-typing-animation'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Join my Youtube channel where I talk everything coffee, tech and
          lifestyle!
        </HeroH1>

        <HeroBtnWrapper>
          <Button
            target="_blank"
            onClick={(e) =>
              (window.location =
                'https://www.youtube.com/channel/UCXZEUlSUpG_aM-bcQr1Ej8A')
            }
          >
            Visit Channel
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

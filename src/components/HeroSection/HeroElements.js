import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'



export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 830px;
  position: relative;
  z-index: 1;
  margin-top: -80px;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%); */
    z-index: 2;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgb(94 202 126);
  /* background: url('../../images/white-background.png'); */
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  display: block;

  @media screen and (max-width: 480px) {
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
  }
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 30px;
  text-align: center;
  width: 500px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 50px;
    font-size: 25px;
    width: 95%;
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 80%;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`

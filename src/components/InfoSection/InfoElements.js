import styled from 'styled-components'

export const InfoContainer = styled.div`
  color: '#01bf71';
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 660px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 0 0 30px;
  justify-content: center;
`

export const InfoRow = styled.div`
  display: grid;
  /* grid-auto-columns: minmax(auto, 1fr); */
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col 1 col2'` : `'col2 col1'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col2' 'col2 col2'`};
  }
  @media screen and (max-width: 480px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1' 'col2' 'col2' 'col2'`};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  /* padding: 0 15px; */
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  /* padding: 0 15px; */
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 90%;
  padding-top: 0;
  padding-top: 10px;
  text-align: justify;
  text-justify: inter-word;
`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  /* line-height: 16px; */
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  /* width: 90%; */

  @media screen and (max-width: 480px) {
    font-size: 24px;
    width: 100%;
  }
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 25px;
    width: 100%;
  }
`

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  width: 100%;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  margin-left: 20px;
  /* margin-top: 20px; */
`

export const Img = styled.img`
  width: 70%;
  height: 400px;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 10px;

  @media screen and (max-width: 480px) {
    height: 300px;
    width: 250px;
  }
`

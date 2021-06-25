import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './levels.css'
import { useTranslation } from 'react-i18next'
import Preliminary from '../../images/Preliminary.png'
import Preintermediate from '../../images/Preintermediate.png'
import Intermediate from '../../images/Intermediate.png'
import Preadvanced from '../../images/Preadvanced.png'
import Advanced from '../../images/Advanced.png'

function LevelComponent(props) {
  const { t } = useTranslation()
  const [levelParagraph, setLevelParagraph] = useState('')
  const [imagePath, setImagePath] = useState(Preliminary)

  const p1 = 'our-curriculum_p1'
  const p2 = 'our-curriculum_p2'
  const p3 = 'our-curriculum_p3'
  const p4 = 'our-curriculum_p4'
  const p5 = 'our-curriculum_p5'

  const imgPath = 'imgs/Preintermediate.png'

  useEffect(() => {
    setLevelParagraph(p1)
    return () => {}
  }, [])

  const changeLevelText = (id) => {
    if (id === 1) {
      setLevelParagraph(p1)
      setImagePath(Preliminary)
    } else if (id === 2) {
      setLevelParagraph(p2)
      setImagePath(Preintermediate)
    } else if (id === 3) {
      setLevelParagraph(p3)
      setImagePath(Intermediate)
    } else if (id === 4) {
      setLevelParagraph(p4)
      setImagePath(Preadvanced)
    } else if (id === 5) {
      setLevelParagraph(p5)
      setImagePath(Advanced)
    }
  }

  return (
    <div className="last-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="upper-section">
              <h1 className="title-text tex-center">{t('select_level')}</h1>
              <div className="section-buttons">
                <button
                  className="steps-text primary indexBtn btn2"
                  id="2"
                  onClick={() => changeLevelText(1)}
                >
                  {t('preli')}
                </button>
                <button
                  className="steps-text primary indexBtn btn2"
                  id="2"
                  onClick={() => changeLevelText(2)}
                >
                  {t('preint')}
                </button>
                <button
                  className="steps-text primary indexBtn btn3"
                  id="3"
                  onClick={() => changeLevelText(3)}
                >
                  {t('inter')}
                </button>
                <button
                  className="steps-text primary indexBtn btn4"
                  id="4"
                  onClick={() => changeLevelText(4)}
                >
                  {t('prea')}
                </button>
                <button
                  className="steps-text primary indexBtn btn5 active"
                  id="5"
                  onClick={() => changeLevelText(5)}
                >
                  {t('advan')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="left">
              <div className="img-resize">
                <img
                  src={imagePath}
                  className="slider-image"
                  alt="football img"
                  width="40"
                  height="40"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="right">
              <p id="paraText" className="text-justified">
                {t(levelParagraph)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LevelComponent

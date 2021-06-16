import React from 'react'
import './PhilosophyElements.css'
import Inspire from '../../images/inspire.png'
import Engage from '../../images/engage.png'
import Achieve from '../../images/achieve.png'
import Child from '../../images/philosophy-child.png'
import { useTranslation } from 'react-i18next'
const Philosophy = () => {
  const { t } = useTranslation()
  return (
    <div className="overall">
      <div class="teaching-philosophy">
        <div className="team-intro">
          {' '}
          <h2 class="header">{t('curr_tec_phi')}</h2>
        </div>

        <ul class="folder">
          <li>
            <div className="icons-div image-margin">
              <img src={Inspire} />
              <p>{t('curr_ins')}</p>
            </div>
          </li>
          <li>
            <div className="icons-div">
              <img src={Engage} />
              <p>{t('curr_eng')}</p>
            </div>
          </li>
          <li>
            <div className="icons-div">
              <img src={Achieve} />
              <p>{t('curr_ach')}</p>
            </div>
          </li>
        </ul>
        <div className="our-philosophy">
          <div className="philosophy-content">
            <h1 class="title-text-center">{t('curr_ins_head')}</h1>
            <p class="text-justified-philosophy">{t('curr_ins_txt')}</p>
            <button type="button" class="buttons">
              {t('curr_btn_txt')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Philosophy

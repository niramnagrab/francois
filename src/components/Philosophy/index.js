import React from 'react'
import './PhilosophyElements.css'
import Inspire from '../../images/inspire.png'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import Engage from '../../images/engage.png'
import Achieve from '../../images/achieve.png'
import Child from '../../images/philosophy-child.png'
import { useTranslation } from 'react-i18next'

const Philosophy = () => {
  const { t } = useTranslation()
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <div className="overall">
      <div className="teaching-philosophy">
        <div className="team-intro">
          {' '}
          <h2 className="header">{t('curr_tec_phi')}</h2>
        </div>

        <ul className="folder">
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
            <h1 className="title-text-center-philosophy">
              {t('curr_ins_head')}
            </h1>
            <p className="text-justified-philosophy">{t('curr_ins_txt')}</p>
            <Link to="/registration" onClick={toggleHome}>
              {' '}
              <button type="button" className="buttons">
                {t('curr_btn_txt')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Philosophy

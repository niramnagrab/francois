import React from 'react'
import './TeamElements.css'
import Joely from '../../images/joely2.JPG'
import Carlos from '../../images/carlos2.JPG'
import Ben from '../../images/ben.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { animateScroll as scroll } from 'react-scroll'

const Team = () => {
  const { t } = useTranslation()

  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <>
      <div>
        <div className="container">
          <div className="team-intro">
            <h2>{t('our_team')}</h2>
            <p className="subtitle-center-bold">{t('our_team_txt')}</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card d-flex mx-auto">
                <div className="card-image">
                  <img src={Joely} className="img-fluid d-flex mx-auto" />
                </div>
                <div className="card-text">
                  <div className="subtitle-center-bold">
                    {t('teacher_joely')}
                  </div>

                  <p className="text-justified">{t('teacher_joely_txt')}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card d-flex mx-auto">
                <div className="card-image">
                  <img src={Carlos} className="img-fluid d-flex mx-auto" />
                </div>
                <div className="card-text">
                  <div className="subtitle-center-bold">
                    {t('teacher_carlos')}
                  </div>
                  <p className="text-justified">{t('teacher_carlos_txt')}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card d-flex mx-auto">
                <div className="card-image">
                  <img src={Ben} className="img-fluid d-flex mx-auto" />
                </div>
                <div className="card-text">
                  <div className="subtitle-center-bold">{t('teacher_ben')}</div>
                  <p className="text-justified">{t('teacher_ben_txt')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trial-class">
        <Link to="/registration" onClick={toggleHome}>
          <button className="buttons">{t('how_to_btn')}</button>
        </Link>
      </div>
    </>
  )
}

export default Team

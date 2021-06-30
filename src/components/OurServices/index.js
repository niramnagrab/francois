import React from 'react'
import './ServicesElements.css'
import Service1 from '../../images/service1.svg'
import Service2 from '../../images/service2.svg'
import Service3 from '../../images/service3.svg'
import { animateScroll as scroll } from 'react-scroll'

import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
function OurServices() {
  const { t } = useTranslation()

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <div className="centered-div col-md-12 text-center custom_margin_top description">
      <div className="team-intro">
        <h2 className="services">{t('about_our_services')}</h2>
      </div>
      <p className="subtitle-center-bold">{t('services_title')}</p>

      <Link to="/tours" style={{ textDecoration: 'none' }} onClick={toggleHome}>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow text-center p-4 services card-height">
              <div className="justify-content-center">
                <img
                  src={Service1}
                  className="service-images"
                  alt="lan"
                  height="58px"
                  width="55px"
                />
              </div>
              <h5 className="subtitle-center-bold mt-4">
                {t('about_inspired_football')}
              </h5>
              <p className="text-justified mb-3">
                {t('about_inspired_card_txt')}
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow text-center p-4 services card-height ">
              <div className="justify-content-center">
                <img
                  src={Service2}
                  className="service-images"
                  alt="lan"
                  height="58px"
                  width="55px"
                />
              </div>

              <h5 className="subtitle-center-bold mt-4">
                {t('about_european_tours')}
              </h5>
              <p className="text-justified mb-3">
                {t('about_european_tours_card_txt')}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow text-center p-4 services card-height">
              <div className="justify-content-center">
                <img
                  src={Service3}
                  className="service-images"
                  alt="lan"
                  height="58px"
                  width="65px"
                />
              </div>

              <h5 className="subtitle-center-bold mt-4">{t('about_coach')}</h5>
              <p className="text-justified mb-3">
                {t('about_coach_play_card_txt')}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default OurServices

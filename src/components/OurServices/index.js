import React from 'react'
import './ServicesElements.css'
import Service1 from '../../images/service1.svg'
import Service2 from '../../images/service2.svg'
import Service3 from '../../images/service3.svg'
import { useTranslation } from 'react-i18next';
function OurServices() {
  const { t } = useTranslation();
  return (
    <div>
      <div class="centered-div col-md-12 text-center custom_margin_top description">
        <div className="team-intro">
          <h2 class="services">{t('about_our_services')}</h2>
        </div>
        <p class="subtitle-center-bold">
        At SP Sports Academy we provide the following three services
        </p>

        <div class="row">
          <div class="col-md-4">
            <div class="card shadow text-center p-4 services">
              <div class="justify-content-center">
                <img
                  src={Service1}
                  className="service-images"
                  alt="lan"
                  height="58px"
                  width="55px"
                />
              </div>

              <h5 class="subtitle-center-bold mt-4">
                {t('about_inspired_football')}
                
              </h5>
              <p class="text-justified mb-3">
                {t('about_inspired_card_txt')}
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow text-center p-4 services">
              <div class="justify-content-center">
                <img
                  src={Service2}
                  className="service-images"
                  alt="lan"
                  height="58px"
                  width="55px"
                />
              </div>

              <h5 class="subtitle-center-bold mt-4">{t('about_european_tours')}</h5>
              <p class="text-justified mb-3">
                {t('about_european_tours_card_txt')}
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card shadow text-center p-4 services">
              <div class="justify-content-center">
                <img
                  src={Service3}
                  className="service-images"
                  alt="lan"
                  height="58px"
                  width="65px"
                />
              </div>

              <h5 class="subtitle-center-bold mt-4">
                {t('about_coach')}
                
              </h5>
              <p class="text-justified mb-3">
                {t('about_coach_play_card_txt')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices

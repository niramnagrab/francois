import React from 'react'
import './ToursElements.css'
import UK from '../../images/UK.png'
import Spain from '../../images/spain.png'
import Italy from '../../images/Italy.png'
import { useTranslation } from 'react-i18next'
function TourOptions() {
  const { t } = useTranslation()
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center"></div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="title-text">{t('our_tour_text')}</h2>
          </div>
          <div className="col-md-4 countries">
            <img src={UK} alt="uk photo" width="100%" />
            <h2 className="title-text">{t('uk')}</h2>
            <p className="text-justified-tours">{t('uk_text')}</p>
          </div>
          <div className="col-md-4 countries">
            <img src={Spain} alt="spain photo" width="100%" />
            <h2 className="title-text">{t('spain')}</h2>
            <p className="text-justified-tours">{t('spain_text')}</p>
          </div>
          <div className="col-md-4 countries">
            <img src={Italy} alt="italy picture" width="100%" />
            <h2 className="title-text">{t('italy')}</h2>
            <p className="text-justified-tours">{t('italy_text')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourOptions

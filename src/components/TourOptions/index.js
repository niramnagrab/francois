import React from 'react'
import './ToursElements.css'
import UK from '../../images/UK.png'
import Spain from '../../images/spain.png'
import Italy from '../../images/Italy.png'
import { useTranslation } from 'react-i18next';
function TourOptions() {
  const { t } = useTranslation();
  return (
    <div>
      <div class="container">
        <div class="row justify-content-center"></div>
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="title-text">{t('our_tour_text')}</h3>
          </div>
          <div class="col-md-4 countries">
            <img src={UK} alt="uk" width="100%" />
            <h2 class="title-text">{t('uk')}</h2>
            <p class="text-justified-tours">
              {t('uk_text')}
            </p>
          </div>
          <div class="col-md-4 countries">
            <img src={Spain} alt="spain" width="100%" />
            <h2 class="title-text">{t('spain')}</h2>
            <p class="text-justified-tours">
              {t('spain_text')}
            </p>
          </div>
          <div class="col-md-4 countries">
            <img src={Italy} alt="italy" width="100%" />
            <h2 class="title-text">{t('italy')}</h2>
            <p class="text-justified-tours">
              {t('italy_text')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourOptions

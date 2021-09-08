import React from 'react'
import './SportsAcademyElements.css'
import { useTranslation } from 'react-i18next'

function SportsAcademy() {
  const { t } = useTranslation()
  return (
    <div className="aboutcontainer">
      <h2>{t('about_sp_academi')}</h2>
      <div className="aboutmainsection">
        <p className="aboutintro">{t('about_Sp_academi_body')}</p>
        <div className="aboutlist">
          <p className="reasonslist"> {t('about_football_dev_tours')}</p>
          <p className="reasonslist">{t('about_inspired_football')}</p>
          <p className="reasonslist">{t('about_coach')}</p>
        </div>
        <div>
          <p className="aboutintro">{t('about_sp_service')}</p>
        </div>
      </div>
    </div>
  )
}

export default SportsAcademy

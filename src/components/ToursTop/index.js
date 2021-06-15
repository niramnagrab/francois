import React from 'react'
import './tourstop.css'
import { useTranslation } from 'react-i18next';
function ToursTop() {
  const { t } = useTranslation();
  return (
    <div className="tourstop">
      <div className="tourstopdescription">
      <h1>{t('tour_coach')} </h1>
      <p>{t('other_serv')}</p>
      </div>
    </div>
  )
}

export default ToursTop

import React from 'react'
import './ToursChoices.css'
import { useTranslation } from 'react-i18next'
function ToursChoices() {
  const { t } = useTranslation()
  return (
    <div className="container tours-choices">
      <div className="row">
        <div className="col-md-5 bg2 col-12 margin_left left-container">
          {/* google translator */}
          <h2 className="title-text">{t('tour')}</h2>
          <div className="margin_left_zero">
            <p className="text-justified-tours">{t('tour_text')}</p>
          </div>
        </div>
        <div className="col-md-5 bg3 margin_left col-12 right-container">
          <h2 className="title-text">{t('coach_play')}</h2>
          <div className="margin_left_zero">
            <p className="text-justified-tours">{t('coach_play_text')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToursChoices

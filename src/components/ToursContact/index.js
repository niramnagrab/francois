import React from 'react'
import CoachPlay from '../../images/coach-play.jpg'
import { useTranslation } from 'react-i18next'
function ToursContact() {
  const { t } = useTranslation()
  return (
    <div className="container">
      <div className="row custom_margin_top">
        <div className="col-md-6">
          <img src={CoachPlay} alt="Our coaching plan" width="100%" />
        </div>
        <div className="col-md-6">
          <h3 className="title-text">{t('coach_and_play')}</h3>
          <p className="text-justified">{t('coach_play_text')}</p>
          <div className="mt-3 mb-5 text-center">
            <h5>{t('email_us')}</h5>
            <h6 className="text-secondary">
              info@englishinspiredbyfootballsp.com
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToursContact

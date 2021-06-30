import React from 'react'
import CoachPlay from '../../images/coach-play.jpg'
import { useTranslation } from 'react-i18next'
function ToursContact() {
  const { t } = useTranslation()
  return (
    <div className="container">
      <div className="row custom_margin_top">
        <div className="col-md-6">
          <img src={CoachPlay} alt="mock" width="100%" />
        </div>
        <div className="col-md-6">
          <h3 className="title-text">{t('coach_and_play')}</h3>
          <p className="text-justified">{t('coach_play_text')}</p>
          <div className="row mt-3 mb-5">
            <div className="col-md-6 col-6 contact">
              <div className="row">
                <div className="col-md-3">
                  <i className="fas fa-phone-alt fa-2x"></i>
                </div>
                <div className="col-md-9">
                  <h5>Call Us</h5>
                  <h6 className="text-secondary">+44 0747 137 0804</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-6 contact">
              <div className="row">
                <div className="col-md-3">
                  <i className="fas fa-envelope fa-2x"></i>
                </div>
                <div className="col-md-9">
                  <h5>E-mail Us</h5>
                  <h6 className="text-secondary">yourmail@gmail.com</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToursContact

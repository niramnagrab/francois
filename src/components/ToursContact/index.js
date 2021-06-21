import React from 'react'
import CoachPlay from '../../images/coach-play.jpg'
import { useTranslation } from 'react-i18next'
function ToursContact() {
  const { t } = useTranslation()
  return (
    <div class="container">
      <div class="row custom_margin_top">
        <div class="col-md-6">
          <img src={CoachPlay} alt="mock" width="100%" />
        </div>
        <div class="col-md-6">
          <h3 class="title-text">{t('coach_and_play')}</h3>
          <p class="text-justified">{t('coach_play_text')}</p>
          <div class="row mt-3 mb-5">
            <div class="col-md-6 col-6 contact">
              <div class="row">
                <div class="col-md-3">
                  <i class="fas fa-phone-alt fa-2x"></i>
                </div>
                <div class="col-md-9">
                  <h5>Call Us</h5>
                  <h6 class="text-secondary">+44 0747 137 0804</h6>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-6 contact">
              <div class="row">
                <div class="col-md-3">
                  <i class="fas fa-envelope fa-2x"></i>
                </div>
                <div class="col-md-9">
                  <h5>E-mail Us</h5>
                  <h6 class="text-secondary">yourmail@gmail.com</h6>
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

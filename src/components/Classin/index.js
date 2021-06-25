import React from 'react'
import './ClassinComponents.css'
import Kids from '../../images/kids-learning.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
function Classin() {
  const { t } = useTranslation()
  return (
    <div class="classin-container">
      <div class="classin-content">
        <h1 class="classin-title pt-3">{t('how_to_classin_head')}</h1>
        <p class="text-justified-classin">{t('how_to_classin_txt')}</p>
        <Link to="/registration">
          {' '}
          <button type="button" class="buttons font-weight-bold">
            {t('how_to_btn')}
          </button>{' '}
        </Link>
      </div>
    </div>
  )
}

export default Classin

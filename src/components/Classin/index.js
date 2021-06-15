import React from 'react'
import './ClassinComponents.css'
import Kids from '../../images/kids-learning.jpg'
import { useTranslation } from 'react-i18next';
function Classin() {
  const { t } = useTranslation();
  return (
    <div class="classin-container">
      <div class="classin-content">
        <h1 class="classin-title pt-3">
          {t('how_to_classin_head')}
        </h1>
        <p class="text-justified">
          {t('how_to_classin_txt')}
        </p>
        <button type="button" class="buttons font-weight-bold">
          {t('how_to_btn')}
        </button>
      </div>
    </div>
  )
}

export default Classin

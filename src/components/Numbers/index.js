import React from 'react'
import './NumbersElements.css'
import { useTranslation } from 'react-i18next';

function Numbers() {
  const { t } = useTranslation();
  return (
    <div>
      <div class="numbers-header">
        <h3 class="title-text">
          { t('We focus on teaching students from aged 10 and above') }
        </h3>
        <div class="numbers">
          <div class="number1">
            <p class="numbers-text" id="0101">
              100%
            </p>
            <p class="subtitle-center-bold">{t('hm_100_sub')}</p>
          </div>
          <div class="number1">
            <p class="numbers-text" id="0102">
              {t('hm_5year')}
            </p>
            <p class="subtitle-center-bold">
              {t('hm_5year_sub')}
            </p>
          </div>
          <div class="number1">
            <p class="numbers-text">UEFA</p>
            <p class="subtitle-center-bold">
              {t('hm_uefa_sub')}
            </p>
          </div>
          <div class="number1">
            <p class="numbers-text" id="0103">
              150
            </p>
            <p class="subtitle-center-bold">
              {t('hm_150_sub')}
             
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Numbers

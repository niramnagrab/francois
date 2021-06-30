import React from 'react'
import './NumbersElements.css'
import { useTranslation } from 'react-i18next'

function Numbers() {
  const { t } = useTranslation()
  return (
    <div>
      <div className="numbers-header">
        <h3 className="title-text">
          {t('We focus on teaching students from aged 10 and above')}
        </h3>
        <div className="numbers">
          <div className="number1">
            <p className="numbers-text" id="0101">
              100%
            </p>
            <p className="subtitle-center-bold">{t('hm_100_sub')}</p>
          </div>
          <div className="number1">
            <p className="numbers-text" id="0102">
              {t('hm_5year')}
            </p>
            <p className="subtitle-center-bold">{t('hm_5year_sub')}</p>
          </div>
          <div className="number1">
            <p className="numbers-text">UEFA</p>
            <p className="subtitle-center-bold">{t('hm_uefa_sub')}</p>
          </div>
          <div className="number1">
            <p className="numbers-text" id="0103">
              150
            </p>
            <p className="subtitle-center-bold">{t('hm_150_sub')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Numbers

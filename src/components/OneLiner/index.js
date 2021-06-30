import React from 'react'
import './OneLinerElements.css'
import { useTranslation } from 'react-i18next'
const OneLiner = () => {
  const { t } = useTranslation()
  return (
    <div className="one-liner">
      <p>{t('home_promo_heading')}</p>
    </div>
  )
}

export default OneLiner

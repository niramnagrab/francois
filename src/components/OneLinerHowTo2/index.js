import React from 'react'
import './OneLinerHowTo2.css'
import { useTranslation } from 'react-i18next'
const OneLinerHowTo2 = () => {
  const { t } = useTranslation()
  return (
    <div className="one-liner">
      <p>{t('curr_one_how_to_2')}</p>
    </div>
  )
}

export default OneLinerHowTo2

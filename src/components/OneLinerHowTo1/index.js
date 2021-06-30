import React from 'react'
import './OneLinerHowTo1.css'
import { useTranslation } from 'react-i18next'
const OneLinerHowTo1 = () => {
  const { t } = useTranslation()
  return (
    <div className="one-liner">
      <p>{t('curr_one_howto')}</p>
    </div>
  )
}

export default OneLinerHowTo1

import React from 'react'
import './OneLinerElements.css'
import { useTranslation } from 'react-i18next';
const OneLinerAbout = () => {
  const { t } = useTranslation();
  return (
    <div class="one-liner">
      <p>
        {t('one_liner_about')}
      </p>
    </div>
  )
}

export default OneLinerAbout

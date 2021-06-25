import React from 'react'
import './OneLinerBottom.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function OneLinerBottom() {
  const { t } = useTranslation()
  return (
    <div class="one-liner action">
      <p>{t('home_one_liner_bottom')}</p>
      <div class="trial-class">
        <Link to="/registration">
          <button class="buttons">{t('how_to_btn')}</button>
        </Link>
      </div>
    </div>
  )
}

export default OneLinerBottom

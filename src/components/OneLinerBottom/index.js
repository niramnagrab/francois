import React from 'react'
import './OneLinerBottom.css'
import { useTranslation } from 'react-i18next';
function OneLinerBottom() {
  const { t } = useTranslation();
  return (
    <div>
      <div class="one-liner action">
        <p>
          {t('home_one_liner_bottom')}
         
        </p>
        <div class="trial-class">
          <button class="buttons">{t('how_to_btn')}</button>
        </div>
      </div>
    </div>
  )
}

export default OneLinerBottom

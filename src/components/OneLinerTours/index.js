import React from 'react'
import './OneLinerTours.css'
import { useTranslation } from 'react-i18next';
function OneLinerTours() {
  const { t } = useTranslation();
  return (
    <div>
      <div class="one-liner">
        <p>
          {t('one_line_tours_text')}
         
        </p>
      </div>
    </div>
  )
}

export default OneLinerTours

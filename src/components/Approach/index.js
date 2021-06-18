import React from 'react'
import './ApproachElements.css'
import Step1 from '../../images/step4.png'
import Step2 from '../../images/step3.png'
import { useTranslation } from 'react-i18next'
function Approach() {
  const { t } = useTranslation()
  return (
    <div>
      <div class="txt3">
        <div className="team-intro">
          <h2 class="header">{t('how_to_appr_head')}</h2>
        </div>
        {/* <p class="subtitle-center-bold">
          Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
          consectetur.
        </p> */}

        <div className="sect5">
          <div class="class-time">
            <img class="mob1" src={Step2} alt="class-approach" />
            <h3 class="approach-title">{t('how_to_20_minutes_head')}</h3>
            <p class="text-center-simple">{t('how_to_20_minutes_txt')}</p>
          </div>

          <div class="class-time">
            <img
              class="mob1"
              src={Step1}
              width="59px"
              height="59px"
              alt="class-approach"
            />
            <h3 class="approach-title">{t('how_to_25_minutes_cnted')}</h3>
            <p class="text-center-simple">{t('how_to_25_minutes_cnted_txt')}</p>
          </div>

          <div class="class-time">
            <img class="mob1" src={Step2} alt="class-approach" />
            <h3 class="approach-title">{t('how_to_15_be')}</h3>
            <p class="text-center-simple">{t('how_to_15_bef_txt')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Approach

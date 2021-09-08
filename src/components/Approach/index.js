import React from 'react'
import './ApproachElements.css'
import Step1 from '../../images/step4.png'
import Step2 from '../../images/step3.png'
import { useTranslation } from 'react-i18next'
function Approach() {
  const { t } = useTranslation()
  return (
    <div>
      <div className="txt3">
        <div className="team-intro">
          <h2 className="header">{t('how_to_appr_head')}</h2>
        </div>
        {/* <p className="subtitle-center-bold">
          Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet,
          consectetur.
        </p> */}

        <div className="sect5">
          <div className="class-time">
            <img className="mob1" src={Step2} alt="Class Approach" />
            <h3 className="approach-title">{t('how_to_20_minutes_head')}</h3>
            <p className="text-center-simple">{t('how_to_20_minutes_txt')}</p>
          </div>

          <div className="class-time">
            <img
              className="mob1"
              src={Step1}
              width="59px"
              height="59px"
              alt="Class Approach"
            />
            <h3 className="approach-title">{t('how_to_25_minutes_cnted')}</h3>
            <p className="text-center-simple">
              {t('how_to_25_minutes_cnted_txt')}
            </p>
          </div>

          <div className="class-time">
            <img
              className="mob1"
              src={Step2}
              alt="class-approach"
              alt="Our Steps"
            />
            <h3 className="approach-title">{t('how_to_15_be')}</h3>
            <p className="text-center-simple">{t('how_to_15_bef_txt')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Approach

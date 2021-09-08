import React from 'react'
import './WhyElements.css'
import Value from '../../images/value.svg'
import Idea from '../../images/idea.svg'
import Inspiration from '../../images/inspiration.svg'
import Team from '../../images/team.svg'
import Goal from '../../images/goal.svg'
import { useTranslation } from 'react-i18next'

const WhyUs = () => {
  const { t, i18n } = useTranslation()
  return (
    <div className="why-us">
      <div className="team-intro">
        {' '}
        <h2 className="header">{t('Why choose us')}</h2>
      </div>

      <div className="why-boxes">
        <div className="why-box">
          <img
            src={Value}
            className="why-icon"
            width="50px"
            height="50px"
            alt="Why Choose Us"
          />
          <h3 className="subtitle-center-bold">
            {t('Professionally developed system')}
          </h3>
          <p className="text-center-simple">{t('why_text_1')}</p>
        </div>

        <div className="why-box">
          <img
            src={Idea}
            className="why-icon"
            width="50px"
            height="50px"
            alt="Why Choose Us"
          />
          <h3 className="subtitle-center-bold">{t('why_text_2_title')}</h3>
          <p className="text-center-simple">{t('why_text_2_body')}</p>
        </div>

        <div className="why-box">
          <img
            src={Inspiration}
            className="why-icon"
            width="50px"
            height="50px"
            alt="Why Choose Us"
          />
          <h3 className="subtitle-center-bold">{t('why_text_3')}</h3>
          <p className="text-center-simple">{t('why_text_3_body')}</p>
        </div>

        <div className="why-box">
          <img
            src={Team}
            className="why-icon"
            width="50px"
            height="50px"
            alt="Why Choose Us"
          />
          <h3 className="subtitle-center-bold">{t('why_text_4')}</h3>
          <p className="text-center-simple">{t('why_text_4_body')}</p>
        </div>

        <div className="why-box">
          <img
            src={Goal}
            className="why-icon"
            width="50px"
            height="50px"
            alt="Why Choose Us"
          />
          <h3 className="subtitle-center-bold">{t('why_text_5')}</h3>
          <p className="text-center-simple">{t('why_text_5_body')}</p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs

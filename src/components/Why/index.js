import React from 'react'
import './WhyElements.css'
import Value from '../../images/value.svg'
import Idea from '../../images/idea.svg'
import Inspiration from '../../images/inspiration.svg'
import Team from '../../images/team.svg'
import Goal from '../../images/goal.svg'
import { useTranslation } from 'react-i18next';

const WhyUs = () => {
  const { t, i18n } = useTranslation();
  return (
    <div class="why-us">
      {/* <!-- <img class="why-vector" src="images/vector2.png" alt="" /> --> */}
      <div class="team-intro">
        {' '}
        <h2 className="header">{ t('Why choose us')}</h2>
      </div>

      <div class="why-boxes">
        <div class="why-box">
          <img src={Value} class="why-icon" width="50px" height="50px" alt="" />
          <h3 class="subtitle-center-bold">{ t('Professionally developed system') }</h3>
          <p class="text-center-simple">
            { t('why_text_1')}
          </p>
        </div>

        <div class="why-box">
          <img src={Idea} class="why-icon" width="50px" height="50px" alt="" />
          <h3 class="subtitle-center-bold">
            {t('why_text_2_title')}
           
          </h3>
          <p class="text-center-simple">
            {t('why_text_2_body')}
            
          </p>
        </div>

        <div class="why-box">
          <img
            src={Inspiration}
            class="why-icon"
            width="50px"
            height="50px"
            alt=""
          />
          <h3 class="subtitle-center-bold">{t('why_text_3')}</h3>
          <p class="text-center-simple">
           {t('why_text_3_body')}
          </p>
        </div>

        <div class="why-box">
          <img src={Team} class="why-icon" width="50px" height="50px" alt="" />
          <h3 class="subtitle-center-bold">{t('why_text_4')}</h3>
          <p class="text-center-simple">
          {t('why_text_4_body')}
          </p>
        </div>

        <div class="why-box">
          <img src={Goal} class="why-icon" width="50px" height="50px" alt="" />
          <h3 class="subtitle-center-bold">{t('why_text_5')}</h3>
          <p class="text-center-simple">
           {t('why_text_5_body')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs

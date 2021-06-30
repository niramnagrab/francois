import React from 'react'
import './IndexElements.css'
import Number1 from '../../images/1.svg'
import Number2 from '../../images/2.svg'
import Number3 from '../../images/3.svg'
import Number4 from '../../images/4.svg'
import { useTranslation } from 'react-i18next'
const Steps = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="container1">
        <div className="team-intro">
          <h2>{t('how_to_step_txt')}</h2>
          <p className="subtitle-center-bold">{t('how_to_step_sub_txt')}</p>
        </div>
        <div className="sect1">
          <ul className="contain">
            <li className="steps">
              <img src={Number1} alt="" />
              <h3 className="subtitle-center-bold">{t('how_to_register')}</h3>
              <p className="text-justified">{t('how_to_register_txt')}</p>
            </li>
            <li className="steps">
              <img src={Number2} alt="" />
              <h3 className="subtitle-center-bold">{t('how_to_we_cnt')}</h3>
              <p className="text-justified">{t('how_to_we_cnt_txt')}</p>
            </li>
            <li className="steps">
              <img src={Number3} alt="" />
              <h3 className="subtitle-center-bold">
                {t('how_to_download_classin')}
              </h3>
              <p className="text-justified">
                {t('how_to_download_classin_txt')}
              </p>
            </li>

            <li className="steps">
              <img src={Number4} alt="" />
              <h3 className="subtitle-center-bold">{t('how_to_allocate')}</h3>
              <p className="text-justified">{t('how_to_allocate_txt')}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Steps

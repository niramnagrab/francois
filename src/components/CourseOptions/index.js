import React from 'react'
import './CourseElements.css'
import DownArrow from '../../images/down.png'
import { useTranslation } from 'react-i18next'
function CourseOptions() {
  const { t } = useTranslation()
  return (
    <div className="boxes">
      <div className="team-intro">
        <h2 className="header">{t('curr_course_head')}</h2>
      </div>
      <div className="container4">
        <div className="div1">
          <h3 className="title-text">{t('opt_1')}</h3>
          <p className="course-info">{t('opt_2classes')}</p>
          {/* <img src={DownArrow} width="60px" height="60px" /> */}
          <p className="course-info">{t('opt_25minute')}</p>
          {/* <img src={DownArrow} width="60px" height="60px" /> */}
          <p className="course-info">{t('opt_11week')}</p>
        </div>
        <div className="div2">
          <h3 className="title-text">{t('opt_2')}</h3>
          <p className="course-info">{t('opt_3classes')}</p>
          {/* <img src={DownArrow} width="60px" height="60px" /> */}
          <p className="course-info">{t('opt_25minute')}</p>
          {/* <img src={DownArrow} width="60px" height="60px" /> */}
          <p className="course-info">{t('opt_11week')}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseOptions

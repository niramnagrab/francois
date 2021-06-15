import React from 'react'
import './CourseElements.css'
import DownArrow from '../../images/down.png'
import { useTranslation } from 'react-i18next';
function CourseOptions() {
  const { t } = useTranslation();
  return (
    <div class="boxes">
      <div className="team-intro">
        <h2 class="header">{t('curr_course_head')}</h2>
      </div>
      <div class="container4">
        <div class="div1">
          <h3 class="title-text">{t('opt_1')}</h3>
          <p class="course-info">{t('opt_2classes')}</p>
          {/* <img src={DownArrow} width="60px" height="60px" /> */}
          <p class="course-info">{t('opt_25minute')}</p>
          {/* <img src={DownArrow} width="60px" height="60px" /> */}
          <p class="course-info">{t('opt_11week')}</p>
        </div>
        <div class="div2">
          <h3 class="title-text">{t('opt_2')}</h3>
          <p class="course-info">{t('opt_3classes')}</p>
          {/* <img src={DownArrow} width="60px" height="60px" /> */}
          <p class="course-info">{t('opt_25minute')}</p>
          {/* <img src={DownArrow} width="60px" height="60px" /> */}
          <p class="course-info">{t('opt_11week')}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseOptions

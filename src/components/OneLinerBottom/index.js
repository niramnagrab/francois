import React from 'react'
import './OneLinerBottom.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

function OneLinerBottom() {
  const { t } = useTranslation()
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <div className="one-liner action">
      <p>{t('home_one_liner_bottom')}</p>
      <div className="trial-class">
        <Link to="/registration" onClick={toggleHome}>
          <button className="buttons" aria-label="Buy Button">
            {t('how_to_btn')}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default OneLinerBottom

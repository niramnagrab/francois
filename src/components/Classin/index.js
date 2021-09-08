import React from 'react'
import './ClassinComponents.css'
import Kids from '../../images/kids-learning.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { animateScroll as scroll } from 'react-scroll'

function Classin() {
  const { t } = useTranslation()
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <div className="classin-container">
      <div className="classin-content">
        <h1 className="classin-title pt-3">{t('how_to_classin_head')}</h1>
        <p className="text-justified-classin">{t('how_to_classin_txt')}</p>
        <Link to="/registration" onClick={toggleHome}>
          {' '}
          <button
            type="button"
            className="buttons font-weight-bold"
            aria-label="How To"
          >
            {t('how_to_btn')}
          </button>{' '}
        </Link>
      </div>
    </div>
  )
}

export default Classin

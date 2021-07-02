import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import china from '../../images/china.png'
import uk from '../../images/united-kingdom.png'
import { useTranslation } from 'react-i18next'
import './Dropdown.css'

function Dropdown({ isOpen, toggle }) {
  const setLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }
  const { t, i18n } = useTranslation()

  const toggleHome = () => {
    scroll.scrollToTop()
  }
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  return (
    <>
      <ul className="dropdown-menu">
        <li>
          <Link
            to="/"
            onClick={() => {
              toggleHome()
              setLanguage('en')
            }}
            className="dropdown-link"
          >
            {' '}
            <img className="flag" src={uk} onClick={toggle} />
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              toggleHome()
              setLanguage('ch')
            }}
            className="dropdown-link"
          >
            <img className="flag" src={china} onClick={toggle} />
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Dropdown

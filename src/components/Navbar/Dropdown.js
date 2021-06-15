import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import china from '../../images/china.png'
import uk from '../../images/united-kingdom.png'
import { useTranslation } from 'react-i18next'
import './Dropdown.css'

function Dropdown() {
  const setLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }
  const { t, i18n } = useTranslation()
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  return (
    <>
      <ul className="dropdown-menu">
        <li>
          <Link
            to=""
            onClick={() => setLanguage('en')}
            className="dropdown-link"
          >
            {' '}
            <img className="flag" src={uk} />
          </Link>
        </li>
        <li>
          <Link
            to=""
            onClick={() => setLanguage('ch')}
            className="dropdown-link"
          >
            <img className="flag" src={china} />
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Dropdown

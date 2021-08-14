import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import china from '../../images/china.png'
import uk from '../../images/united-kingdom.png'
import { useTranslation } from 'react-i18next'
import './Dropdown.css'

import {
  NavItem,
  NavLinks,
} from './NavbarElements'

function Dropdown({ isOpen, toggle }) {
  const setLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)

  }
  const { t, i18n } = useTranslation()
  const [dropdowns, setDropdowns] = useState(false)
  const toggleHome = () => {
    
    scroll.scrollToTop()
  }
  const dropdownClick = () => setDropdowns(!dropdowns)
  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);
  
  return (
    <>
    
     <NavItem>
                <NavLinks
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  onClick={dropdownClick}
                  offset={80}
                >
                  <img src={localStorage.getItem('lang') == 'ch' ? china: uk} width="30px" height="25px" />{' '}
                  <i className="fa fa-caret-down" />
                </NavLinks>
                { dropdowns && <ul className="dropdown-menu" >
                  <li>
                  
                    <span
                      onClick={() => {
                        toggleHome()
                        setLanguage("en")
                        dropdownClick()
                      }}
                      className="dropdown-link"
                    >
                      {""}
                      <img className="flag" src={uk} onClick={toggle} />
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => {
                        toggleHome()
                        dropdownClick()
                        setLanguage("ch")
                      }}
                      className="dropdown-link"
                    >
                      <img className="flag" src={china} onClick={toggle} />
                    </span>
                  </li>
                </ul>} 
                {/* <div>
                  <button onClick={() => setLanguage('ch')}>Chines</button> | 
                  <button onClick={() => setLanguage('en')}>English</button>
                </div> */}
              </NavItem>
      
    </>
  )
}

export default Dropdown

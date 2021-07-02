import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'
import logo from '../../images/logo.png'

const Navbar = ({ toggle }) => {
  const { t, i18n } = useTranslation()
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 0) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
    let lang = localStorage.getItem('lang')
    if (lang == null || lang == undefined) {
      i18n.changeLanguage('en')
      localStorage.setItem('lang', 'en')
    }
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome}>
              <Link to="/">
                {' '}
                <img src={logo} />
              </Link>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <Link
                    to="/"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Home{' '}
                  </Link>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <Link
                    onClick={toggleHome}
                    to="/our-curriculum"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    {' '}
                    Curriculum
                  </Link>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <Link
                    to="/how-to"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    How To
                  </Link>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  target="_blank"
                >
                  <Link
                    to="/about-us"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    {' '}
                    About
                  </Link>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={80}
                >
                  <Link
                    to="/registration"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Free Class
                  </Link>
                </NavLinks>
              </NavItem>

              <div>
                <button onClick={() => setLanguage('ch')}>Chinese</button> |
                <button onClick={() => setLanguage('en')}>English</button>
              </div>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}
export default Navbar

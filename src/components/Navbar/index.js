import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Dropdown from './Dropdown'
import Chinese from '../../images/china.png'

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
  const [dropdowns, setDropdowns] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 0) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  const dropdownClick = () => setDropdowns(!dropdowns)
  //  setDropdowns(!dropdowns);
  // const onMouseEnter = () => {

  //   console.log('mouse enter');
  //   // if (window.innerWidth < 960) {
  //   //   setDropdown(false);
  //   // } else {
  //   //   setDropdown(true);
  //   // }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };
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
                <img src={logo} alt="Toggle Home Logo" />
              </Link>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="/"
                  onClick={toggleHome}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <Link
                    to="/"
                    onClick={toggleHome}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    {t('home')}
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
                    to="/our-curriculum"
                    onClick={toggleHome}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    {t('curriculum')}
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
                  onClick={toggleHome}
                >
                  <Link
                    to="/how-to"
                    onClick={toggleHome}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    {t('howto')}
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
                  onClick={toggleHome}
                >
                  <Link
                    to="/about-us"
                    onClick={toggleHome}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    {t('about')}
                  </Link>
                </NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  target="_blank"
                  onClick={toggleHome}
                >
                  <Link
                    to="/testimonial"
                    onClick={toggleHome}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    {t('testimonial')}
                  </Link>
                </NavLinks>
              </NavItem> */}

              {/* <NavItem>
                <NavLinks
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  target="_blank"
                  onClick={toggleHome}
                >
                  <Link
                    to="/buy"
                    onClick={toggleHome}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    {t('buy')}
                  </Link>
                </NavLinks>
              </NavItem> */}

              <NavItem>
                <NavLinks
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={80}
                  onClick={toggleHome}
                >
                  <Link
                    to="/registration"
                    onClick={toggleHome}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    {t('register')}
                  </Link>
                </NavLinks>
              </NavItem>
              <Dropdown />
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}
export default Navbar

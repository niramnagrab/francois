import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Chinese from '../../images/china.png'
import English from '../../images/united-kingdom.png'

const Sidebar = ({ isOpen, toggle }) => {
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
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              {t('home')}
            </Link>
          </SidebarLink>
          <SidebarLink to="/curriculum" onClick={toggle}>
            <Link
              to="our-curriculum"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              {t('curriculum')}
            </Link>
          </SidebarLink>
          <SidebarLink>
            <Link
              to="/how-to"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              {t('howto')}
            </Link>
          </SidebarLink>
          <SidebarLink onClick={toggle}>
            <Link
              to="/about-us"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              {t('about')}
            </Link>
          </SidebarLink>
          <SidebarLink onClick={toggle}>
            <Link
              to="/tours"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              {t('tour')}
            </Link>
          </SidebarLink>
          <SidebarLink onClick={toggle}>
            <Link
              to="/registration"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              {t('register')}
            </Link>
          </SidebarLink>
          <SidebarLink onClick={toggle}>
            <div>
              <button onClick={() => setLanguage('ch')}>
                <img
                  src={Chinese}
                  width="40px"
                  height="30px"
                  style={{ padding: '5px' }}
                />
              </button>

              <button onClick={() => setLanguage('en')}>
                <img
                  src={English}
                  width="40px"
                  height="30px"
                  style={{ padding: '5px' }}
                />
              </button>
            </div>
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar

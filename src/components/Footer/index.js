import React from 'react'
import { useTranslation } from 'react-i18next'
import { animateScroll as scroll } from 'react-scroll'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPatreon,
  FaWeixin,
} from 'react-icons/fa'

import { Link } from 'react-router-dom'

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterLinks,
} from './FooterElements'
import Logo from '../../images/logo-white.png'

const Footer = () => {
  const { t } = useTranslation()
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <FooterContainer id="footer">
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <img src={Logo} alt="Company Logo" />
            </SocialLogo>
            <FooterLinks>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <Link
                    to="/about-us"
                    onClick={toggleHome}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    {t('about')}
                  </Link>
                </li>
                <li class="list-inline-item">
                  <Link
                    to="/registration"
                    onClick={toggleHome}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    {t('register')}
                  </Link>
                </li>
                <li class="list-inline-item">
                  <Link
                    to="/tours"
                    onClick={toggleHome}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    {t('our_tours')}
                  </Link>
                </li>
              </ul>
            </FooterLinks>
            {/* <WebsiteRights>
              Copyright © {new Date().getFullYear()} SP Sports Academy. All
              rights Reserved
            </WebsiteRights> */}
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="WeChat">
                <FaWeixin />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer

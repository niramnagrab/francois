import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPatreon,
  FaWeixin,
} from 'react-icons/fa'

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
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <FooterContainer id="footer">
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <img src={Logo} />
            </SocialLogo>
            <FooterLinks>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="about.html">About</a>
                </li>
                <li class="list-inline-item">
                  <a href="registration.html">Trial Class</a>
                </li>
                <li class="list-inline-item">
                  <a href="tours.html">Our Tours</a>
                </li>
              </ul>
            </FooterLinks>
            {/* <WebsiteRights>
              Copyright © {new Date().getFullYear()} SP Sports Academy. All
              rights Reserved
            </WebsiteRights> */}
            <SocialIcons>
              <SocialIconLink href="#" target="_blank" aria-label="WeChat">
                <FaWeixin />
              </SocialIconLink>
              <SocialIconLink href="#" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="#" target="_blank" aria-label="Linkedin">
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

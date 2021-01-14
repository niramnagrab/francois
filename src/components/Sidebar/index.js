import React from 'react'
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

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="blog" onClick={toggle}>
            Blog
          </SidebarLink>
          <SidebarLink to="footer" onClick={toggle}>
            Contact
          </SidebarLink>
          <SidebarLink
            target="_blank"
            onClick={(e) =>
              (window.location =
                'https://www.youtube.com/channel/UCXZEUlSUpG_aM-bcQr1Ej8A')
            }
          >
            My Youtube channel
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar

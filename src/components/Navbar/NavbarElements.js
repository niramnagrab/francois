import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav ? 'rgba(109, 109, 109, 0.8)' : 'transparent'};
  height: 100px;
  margin-top: -80;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 900px;
  line-height: 20px;
  /* font-style: bold; */
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1300px;
`

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkS)`
  color: #fff !important;
  display: flex;
  align-items: center;
  font-weight: 600;
  text-decoration: none !important;
  padding: 0 1.2rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Gilroy' !important;
  line-height: 20px;
  font-size: 20px;

  :hover {
    opacity: 0.8;
    color: white !important;
    font-weight: bold !important;
  }

  nav li:hover a {
    color: white !important;
    text-decoration: none !important;
    font-weight: bold;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`

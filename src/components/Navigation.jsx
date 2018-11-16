import React from 'react'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import { LocalizedLink } from 'elements'
import { LocaleConsumer } from 'elements/Layout'
import { Logo } from 'icons'

const StyledLink = styled.a`
  display: flex;
  font-weight: 700;
  align-items: center;
  svg {
    height: 2.5rem;
    margin-bottom: 0;
  }
`

const LogoText = styled.span`
  text-transform: uppercase;
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: 1.25rem;
  margin-left: 0.75rem;
  color: ${props => props.theme.colors.white.base};
  @media (max-width: 500px) {
    display: none;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.heading};
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.blueish};
    }
    &:focus {
      color: ${props => props.theme.colors.white.base};
    }
  }
`

const Navigation = () => (
  <LocaleConsumer>
    {({ i18n }) => (
      <Headroom calcHeightOnResize disableInlineStyles>
        <StyledLink as={LocalizedLink} to="/" aria-label="LekoArts, Back to homepage">
          <Logo />
          <LogoText>LekoArts</LogoText>
        </StyledLink>
        <Nav>
          <LocalizedLink to="/projects">{i18n.projects}</LocalizedLink>
          <LocalizedLink to="/blog">Blog</LocalizedLink>
          <LocalizedLink to="/contact">{i18n.contact}</LocalizedLink>
        </Nav>
      </Headroom>
    )}
  </LocaleConsumer>
)

export default Navigation

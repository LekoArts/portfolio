/* eslint no-unused-expressions: 0 */

import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Headroom from 'react-headroom';
import Logo from '../icons/Logo';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  svg {
    height: 2.5rem;
    margin-bottom: 0;
  }
`;

const LogoText = styled.span`
  text-transform: uppercase;
  font-family: ${props => props.theme.fontFamily.heading};
  font-size: 1.25rem;
  margin-left: 0.75rem;
  color: ${props => props.theme.colors.white.base};
  @media (max-width: 500px) {
    display: none;
  }
`;

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
`;

const Navigation = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <Logo />
      <LogoText>LekoArts</LogoText>
    </StyledLink>
    <Nav>
      <Link to="/projekte">Projekte</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/kontakt">Kontakt</Link>
    </Nav>
  </Headroom>
);

export default Navigation;

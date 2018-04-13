/* eslint no-unused-expressions: 0 */

import React from 'react';
import Link from 'gatsby-link';
import styled, { injectGlobal } from 'react-emotion';
import Headroom from 'react-headroom';
import Logo from '../icons/Logo';
import theme from '../../config/theme';

injectGlobal`
  .headroom-wrapper {
    position: fixed;
    width: 100%;
    z-index: 2000;
  }
  .headroom {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 1rem 2rem;
    svg {
      height: 2.5rem;
      g {
        fill: ${theme.colors.white.base};
      }
    }
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--scrolled {
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
    background-color: ${theme.colors.white.light};
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    nav {
      a {
        color: ${theme.colors.black.base};
        &:hover {
          border-color: ${theme.colors.black.base};
          color: ${theme.colors.black.base};
        }
      }
    }
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    svg {
      height: 2.5rem;
      g {
        fill: ${theme.colors.black.base};
      }
    }
    span {
      color: ${theme.colors.black.base};
    }
  }
`;

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
  font-size: 1.25rem;
  margin-left: 0.75rem;
  color: ${props => props.theme.colors.white.base};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all 0.4s;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid white;
      color: white;
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
      <Link to="/projekte" activeClassName="active">
        Projekte
      </Link>
      <Link to="/blog" activeClassName="active">
        Blog
      </Link>
      <Link to="/kontakt" activeClassName="active">
        Kontakt
      </Link>
    </Nav>
  </Headroom>
);

export default Navigation;

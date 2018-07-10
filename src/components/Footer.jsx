import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import styled from 'react-emotion';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Wave, Container } from 'elements';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 10rem;
  padding-bottom: 2rem;
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.heading};
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const OptionalContent = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
  h1,
  h2 {
    color: ${props => props.theme.colors.white.light};
    text-align: center;
    margin: 0 auto;
    display: block;
  }
`;

const Content = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${props => props.theme.colors.white.blue};
  a {
    color: ${props => props.theme.colors.white.blue};
    &:hover {
      color: ${props => props.theme.colors.primary.base};
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-shadow: ${props => props.theme.shadow.text.small};
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1rem;
    a {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
`;

const Important = styled(Item)`
  font-size: 1.2rem;
  a {
    color: ${props => props.theme.colors.white.base};
    &:hover {
      color: ${props => props.theme.colors.primary.base};
    }
  }
`;

const Copyright = styled.div`
  margin: 1rem 0;
  text-align: center;
  color: ${props => props.theme.colors.white.blue};
`;

const Footer = ({ children }) => {
  const date = format(new Date(), 'YYYY');
  return (
    <Wrapper>
      <Wave orientation="top" />
      <Container>
        {children && <OptionalContent>{children}</OptionalContent>}
        <Content>
          <Important>
            <OutboundLink href="https://www.patreon.com/lekoarts">Patreon</OutboundLink>
            <Link to="/categories/tutorial">Tutorials</Link>
            <Link to="/categories/freebie">Freebies</Link>
          </Important>
          <Item>
            <Link to="/impressum" rel="nofollow">
              Impressum
            </Link>
            <Link to="/datenschutz" rel="nofollow">
              Datenschutzerklärung
            </Link>
          </Item>
          <Item>
            <OutboundLink href="https://www.behance.net/lekoarts">Behance</OutboundLink>
            <OutboundLink href="https://dribbble.com/LekoArts">Dribbble</OutboundLink>
            <OutboundLink href="https://www.facebook.com/lekoarts.de">Facebook</OutboundLink>
            <OutboundLink href="https://github.com/LeKoArts">GitHub</OutboundLink>
            <OutboundLink href="https://www.instagram.com/lekoarts.de">Instagram</OutboundLink>
          </Item>
        </Content>
        <Copyright>Copyright © {date}. LekoArts. Alle Rechte vorbehalten.</Copyright>
      </Container>
    </Wrapper>
  );
};

export default Footer;

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
};

Footer.defaultProps = {
  children: false,
};

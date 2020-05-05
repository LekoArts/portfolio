import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { format } from 'date-fns'
import styled from 'styled-components'
import { Wave, Container, LocalizedLink } from 'elements'
import { LocaleConsumer } from 'elements/Layout'

const Wrapper = styled.footer`
  position: relative;
  padding-top: 10rem;
  background: ${(props) => props.theme.gradient.leftToRight};
  font-family: ${(props) => props.theme.fontFamily.heading};
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`

const OptionalContent = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
  h1,
  h2 {
    color: ${(props) => props.theme.colors.white.light};
    text-align: center;
    margin: 0 auto;
    display: block;
    font-size: 2rem;
  }
`

const Content = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.white.blue};
  a {
    color: ${(props) => props.theme.colors.white.blue};
    &:hover {
      color: ${(props) => props.theme.colors.white.blueish};
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: column;
  }
`

const Item = styled.div`
  font-size: 0.95rem;
  a {
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    display: inline-block;
  }
  text-shadow: ${(props) => props.theme.shadow.text.small};
`

const Important = styled(Item)`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  a {
    color: ${(props) => props.theme.colors.white.base} !important;
    &:hover {
      color: ${(props) => props.theme.colors.white.blueish} !important;
    }
  }
`

const Side = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    text-align: center;
  }
`

const Left = styled(Side)`
  text-align: left;
  padding-right: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    padding-right: 0;
  }
`

const Right = styled(Side)`
  text-align: right;
  justify-content: space-between;
  padding-left: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    padding-left: 0;
    margin-top: 2.5rem;
  }
`

const Copyright = styled.div`
  color: ${(props) => props.theme.tint.blueWhite};
  font-size: 0.9rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 0.5rem;
  }
`

const LanguageWrapper = styled.div`
  position: relative;
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.white.blue};
  a {
    color: ${(props) => props.theme.colors.white.blue};
    &:hover {
      color: ${(props) => props.theme.colors.white.blueish};
    }
  }
`

const LanguageBox = styled.div`
  background: rgba(121, 191, 255, 0.1);
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.theme.borderRadius.round};
  display: inline-block;
  padding: 0.5rem 1.75rem;
  ${(props) =>
    props.currentLocale === 'de-de'
      ? `
    a:first-child {
      color: white;
    }
  `
      : `
    a:last-child {
      color: white;
    }
  `};
`

const Footer = ({ children }) => {
  const date = format(new Date(), 'yyyy')
  return (
    <LocaleConsumer>
      {({ i18n, locale }) => (
        <Wrapper>
          <Wave orientation="top" />
          <Container>
            {children && <OptionalContent data-testid="optional-content">{children}</OptionalContent>}
            <Content>
              <Left>
                <Important>
                  <a href="https://www.patreon.com/lekoarts" target="_blank" rel="noopener noreferrer">
                    Patreon
                  </a>
                  <LocalizedLink to="/categories/tutorial">Tutorials</LocalizedLink>
                  <LocalizedLink to="/categories/freebie">Freebies</LocalizedLink>
                </Important>
                <Item>
                  <a href="https://www.behance.net/lekoarts" target="_blank" rel="noopener noreferrer">
                    Behance
                  </a>
                  <a href="https://dribbble.com/LekoArts" target="_blank" rel="noopener noreferrer">
                    Dribbble
                  </a>
                  <a href="https://github.com/LekoArts" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="https://www.instagram.com/lekoarts.de" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </Item>
              </Left>
              <Right>
                <Item>
                  <LocalizedLink to="/imprint" rel="nofollow">
                    {i18n.imprint}
                  </LocalizedLink>
                  <LocalizedLink to="/privacy" rel="nofollow">
                    {i18n.privacy}
                  </LocalizedLink>
                </Item>
                <Copyright>
                  Copyright © {date}. LekoArts. {i18n.footer_note}.
                </Copyright>
              </Right>
            </Content>
            <LanguageWrapper>
              <LanguageBox lang={locale} currentLocale={locale}>
                {i18n.languages}:{' '}
                <Link hrefLang="de-de" to="/">
                  {i18n.german}
                </Link>{' '}
                –{' '}
                <Link hrefLang="en-gb" to="/en">
                  {i18n.english}
                </Link>
              </LanguageBox>
            </LanguageWrapper>
          </Container>
        </Wrapper>
      )}
    </LocaleConsumer>
  )
}

export default Footer

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
}

Footer.defaultProps = {
  children: false,
}

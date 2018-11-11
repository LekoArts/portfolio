import React from 'react'
import styled from 'react-emotion'
import { Spring, config, animated } from 'react-spring'
import PropTypes from 'prop-types'
import { Wave } from 'elements'

const Wrapper = styled.header`
  background: ${props => props.theme.gradient.rightToLeft};
  height: ${props => (props.big ? '650px' : '450px')};
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: ${props => (props.big ? '600px' : '400px')};
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: ${props => (props.big ? '500px' : '325px')};
  }
  position: relative;
  overflow: hidden;
`

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 7rem;
  align-items: center;
`

const Subtitle = styled(animated.p)`
  max-width: 650px;
  color: ${props => props.theme.colors.white.blue};
`

const Header = ({ children, title, big, html }) => (
  <Wrapper big={big}>
    <Text>
      {title && (
        <Spring
          native
          from={{ opacity: 0, transform: 'translate3d(0, -30px, 0)' }}
          to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
        >
          {props => (
            <animated.h1 data-testid="header-title" style={props}>
              {title}
            </animated.h1>
          )}
        </Spring>
      )}
      {children && (
        <Spring native config={config.slow} delay={400} from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => <Subtitle style={props}>{children}</Subtitle>}
        </Spring>
      )}
      {html && (
        <Spring
          native
          from={{ opacity: 0, transform: 'translate3d(0, -30px, 0)' }}
          to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
        >
          {props => <animated.div style={props} dangerouslySetInnerHTML={{ __html: html }} />}
        </Spring>
      )}
    </Text>
    <Wave />
  </Wrapper>
)

export default Header

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  html: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool]),
  big: PropTypes.bool,
}

Header.defaultProps = {
  big: false,
  title: false,
  children: false,
  html: false,
}

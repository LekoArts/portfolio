import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: ${props => props.theme.layout[props.type]};
`

const Container = ({ children, type, className }) => (
  <Wrapper className={className} type={type}>
    {children}
  </Wrapper>
)

export default Container

Container.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['article', 'base', 'big']),
  className: PropTypes.string,
}

Container.defaultProps = {
  type: 'base',
  className: null,
}

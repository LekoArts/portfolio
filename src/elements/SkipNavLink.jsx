import React from 'react'
import styled from 'styled-components'

const SkipNavID = 'skip-nav'

const StyledLink = styled.a`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  position: absolute;
  z-index: 3000;
  &:focus {
    padding: 1rem 2.5rem;
    position: fixed;
    font-weight: 700;
    border-radius: ${props => props.theme.borderRadius.default};
    top: 5px;
    left: 5px;
    background: white;
    width: auto;
    height: auto;
    clip: auto;
    outline: none;
    box-shadow: 0 0 0 5px ${props => props.theme.tint.blue};
  }
`

const SkipNavLink = ({ children = 'Skip to content', ...props }) => (
  <StyledLink {...props} href={`#${SkipNavID}`}>
    {children}
  </StyledLink>
)

const SkipNavContent = props => <main {...props} id={SkipNavID} />

export { SkipNavLink, SkipNavContent, SkipNavID }

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Container } from 'elements'

const Wrapper = styled(Container)`
  ${(props) =>
    props.hasFilename &&
    `pre { margin-top: 0!important; border-radius: 0 0 ${props.theme.borderRadius.default} ${props.theme.borderRadius.default} !important; }`};
`

const Title = styled.div`
  padding: 0.6rem 1rem;
  background-color: ${(props) => props.theme.tint.blueLight};
  border-radius: ${(props) => props.theme.borderRadius.default} ${(props) => props.theme.borderRadius.default} 0 0;
  color: ${(props) => props.theme.colors.primary.darker};
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
`

const CodeBlock = ({ input }) => {
  const hasFilename = input.primary.code_block_title
  return (
    <Wrapper hasFilename={hasFilename} type="article">
      {hasFilename && <Title>{input.primary.code_block_title}</Title>}
      <div dangerouslySetInnerHTML={{ __html: input.primary.code_block.html }} />
    </Wrapper>
  )
}

export default CodeBlock

CodeBlock.propTypes = {
  input: PropTypes.object.isRequired,
}

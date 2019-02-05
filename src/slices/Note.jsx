import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container } from 'elements'
import { Info } from 'icons'

const Wrapper = styled.div`
  background-color: ${props => props.theme.tint.blueLight};
  border-radius: ${props => props.theme.borderRadius.default};
  padding: 1rem;
  position: relative;
  p {
    margin-bottom: 0;
    font-size: 1rem !important;
  }
  h2 {
    margin-top: 0 !important;
    font-size: 1.444rem;
    padding-right: 2rem;
  }
  margin-bottom: 2rem;
  span {
    margin-right: 0.5rem;
  }
  svg {
    width: 2rem;
    height: 2rem;
    vertical-align: text-bottom;
    [data-name='info-primary'] {
      fill: ${props => props.theme.colors.primary.base};
    }
    [data-name='info-secondary'] {
      fill: ${props => props.theme.colors.white.base};
    }
  }
`

const Note = ({ input }) => (
  <Container type="article">
    <Wrapper>
      <h2>
        <span>
          <Info />
        </span>
        {input.primary.note_title}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: input.primary.note_content.html }} />
    </Wrapper>
  </Container>
)

export default Note

Note.propTypes = {
  input: PropTypes.object.isRequired,
}

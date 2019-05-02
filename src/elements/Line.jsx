import styled from 'styled-components'
import { darken } from 'polished'

const Line = styled.div`
  width: 100%;
  height: 3px;
  background: ${props => darken(0.25, props.theme.tint.black)};
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export default Line

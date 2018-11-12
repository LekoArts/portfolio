import { css } from 'styled-components'
import theme from '../../config/theme'

const hide = css`
  @media (max-width: ${theme.breakpoints.xs}) and (max-device-width: ${theme.breakpoints.xs}) {
    display: none;
  }
`

export default hide

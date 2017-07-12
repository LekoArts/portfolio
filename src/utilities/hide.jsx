import { css } from 'emotion';
import theme from '../../config/theme';

export const hideS = css`
  @media (max-width: ${theme.breakpoints.xs}) and (max-device-width: ${theme.breakpoints.xs}) {
    display: none;
  }
`;

import styled from 'react-emotion';
import { darken } from 'polished';

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: ${props => darken(0.25, props.theme.tint.black)};
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export default Line;

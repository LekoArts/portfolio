import React from 'react';
import styled, { keyframes, css } from 'react-emotion';
import PropTypes from 'prop-types';
import theme from '../../config/theme';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  ${props => props.orientation === 'top' && 'top: 0'};
  ${props => props.orientation === 'top' && 'transform: matrix(1, 0, 0, -1, 0, 0)'};
  ${props => props.orientation === 'bottom' && 'bottom: 0'};
`;

const InnerWave = styled.div`
  position: relative;
  height: 100%;
  transform: matrix(1, 0, 0, -1, 0, 0);
  svg {
    display: block;
    position: absolute;
    width: 100%;
    height: 5.5rem;
    @media (max-width: ${props => props.theme.breakpoints.m}) {
      height: 4.5rem;
    }
  }
`;

const smoooooth = keyframes`
  0% {
    d: path("M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z");
  }

  50% {
    d: path("M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z");
  }

  100% {
    d: path("M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z");
  }
`;

const animation = css`
  fill: ${theme.colors.white.light};
  width: 100%;
  animation: ${smoooooth} 25s linear infinite alternate;
`;

const Wave = ({ orientation }) => (
  <Wrapper orientation={orientation}>
    <InnerWave>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54 14"
        height="70"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path className={animation}>
          <animate
            attributeName="d"
            values="M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z"
            repeatCount="indefinite"
            dur="25s"
          />
        </path>
      </svg>
    </InnerWave>
  </Wrapper>
);

export default Wave;

Wave.propTypes = {
  orientation: PropTypes.oneOf(['top', 'bottom']),
};

Wave.defaultProps = {
  orientation: 'bottom',
};

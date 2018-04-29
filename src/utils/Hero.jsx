import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  color: ${props => props.theme.colors.white.light};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  text-align: center;
`;

const Hero = ({ children }) => <Content>{children}</Content>;

export default Hero;

Hero.propTypes = {
  children: PropTypes.node.isRequired,
};

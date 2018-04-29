import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import Wave from './Wave';

const Wrapper = styled.header`
  background: ${props => props.theme.gradient.rightToLeft};
  height: ${props => (props.slim ? '450px' : '650px')};
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: ${props => (props.slim ? '400px' : '600px')};
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: ${props => (props.slim ? '375px' : '500px')};
  }
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 7rem;
  align-items: center;
`;

const Subtitle = styled.p`
  max-width: 650px;
  color: ${props => props.theme.colors.white.blue};
`;

const Header = ({ children, title, slim }) => (
  <Wrapper slim={slim}>
    <Text>
      <h1>{title}</h1>
      {children && <Subtitle>{children}</Subtitle>}
    </Text>
    <Wave />
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  slim: PropTypes.bool,
};

Header.defaultProps = {
  slim: false,
};

import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import Wave from './Wave';

const Wrapper = styled.header`
  background: ${p => p.theme.gradient.rightToLeft};
  height: ${p => (p.slim ? '450px' : '650px')};
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  color: ${p => p.theme.colors.white.light};
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  margin-bottom: 7rem;
  align-items: center;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 650px;
  color: ${p => p.theme.tint.white};
`;

const Header = ({ children, subtitle, slim }) => (
  <Wrapper slim={slim}>
    <Text>
      <h1>{children}</h1>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Text>
    <Wave bottom />
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  slim: PropTypes.bool,
};

Header.defaultProps = {
  subtitle: false,
  slim: false,
};

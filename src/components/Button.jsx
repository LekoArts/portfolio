import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const styledButton = styled.button`
  display: inline-block;
  z-index: 10;
  background: ${p => p.theme.button[p.type].background};
  color: ${p => p.theme.colors.white.base};
  min-width: 10rem;
  margin: 2rem auto;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  line-height: 1.25;
  border: none;
  padding: 1.15rem 2.25rem;
  border-radius: ${p => p.theme.borderRadius.round};
  transition: ${p => p.theme.transitions.default.transition};
  cursor: pointer;
  -webkit-appearance: button;
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: ${p => p.theme.button[p.type].boxShadow};
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${p => p.theme.button[p.type].hover.boxShadow};
  }
`;

const Button = ({ children, type }) => <styledButton type={type}>{children}</styledButton>;

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  type: 'default',
};

import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const styledButton = styled.button`
  background: ${p => p.theme.button[p.type].background};
  border: none;
  border-radius: ${p => p.theme.borderRadius.round};
  box-shadow: ${p => p.theme.button[p.type].boxShadow};
  color: ${p => p.theme.colors.white.base};
  cursor: pointer;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.25;
  margin: 2rem auto;
  min-width: 10rem;
  padding: 1.15rem 2.25rem;
  text-align: center;
  transition: ${p => p.theme.transitions.default.transition};
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  z-index: 10;
  -webkit-appearance: button;
  &:hover {
    box-shadow: ${p => p.theme.button[p.type].hover.boxShadow};
    transform: translateY(-8px);
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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: ${props => props.theme.layout[props.type]};
`;

const Container = ({ children, type }) => <Wrapper type={type}>{children}</Wrapper>;

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['article', 'base', 'big']),
};

Container.defaultProps = {
  type: 'base',
};

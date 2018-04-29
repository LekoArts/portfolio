import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Text = styled.div`
  text-transform: uppercase;
  font-family: ${props => props.theme.fontFamily.heading};
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.colors.black.lighter};
`;

const InfoText = ({ children }) => <Text>{children}</Text>;

export default InfoText;

InfoText.propTypes = {
  children: PropTypes.node.isRequired,
};

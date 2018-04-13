import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.div`
  p {
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
  }
  a {
    color: ${props => props.theme.colors.black.base};
    box-shadow: inset 0 -2px 0 ${props => props.theme.tint.blue};
    border-bottom: 1px solid ${props => props.theme.tint.blue};
    font-weight: 700;
    transition: ${props => props.theme.transitions.default.transition};
    text-decoration: none;
    &:hover,
    &:focus {
      background: ${props => props.theme.tint.blue};
      color: ${props => props.theme.colors.black.base};
    }
  }
`;

const Content = ({ input }) => <Wrapper dangerouslySetInnerHTML={{ __html: input }} />;

export default Content;

Content.propTypes = {
  input: PropTypes.any.isRequired,
};

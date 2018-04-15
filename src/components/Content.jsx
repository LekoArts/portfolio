import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.div`
  padding: 2rem 0;
  p,
  li {
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    font-size: 1.15rem;
    line-height: 1.58;
    code {
      padding: 0.2rem 0.5rem;
      margin: 0.5rem 0;
    }
  }
  a {
    color: black;
    box-shadow: inset 0 -2px 0 ${props => props.theme.tint.blue};
    border-bottom: 1px solid ${props => props.theme.tint.blue};
    transition: ${props => props.theme.transitions.default.transition};
    text-decoration: none;
    &:hover,
    &:focus {
      background: ${props => props.theme.tint.blue};
      color: black;
    }
  }
  h1 {
    margin-top: 2rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    a {
      box-shadow: none;
      border-bottom: none;
      &:hover,
      &:focus {
        background: none;
      }
    }
  }
`;

const Content = ({ input }) => <Wrapper dangerouslySetInnerHTML={{ __html: input }} />;

export default Content;

Content.propTypes = {
  input: PropTypes.any.isRequired,
};

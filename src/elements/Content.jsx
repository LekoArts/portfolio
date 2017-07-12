import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { prism } from 'styles';

const Wrapper = styled.div`
  padding: 2rem 0 1rem 0;
  ${prism};
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
  a:not(.gatsby-resp-image-link):not(.anchor) {
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
    margin-top: 3rem;
  }
  h2 {
    margin-top: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: inline-block;
    position: relative;
    a {
      box-shadow: none;
      border-bottom: none;
      &:hover,
      &:focus {
        background: none;
      }
    }
    &:hover {
      .anchor svg {
        opacity: 0.8;
      }
    }
  }
  .anchor {
    margin-left: -30px !important;
    padding: 4px !important;
    position: absolute;
    float: none;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: ${props => props.theme.breakpoints.m}) {
      margin-left: -24px !important;
    }
    svg {
      fill: ${props => props.theme.colors.black.base};
      visibility: hidden;
      display: block;
      opacity: 0;
      transition: all 0.3s ease-in-out;
      width: 20px;
      height: 20px;
      @media (max-width: ${props => props.theme.breakpoints.m}) {
        opacity: 0.2;
        visibility: visible !important;
        height: 16px;
        width: 16px;
      }
    }
  }
`;

const Content = ({ input }) => <Wrapper dangerouslySetInnerHTML={{ __html: input }} />;

export default Content;

Content.propTypes = {
  input: PropTypes.any.isRequired,
};

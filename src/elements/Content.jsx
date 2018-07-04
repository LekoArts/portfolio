import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { prism } from 'styles';
import { BodyText, CodeBlock, Image, Quote } from 'slices';

const Wrapper = styled.div`
  padding: 5rem 0 1rem 0;
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
  a:not(.gatsby-resp-image-link) {
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
    margin-top: 4rem;
  }
  h2 {
    margin-top: 3rem;
  }
  .block-img {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    text-align: center;
    img {
      border-radius: ${props => props.theme.borderRadius.default};
      box-shadow: ${props => props.theme.shadow.image};
    }
  }
  [data-oembed-type='video'] {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const Content = ({ sliceZone }) => {
  const slices = sliceZone.map(s => {
    switch (s.slice_type) {
      case 'text':
        return <BodyText key={s.id} input={s} />;
      case 'code_block':
        return <CodeBlock key={s.id} input={s} />;
      case 'bild':
        return <Image key={s.id} input={s} />;
      case 'quote':
        return <Quote key={s.id} input={s} />;
      default:
        return null;
    }
  });
  return <Wrapper>{slices}</Wrapper>;
};

export default Content;

Content.propTypes = {
  sliceZone: PropTypes.array.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Img from 'gatsby-image';
import { Container } from 'elements';

const Wrapper = styled(Container)`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  .gatsby-image-outer-wrapper {
    box-shadow: ${props => props.theme.shadow.image};
    border-radius: ${props => props.theme.borderRadius.default};
  }
  img {
    border-radius: ${props => props.theme.borderRadius.default};
  }
`;

const Image = ({ input }) => (
  <Wrapper type="base">
    <Img fluid={input.primary.image.localFile.childImageSharp.fluid} />
  </Wrapper>
);

export default Image;

Image.propTypes = {
  input: PropTypes.any.isRequired,
};

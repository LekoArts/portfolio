import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'elements';

const BodyText = ({ input }) => (
  <Container type="article">
    <div dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />
  </Container>
);

export default BodyText;

BodyText.propTypes = {
  input: PropTypes.object.isRequired,
};

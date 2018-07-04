import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'elements';

const Quote = ({ input }) => (
  <Container type="article">
    <blockquote>
      <div dangerouslySetInnerHTML={{ __html: input.primary.quote.html }} />
    </blockquote>
  </Container>
);

export default Quote;

Quote.propTypes = {
  input: PropTypes.object.isRequired,
};

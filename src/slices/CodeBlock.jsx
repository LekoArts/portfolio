import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Container } from 'elements';

const Wrapper = styled(Container)`
  padding-bottom: 2rem;
`;

const CodeBlock = ({ input }) => (
  <Wrapper type="article">
    <div dangerouslySetInnerHTML={{ __html: input.primary.code_block.html }} />
  </Wrapper>
);

export default CodeBlock;

CodeBlock.propTypes = {
  input: PropTypes.any.isRequired,
};

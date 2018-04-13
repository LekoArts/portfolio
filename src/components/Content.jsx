import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.div`
  p {
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
  }
`;

const Content = ({ input }) => <Wrapper dangerouslySetInnerHTML={{ __html: input }} />;

export default Content;

Content.propTypes = {
  input: PropTypes.any.isRequired,
};

import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import kebabCase from 'lodash/kebabCase';
import size from 'lodash/size';
import { darken } from 'polished';
import Helmet from 'react-helmet';
import { Container, Layout } from 'elements';
import config from '../../config/website';
import Footer from '../components/Footer';
import Header from '../components/Header';

const TagsContainer = styled.div`
  margin: 2rem 0 4rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  a {
    background: ${props => props.theme.tint.black};
    color: ${props => props.theme.colors.black.light};
    padding: 0.25rem 0.85rem;
    border-radius: ${props => props.theme.borderRadius.default};
    margin: 0.3rem 0.6rem 0.3rem 0;
    white-space: nowrap;
    &:hover {
      background: ${props => darken(0.35, props.theme.tint.black)};
      color: ${props => darken(0.35, props.theme.colors.black.light)};
    }
  }
`;

const Number = styled.span`
  margin-left: 0.75rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.black.lighter};
`;

const Tags = () => (
  <Layout>
    <Helmet title={`Tags | ${config.siteTitle}`} />
    <Header title="Tags">
      test
    </Header>
    <Container>
      <TagsContainer>
        test
      </TagsContainer>
    </Container>
    <Footer />
  </Layout>
);

export default Tags;

Tags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array.isRequired,
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

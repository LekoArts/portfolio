import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {Link} from 'gatsby';
import Img from 'gatsby-image';
import kebabCase from 'lodash/kebabCase';
import { hideS } from 'utilities';

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const Image = styled.div`
  position: relative;
  box-shadow: ${props => props.theme.shadow.feature.small.default};
  transition: ${props => props.theme.transitions.boom.transition};
  border-radius: ${props => props.theme.borderRadius.default};
  min-height: 300px;
  img {
    border-radius: ${props => props.theme.borderRadius.default};
  }
  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
    transform: translateY(-12px);
  }
  a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    > div {
      position: static !important;
    }
    > div > div {
      position: static !important;
    }
  }
  flex-basis: calc(99.9% * 2 / 5 - 1rem);
  max-width: calc(99.9% * 2 / 5 - 1rem);
  width: calc(99.9% * 2 / 5 - 1rem);
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 500px) {
    min-height: 200px;
  }
`;

const Information = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
    display: inline-block;
    color: ${props => props.theme.colors.black.base};
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.primary.base};
    }
  }

  flex-basis: calc(99.9% * 3 / 5 - 1rem);
  max-width: calc(99.9% * 3 / 5 - 1rem);
  width: calc(99.9% * 3 / 5 - 1rem);
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
`;

const Statistics = styled.div`
  color: ${props => props.theme.colors.black.lighter};
`;

const Excerpt = styled.div`
  margin-top: 2rem;
`;

const ItemBlog = ({ path, cover, category, title, date, timeToRead, excerpt }) => (
  <Wrapper>
    <Image>
      <Link to={path}>
        <Img fluid={cover} />
      </Link>
    </Image>
    <Information>
      <Link to={path}>
        <h1>{title}</h1>
      </Link>
      <Statistics>
        {date} &mdash; Lesezeit: {timeToRead} Min. &mdash; <span className={hideS}>Kategorie: </span>
        <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
      </Statistics>
      <Excerpt>{excerpt}</Excerpt>
    </Information>
  </Wrapper>
);

export default ItemBlog;

ItemBlog.propTypes = {
  path: PropTypes.string.isRequired,
  cover: PropTypes.any.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  excerpt: PropTypes.string.isRequired,
};

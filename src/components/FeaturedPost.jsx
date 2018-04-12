import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'react-emotion';

const imageOverlay = styled.div`
  border-radius: ${p => p.theme.borderRadius.default};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  opacity: 0.1;
  transition: opacity ${p => p.theme.transitions.default.duration};
  background-image: linear-gradient(
    30deg,
    ${p => p.theme.colors.secondary.light} 0%,
    ${p => p.theme.colors.secondary.dark} 100%
  );
`;

const Wrapper = styled.article`
  position: relative;
  z-index: 100;
  border-radius: ${p => p.theme.borderRadius.default};
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
  transition: ${p => p.theme.transitions.boom.transition};
  flex-basis: 50%;
  height: 25rem;
  &:hover {
    box-shadow: 0 40px 40px rgba(0, 0, 0, 0.1);
    transform: translateY(-12px);
    ${imageOverlay} {
      opacity: 0.9;
    }
  }
`;

const styledLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  z-index: 3;
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 40%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0.75) 100%
    );
    z-index: -10;
    border-radius: ${p => p.theme.borderRadius.default};
    transition: opacity ${p => p.theme.transitions.default.duration};
  }
  &:hover {
    &:after {
      opacity: 0;
    }
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  object-fit: cover;
  border-radius: ${p => p.theme.borderRadius.default};
  img {
    border-radius: ${p => p.theme.borderRadius.default};
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Category = styled.span`
  color: ${p => p.theme.colors.black.base};
  background-color: ${p => p.theme.colors.white.light};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  border-radius: ${p => p.theme.borderRadius.round};
  padding: 0.25rem 1rem;
`;

const Date = styled.div`
  color: ${p => p.theme.colors.white.light};
`;

const Title = styled.h2`
  color: ${p => p.theme.colors.white.light};
  text-align: left;
  margin-bottom: 0;
`;

const FeaturedPost = props => (
  <Wrapper>
    <Image>
      <Img sizes={props.cover} />
    </Image>
    <styledLink to={props.path}>
      <Information>
        <Category>{props.category}</Category>
        <Date>{props.date}</Date>
      </Information>
      <Title>{props.title}</Title>
    </styledLink>
    <imageOverlay />
  </Wrapper>
);

export default FeaturedPost;

FeaturedPost.propTypes = {
  cover: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
  category: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

FeaturedPost.defaultProps = {
  category: 'Keine',
};

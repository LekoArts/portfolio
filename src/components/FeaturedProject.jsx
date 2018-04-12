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
    ${p => p.theme.colors.primary.light} 0%,
    ${p => p.theme.colors.primary.dark} 100%
  );
`;

const Wrapper = styled.article`
  position: relative;
  z-index: 100;
  border-radius: ${p => p.theme.borderRadius.default};
  box-shadow: 0 40px 40px rgba(0, 0, 0, 0.2);
  transition: ${p => p.theme.transitions.boom.transition};
  flex-basis: 33%;
  height: 35rem;
  &:hover {
    box-shadow: 0 50px 50px rgba(0, 0, 0, 0.1);
    transform: translateY(-20px);
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
  justify-content: flex-end;
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
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
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

const Customer = styled.div`
  text-align: left;
  margin-bottom: 0.5rem;
  color: ${p => p.theme.colors.white.light};
`;

const Title = styled.h2`
  text-align: left;
  margin-bottom: 0;
  color: ${p => p.theme.colors.white.light};
`;

const FeaturedProject = props => (
  <Wrapper>
    <Image>
      <Img sizes={props.cover} />
    </Image>
    <styledLink to={props.path}>
      <Customer>{props.customer}</Customer>
      <Title>{props.title}</Title>
    </styledLink>
    <imageOverlay />
  </Wrapper>
);

export default FeaturedProject;

FeaturedProject.propTypes = {
  cover: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
  customer: PropTypes.string,
  title: PropTypes.string.isRequired,
};

FeaturedProject.defaultProps = {
  customer: '',
};

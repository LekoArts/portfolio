import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'react-emotion';
import theme from '../../config/theme';

const ImageOverlay = styled.div`
  border-radius: ${props => props.theme.borderRadius.default};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  opacity: 0.1;
  transition: opacity ${props => props.theme.transitions.default.duration};
  background-image: linear-gradient(
    30deg,
    ${props => props.theme.colors.primary.light} 0%,
    ${props => props.theme.colors.primary.dark} 100%
  );
`;

const Wrapper = styled.article`
  position: relative;
  z-index: 100;
  border-radius: ${props => props.theme.borderRadius.default};
  box-shadow: ${props => props.theme.shadow.feature.big.default};
  transition: ${props => props.theme.transitions.boom.transition};
  height: 30rem;
  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.big.hover};
    transform: translateY(-20px);
    ${ImageOverlay} {
      opacity: 0.9;
    }
  }
  flex-basis: calc(99.9% * 1 / 3 - 2.5rem);
  max-width: calc(99.9% * 1 / 3 - 2.5rem);
  width: calc(99.9% * 1 / 3 - 2.5rem);
  @media (max-width: 1340px) {
    height: 25rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    &:first-child {
      flex-basis: 100%;
      max-width: 100%;
      width: 100%;
      margin-bottom: 2rem;
      height: 20rem;
    }
    &:nth-child(n + 2) {
      flex-basis: calc(99.9% * 1 / 2 - 1rem);
      max-width: calc(99.9% * 1 / 2 - 1rem);
      width: calc(99.9% * 1 / 2 - 1rem);
      height: 30rem;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    &:nth-child(n + 2) {
      height: 25rem;
    }
  }
  @media (max-width: 700px) {
    &:nth-child(n) {
      flex-basis: 100%;
      max-width: 100%;
      width: 100%;
      margin-bottom: 2rem;
      height: 15rem;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    &:nth-child(n) {
      height: 12.5rem;
    }
  }
`;

const StyledLink = styled(Link)`
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
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
    z-index: -10;
    border-radius: ${theme.borderRadius.default};
    transition: opacity ${theme.transitions.default.duration};
  }
  &:hover {
    &:after {
      opacity: 0;
    }
  }
`;

const Image = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.default};
  img {
    border-radius: ${props => props.theme.borderRadius.default};
  }
  > div {
    position: static !important;
  }
  > div > div {
    position: static !important;
  }
`;

const Customer = styled.div`
  text-align: left;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.white.light};
`;

const Title = styled.h2`
  text-align: left;
  margin-bottom: 0;
  color: ${props => props.theme.colors.white.light};
`;

const FeaturedProject = ({ cover, path, customer, title }) => (
  <Wrapper>
    <Image>
      <Img fluid={cover} />
    </Image>
    <StyledLink to={path}>
      <Customer>{customer}</Customer>
      <Title>{title}</Title>
    </StyledLink>
    <ImageOverlay />
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

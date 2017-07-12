import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import theme from '../../config/theme';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const ImageOverlay = styled.div`
  border-radius: ${props => props.theme.borderRadius.default};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  opacity: 0;
  transition: opacity ${props => props.theme.transitions.default.duration};
  ${props =>
    props.primary &&
    `background-image: linear-gradient(
    30deg,
    ${props.theme.colors.primary.light} 0%,
    ${props.theme.colors.primary.dark} 100%
  )`};
  ${props =>
    props.secondary &&
    `background-image: linear-gradient(
    30deg,
    ${props.theme.colors.secondary.light} 0%,
    ${props.theme.colors.secondary.dark} 100%
  )`};
`;

const Wrapper = styled.article`
  position: relative;
  z-index: 100;
  border-radius: ${props => props.theme.borderRadius.default};
  box-shadow: ${props => props.theme.shadow.feature.small.default};
  transition: ${props => props.theme.transitions.boom.transition};
  height: 15rem;
  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
    transform: translateY(-12px);
    ${ImageOverlay} {
      opacity: 0.9;
    }
  }
  flex-basis: calc(99.9% * 1 / 2 - 1rem);
  max-width: calc(99.9% * 1 / 2 - 1rem);
  width: calc(99.9% * 1 / 2 - 1rem);
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    height: 12rem;
    &:first-child {
      margin-bottom: 2rem;
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
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: 3;
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.42) 35%,
      rgba(0, 0, 0, 0.52) 50%,
      rgba(0, 0, 0, 0.42) 65%,
      rgba(0, 0, 0, 0) 100%
    );
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
  top: 0;
  overflow: hidden;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  border-radius: ${props => props.theme.borderRadius.default};
  img {
    border-radius: ${props => props.theme.borderRadius.default};
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h4`
  color: ${props => props.theme.colors.white.base};
  text-align: center;
  margin-bottom: 0;
  text-shadow: ${props => props.theme.shadow.text.small};
`;

const Suggestions = ({ left, right, primary, secondary }) => (
  <Row>
    {left && (
      <Wrapper>
        <Image>
          <img src={left.frontmatter.cover.childImageSharp.resize.src} alt={left.frontmatter.title} />
        </Image>
        <StyledLink to={left.fields.slug}>
          <Title>{left.frontmatter.title}</Title>
        </StyledLink>
        <ImageOverlay primary={primary} secondary={secondary} />
      </Wrapper>
    )}

    {right && (
      <Wrapper>
        <Image>
          <img src={right.frontmatter.cover.childImageSharp.resize.src} alt={right.frontmatter.title} />
        </Image>
        <StyledLink to={right.fields.slug}>
          <Title>{right.frontmatter.title}</Title>
        </StyledLink>
        <ImageOverlay primary={primary} secondary={secondary} />
      </Wrapper>
    )}
  </Row>
);

export default Suggestions;

Suggestions.propTypes = {
  left: PropTypes.any.isRequired,
  right: PropTypes.any.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

Suggestions.defaultProps = {
  primary: true,
  secondary: false,
};

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'react-emotion';

const styledLink = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: ${p => p.theme.borderRadius.default};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  background-image: linear-gradient(
    30deg,
    ${p => p.theme.colors.primary.light} 0%,
    ${p => p.theme.colors.primary.dark} 100%
  );
  color: ${p => p.theme.colors.white.light};
  opacity: 0;
  visibility: hidden;
  transition: ${p => p.theme.transitions.default.transition};
  h2 {
    margin-bottom: 0;
  }
  &:hover {
    color: ${p => p.theme.colors.white.light};
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
  position: relative;
  border-radius: ${p => p.theme.borderRadius.default};
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: ${p => p.theme.transitions.default.transition};
  img {
    border-radius: ${p => p.theme.borderRadius.default};
  }
  &:hover {
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-12px);
    ${styledLink} {
      visibility: visible;
      opacity: 0.9;
    }
  }
`;

const ItemProject = props => (
  <Wrapper>
    <Img sizes={props.cover} />
    <styledLink to={props.path}>
      <div>{props.customer}</div>
      <h2>{props.title}</h2>
    </styledLink>
  </Wrapper>
);

export default ItemProject;

ItemProject.propTypes = {
  cover: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

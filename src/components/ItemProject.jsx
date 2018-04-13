import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled, { css } from 'react-emotion';
import theme from '../../config/theme';

const styledLink = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: ${theme.borderRadius.default};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  background-image: linear-gradient(30deg, ${theme.colors.primary.light} 0%, ${theme.colors.primary.dark} 100%);
  color: ${theme.colors.white.light};
  opacity: 0;
  visibility: hidden;
  transition: ${theme.transitions.default.transition};
  h2 {
    margin-bottom: 0;
  }
  &:hover {
    color: ${theme.colors.white.light};
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
  position: relative;
  border-radius: ${props => props.theme.borderRadius.default};
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: ${props => props.theme.transitions.default.transition};
  img {
    border-radius: ${props => props.theme.borderRadius.default};
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

const ItemProject = ({ cover, path, customer, title }) => (
  <Wrapper>
    <Img sizes={cover} />
    <Link to={path} className={styledLink}>
      <div>{customer}</div>
      <h2>{title}</h2>
    </Link>
  </Wrapper>
);

export default ItemProject;

ItemProject.propTypes = {
  cover: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

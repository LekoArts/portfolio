import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import styled from 'react-emotion';
import theme from '../../config/theme';

const discord = css`
  svg {
    fill: #7289da;
  }
  &:hover {
    background-color: #7289da;
    color: ${theme.colors.white.light};
    svg {
      fill: ${theme.colors.white.light};
    }
  }
`;

const instagram = css`
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.white.light};
    z-index: -1;
    opacity: 1;
    border-radius: 0.35rem;
    transition: opacity ${theme.transitions.default.duration};
  }
  &:before {
    content: '';
    background-color: ${theme.colors.white.light};
    background-image: linear-gradient(45deg, #f7eb4c 0%, #ee2a7b 29%, #4c6aff 100%);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 0.35rem;
    opacity: 0;
    transition: opacity ${theme.transitions.default.duration};
  }
  &:hover {
    color: ${theme.colors.white.light};
    svg {
      fill: ${theme.colors.white.light};
    }
    &:before {
      opacity: 1;
    }
    &:after {
      opacity: 0;
    }
  }
`;

const behance = css`
  svg {
    font-size: 3rem;
  }
  &:hover {
    background-color: #191919;
    color: ${theme.colors.white.light};
    svg {
      fill: ${theme.colors.white.light};
    }
  }
`;

const youtube = css`
  svg {
    fill: #ff0000;
    font-size: 3rem;
  }
  &:hover {
    background-color: #ff0000;
    color: ${theme.colors.white.light};
    svg {
      fill: ${theme.colors.white.light};
    }
  }
`;

const generalStyle = css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  color: ${theme.colors.black.base};
  border-radius: ${theme.borderRadius.default};
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: background-color ${theme.transitions.default.duration};
  svg {
    height: 4rem;
    fill: ${theme.colors.black.blue};
    margin-bottom: 0.5rem;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
    border-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.white.light};
  }
`;

const Card = styled.div`
  ${generalStyle};
`;

export { Card };

export const LinkCard = props => {
  const { children } = props;
  const color = cx(generalStyle, props.className, {
    [discord]: props.discord,
    [instagram]: props.instagram,
    [behance]: props.behance,
    [youtube]: props.youtube,
  });
  return (
    <a href={props.link} rel="noreferrer noopener" target="_blank" className={color}>
      {children}
    </a>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

LinkCard.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
  discord: PropTypes.bool,
  instagram: PropTypes.bool,
  behance: PropTypes.bool,
  youtube: PropTypes.bool,
};

LinkCard.defaultProps = {
  discord: false,
  instagram: false,
  behance: false,
  youtube: false,
};

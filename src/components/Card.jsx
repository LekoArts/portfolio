import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import styled from 'react-emotion';
import theme from '../../config/theme';

const iconStyle = css`
  .CardIcon-discord {
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
  }
  .CardIcon-instagram {
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
  }
  .CardIcon-behance {
    font-size: 3rem;
    &:hover {
      background-color: #191919;
      color: ${theme.colors.white.light};
      svg {
        fill: ${theme.colors.white.light};
      }
    }
  }
  .CardIcon-youtube {
    font-size: 3rem;
    svg {
      fill: #ff0000;
    }
    &:hover {
      background-color: #ff0000;
      color: ${theme.colors.white.light};
      svg {
        fill: ${theme.colors.white.light};
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.colors.black.base};
  border-radius: ${props => props.theme.borderRadius.default};
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: background-color ${props => props.theme.transitions.default.duration};
  svg {
    height: 4rem;
    fill: ${props => props.theme.colors.black.blue};
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
    border-radius: ${props => props.theme.borderRadius.default};
    background-color: ${props => props.theme.colors.white.light};
  }
  ${iconStyle};
`;

const LinkWrapper = Wrapper.withComponent('a');

export const Card = ({ children }) => <Wrapper>{children}</Wrapper>;

export const LinkCard = ({ children, link, company }) => (
  <LinkWrapper className={`CardIcon-${company}`} href={link} rel="noreferrer noopener" target="_blank">
    {children}
  </LinkWrapper>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

LinkCard.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  company: PropTypes.string,
};

LinkCard.defaultProps = {
  company: '',
};

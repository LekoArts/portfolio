import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const IconStyle = css`
  .CardIcon-discord {
    svg {
      fill: #7289da;
    }
    &:hover {
      background-color: #7289da;
      color: white;
      svg {
        fill: white;
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
      background-color: ${p => p.theme.colors.white.base};
      z-index: -1;
      opacity: 1;
      border-radius: 0.35rem;
      transition: opacity ${p => p.theme.transitions.default.duration};
    }
    &:before {
      content: '';
      background-color: ${p => p.theme.colors.white.base};
      background-image: linear-gradient(45deg, #f7eb4c 0%, #ee2a7b 29%, #4c6aff 100%);
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      border-radius: 0.35rem;
      opacity: 0;
      transition: opacity ${p => p.theme.transitions.default.duration};
    }
    &:hover {
      color: white;
      svg {
        fill: white;
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
      color: white;
      svg {
        fill: white;
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
      color: white;
      svg {
        fill: white;
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${p => p.theme.colors.black.base};
  border-radius: ${p => p.theme.borderRadius.default};
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: background-color ${p => p.theme.transitions.default.duration};
  svg {
    height: 4rem;
    fill: ${p => p.theme.colors.black.blue};
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
    border-radius: ${p => p.theme.borderRadius.default};
    background-color: ${p => p.theme.colors.white.dark};
  }
  ${IconStyle};
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

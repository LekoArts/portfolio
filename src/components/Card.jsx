import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'emotion'
import styled from 'react-emotion'
import theme from '../../config/theme'

const discordStyle = css`
  svg {
    fill: ${theme.colors.brands.discord};
  }
  &:hover,
  &:focus {
    background-color: ${theme.colors.brands.discord};
    color: ${theme.colors.white.light};
    svg {
      fill: ${theme.colors.white.light};
    }
  }
  &:focus {
    outline: none;
  }
`

const instagramStyle = css`
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
    border-radius: ${theme.borderRadius.default};
    transition: opacity ${theme.transitions.default.duration};
  }
  &:before {
    content: '';
    background-color: ${theme.colors.white.light};
    background-image: linear-gradient(
      45deg,
      ${theme.colors.brands.instagram.yellow} 0%,
      ${theme.colors.brands.instagram.pink} 29%,
      ${theme.colors.brands.instagram.blue} 100%
    );
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: ${theme.borderRadius.default};
    opacity: 0;
    transition: opacity ${theme.transitions.default.duration};
  }
  &:hover,
  &:focus {
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
  &:focus {
    outline: none;
  }
`

const behanceStyle = css`
  svg {
    font-size: 3rem;
  }
  &:hover,
  &:focus {
    background-color: ${theme.colors.brands.behance};
    color: ${theme.colors.white.light};
    svg {
      fill: ${theme.colors.white.light};
    }
  }
  &:focus {
    outline: none;
  }
`

const youtubeStyle = css`
  svg {
    fill: ${theme.colors.brands.youtube};
    font-size: 3rem;
  }
  &:hover,
  &:focus {
    background-color: ${theme.colors.brands.youtube};
    color: ${theme.colors.white.light};
    svg {
      fill: ${theme.colors.white.light};
    }
  }
  &:focus {
    outline: none;
  }
`

const generalStyle = css`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  color: ${theme.colors.black.base};
  border-radius: ${theme.borderRadius.default};
  box-shadow: ${theme.shadow.card};
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
`

const Card = styled.div`
  ${generalStyle};
`

export { Card }

export const LinkCard = ({ children, className, discord, instagram, behance, youtube, link }) => {
  const color = cx(generalStyle, className, {
    [discordStyle]: discord,
    [instagramStyle]: instagram,
    [behanceStyle]: behance,
    [youtubeStyle]: youtube,
  })
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={color}>
      {children}
    </a>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

LinkCard.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
  discord: PropTypes.bool,
  instagram: PropTypes.bool,
  behance: PropTypes.bool,
  youtube: PropTypes.bool,
}

LinkCard.defaultProps = {
  discord: false,
  instagram: false,
  behance: false,
  youtube: false,
  className: 'default',
}

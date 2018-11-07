import React from 'react'
import styled from 'react-emotion'
import kebabCase from 'lodash/kebabCase'
import PropTypes from 'prop-types'
import { LocalizedLink } from 'elements'
import { darken } from 'polished'

const TagsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  a {
    background: ${props => props.theme.tint.black};
    color: ${props => props.theme.colors.black.light};
    font-size: 0.9rem;
    padding: 0.2rem 0.75rem;
    border-radius: ${props => props.theme.borderRadius.default};
    margin: 0.3rem 0.6rem 0.3rem 0;
    white-space: nowrap;
    &:hover {
      background: ${props => darken(0.35, props.theme.tint.black)};
      color: ${props => darken(0.35, props.theme.colors.black.light)};
    }
  }
`

const StyledLink = styled(LocalizedLink)`
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
  }
`

const Tags = ({ tags }) => (
  <TagsContainer>
    {tags.map(tag => (
      <StyledLink key={tag} to={`/tags/${kebabCase(tag)}`} data-testid={`tag-${tag}`}>
        {tag}
      </StyledLink>
    ))}
  </TagsContainer>
)

export default Tags

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}

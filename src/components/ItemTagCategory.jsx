import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/kebabCase'
import { hideS, LocalizedLink } from 'elements'
import { localizedDate } from 'utilities'
import { LocaleConsumer } from 'elements/Layout'
import Tags from './Tags'

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  margin-top: 2rem;
`

const Information = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
    display: inline-block;
    color: ${props => props.theme.colors.black.base};
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.primary.base};
    }
  }
`

const Statistics = styled.div`
  color: ${props => props.theme.colors.black.lighter};
`

const Excerpt = styled.div`
  margin-top: 1rem;
`

const ItemTagCategory = ({ category, path, title, date, timeToRead, inputTags, excerpt }) => {
  let tags = false
  if (inputTags[0].tag) {
    tags = inputTags.map(tag => tag.tag.document[0].data.tag)
  }
  return (
    <LocaleConsumer>
      {({ i18n, locale }) => (
        <Wrapper>
          <Information>
            <LocalizedLink to={path}>
              <h1>{title}</h1>
            </LocalizedLink>
            <Statistics>
              {localizedDate(date, locale)} &mdash; {i18n.readingTime}: {timeToRead} Min. &mdash;{' '}
              <span className={hideS}>{i18n.category}: </span>
              <LocalizedLink to={`/categories/${kebabCase(category)}`}>{category}</LocalizedLink>
            </Statistics>
            {tags && <Tags tags={tags} />}
            <Excerpt>{`${excerpt}...`}</Excerpt>
          </Information>
        </Wrapper>
      )}
    </LocaleConsumer>
  )
}

export default ItemTagCategory

ItemTagCategory.propTypes = {
  category: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  inputTags: PropTypes.array.isRequired,
  excerpt: PropTypes.string.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { LocaleConsumer } from './Layout'
import locales from '../../config/i18n'

const LocalizedLink = ({ to, ...props }) => (
  <LocaleConsumer>
    {({ locale }) => {
      const isIndex = to === '/'
      const path = locales[locale].default ? to : `${locales[locale].path}${isIndex ? '' : to}`
      return <Link {...props} to={path} />
    }}
  </LocaleConsumer>
)

export default LocalizedLink

LocalizedLink.propTypes = {
  to: PropTypes.string.isRequired,
}

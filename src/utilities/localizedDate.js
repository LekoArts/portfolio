import { format, parseISO } from 'date-fns'
import locales from '../../config/i18n'

/**
 * Output a formatted date with a given locale
 * @param {string} date - Coming from the GraphQL query
 * @param {string} locale - Via the Context API
 * @returns {string}
 */

const localizedDate = (date, locale) => format(parseISO(date), locales[locale].dateFormat)

export default localizedDate

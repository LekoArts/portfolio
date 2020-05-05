const join = require('lodash/join')

/**
 * Fulltext - Get the complete content of a post to e.g. use it for wordCount or a timeToRead feature
 * @param input
 * @returns {string} - The content of the slice in text form
 */

const fullText = (input) =>
  input.body.map((slice) => {
    if (slice.slice_type === 'text') {
      if (slice.primary.text) {
        const content = slice.primary.text.map((t) => t.text)
        return join(content)
      }
    }
    if (slice.slice_type === 'code_block') {
      return slice.primary['code-block'][0].text
    }
    return null
  })

module.exports = fullText

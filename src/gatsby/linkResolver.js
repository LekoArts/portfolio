const i18n = require('../../config/i18n')

const linkResolver = (doc) => {
  // Give the project/blog links the appropriate language path
  const prefix = i18n[doc.lang].default ? `/` : `/${i18n[doc.lang].path}/`

  // Since the uid needs to be unique and the pathname is done by Gatsby (src/pages)
  // the single pages (e.g. /contact) have names of the following pattern:
  // DE: contact-de-de
  // EN: contact-en-gb
  // Therefore I slice the "-de-de" / "-en-gb" part
  const singlePagePath = `${doc.uid}`.slice(0, -6)

  if (doc.type === 'projekt') return `${prefix}projects/${doc.uid}`
  if (doc.type === 'blogpost') return `${prefix}blog/${doc.uid}`

  return `${prefix}${singlePagePath}`
}

module.exports = linkResolver

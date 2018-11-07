const _ = require('lodash')
const locales = require('../../config/i18n')

const prevNext = (list, item) => {
  // Create a random selection of the other posts (excluding the current post)
  const filterUnique = _.filter(list, input => input.node.fields.slug !== item.node.fields.slug)
  // Only use the current language
  const filterLanguage = _.filter(filterUnique, input => input.node.lang === item.node.lang)
  const sample = _.sampleSize(filterLanguage, 2)

  return {
    left: sample[0].node,
    right: sample[1].node,
  }
}

const createPosts = (list, createPage, template) =>
  list.forEach(post => {
    const samples = prevNext(list, post)
    const { left, right } = samples

    const {
      lang,
      fields: { slug },
    } = post.node
    const i18n = locales[lang]

    createPage({
      path: slug,
      component: template,
      context: {
        slug,
        locale: lang,
        i18n,
        left,
        right,
      },
    })
  })

const createProjects = (list, createPage, template) =>
  list.forEach(project => {
    const samples = prevNext(list, project)
    const { left, right } = samples

    const {
      lang,
      fields: { slug },
    } = project.node
    const i18n = locales[lang]

    createPage({
      path: slug,
      component: template,
      context: {
        slug,
        locale: lang,
        i18n,
        left,
        right,
      },
    })
  })

const createCategories = (list, createPage, template) =>
  list.forEach(c => {
    const category = c.node.data.kategorie
    const { lang } = c.node
    const localizedPath = locales[lang].default
      ? `/categories/${_.kebabCase(category)}`
      : `/${locales[lang].path}/categories/${_.kebabCase(category)}`
    const i18n = locales[lang]

    createPage({
      path: localizedPath,
      component: template,
      context: {
        category,
        locale: lang,
        i18n,
      },
    })
  })

const createTags = (list, createPage, template) =>
  list.forEach(t => {
    const { tag } = t.node.data
    const { lang } = t.node
    const localizedPath = locales[lang].default
      ? `/tags/${_.kebabCase(tag)}`
      : `/${locales[lang].path}/tags/${_.kebabCase(tag)}`
    const i18n = locales[lang]

    createPage({
      path: localizedPath,
      component: template,
      context: {
        tag,
        locale: lang,
        i18n,
      },
    })
  })

module.exports = { createPosts, createProjects, createCategories, createTags }

const path = require('path')
const { ex, fullText, timeToRead } = require('./src/utilities')
const { createPosts, createProjects, createCategories, createTags } = require('./src/gatsby/pageCreator')
const gatsbyNodeGraphQL = require('./src/gatsby/gatsbyNodeGraphQL')
const locales = require('./config/i18n')

const replaceTrailing = _path => (_path === `/` ? _path : _path.replace(/\/$/, ``))
const replaceBoth = _path => _path.replace(/^\/|\/$/g, '')
const localizedSlug = (_page, node) =>
  locales[node.lang].default ? `/${_page}/${node.uid}` : `/${locales[node.lang].path}/${_page}/${node.uid}`

// Insert additional info into the nodes for queries
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  let slug
  let excerpt
  let TTR

  // node.dataString is the original response from the API which indluces all informaiton

  if (node.internal.type === 'PrismicProjekt') {
    const data = JSON.parse(node.dataString)

    // node.lang returns the lang, e.g. de-de
    slug = localizedSlug('projects', node)

    // Since every project starts with a heading the element to extract from is the second item in the array
    excerpt = ex(data.body[0].primary.text[1].text)
    createNodeField({ node, name: 'slug', value: slug })
    createNodeField({ node, name: 'excerpt', value: excerpt })
    createNodeField({ node, name: 'sourceType', value: locales[node.lang].projects })
  }
  if (node.internal.type === 'PrismicBlogpost') {
    const data = JSON.parse(node.dataString)
    const allText = fullText(data).toString()

    slug = localizedSlug('blog', node)

    // Use the first text block for the excerpt
    excerpt = ex(data.body[0].primary.text[0].text)
    TTR = timeToRead(allText)
    createNodeField({ node, name: 'slug', value: slug })
    createNodeField({ node, name: 'excerpt', value: excerpt })
    createNodeField({ node, name: 'timeToRead', value: TTR })
    createNodeField({ node, name: 'sourceType', value: 'Blog' })
  }
}

// Take the pages from src/pages and generate pages for all locales, e.g. /blog and /en/blog
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Only create one 404 page at /404.html
  if (page.path.includes('404')) {
    return Promise.resolve()
  }

  return new Promise(resolve => {
    // First delete all pages
    deletePage(page)

    Object.keys(locales).map(lang => {
      // Remove the trailing slash from the path, e.g. --> /blog
      page.path = replaceTrailing(page.path)

      // Remove the leading AND traling slash from path, e.g. --> blog
      const pageName = replaceBoth(page.path)
      const localizedPath = locales[lang].default ? page.path : `${locales[lang].path}${page.path}`

      // This name is also used as "slug" (UID) in the Prismic backend. Result --> blog-de-de
      const localizedName = `${pageName}-${locales[lang].locale}`
      const i18n = locales[lang]

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
          name: localizedName,
          i18n,
        },
      })
    })

    resolve()
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // Path to templates
    const postTemplate = path.resolve('src/templates/post.jsx')
    const projectTemplate = path.resolve('src/templates/project.jsx')
    const categoryTemplate = path.resolve('src/templates/category.jsx')
    const tagTemplate = path.resolve('src/templates/tag.jsx')

    resolve(
      graphql(`
        {
          ${gatsbyNodeGraphQL}
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Programatically create pages with templates
        createPosts(result.data.posts.edges, createPage, postTemplate)
        createProjects(result.data.projects.edges, createPage, projectTemplate)
        createCategories(result.data.categories.edges, createPage, categoryTemplate)
        createTags(result.data.tags.edges, createPage, tagTemplate)
      })
    )
  })
}

// Allow me to use something like: import { X } from 'directory' instead of '../../folder/directory'
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

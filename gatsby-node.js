const path = require('path')
const { ex, fullText, timeToRead } = require('./src/utilities')
const { createPosts, createProjects, createCategories, createTags } = require('./src/gatsby/pageCreator')
const gatsbyNodeGraphQL = require('./src/gatsby/gatsbyNodeGraphQL')
const locales = require('./config/i18n')

// Remove trailing slashes unless it's only "/", then leave it as it is
const replaceTrailing = (_path) => (_path === `/` ? _path : _path.replace(/\/$/, ``))
// Remove slashes at the beginning and end
const replaceBoth = (_path) => _path.replace(/^\/|\/$/g, '')
// If the "lang" is the default language, don't create a prefix. Otherwise add a "/en" before the slug (defined in "locales")
const localizedSlug = (_page, node) =>
  locales[node.lang].default ? `/${_page}/${node.uid}` : `/${locales[node.lang].path}/${_page}/${node.uid}`

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = (promise) =>
  promise.then((result) => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

// Insert additional info into the nodes for queries
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  let slug
  let excerpt
  let TTR

  // node.dataString is the original response from the API which indluces all informaiton

  if (node.internal.type === 'PrismicProjekt') {
    // This is the complete API response in one string
    const data = JSON.parse(node.dataString)

    // node.lang returns the lang, e.g. de-de
    slug = localizedSlug('projects', node)

    // The first slice is the normal rich text. That's why I chose body[0] here
    // Since every project starts with a heading, the element to extract from is the second item in the array of the first slice (text[1])
    excerpt = ex(data.body[0].primary.text[1].text)
    createNodeField({ node, name: 'slug', value: slug })
    createNodeField({ node, name: 'excerpt', value: excerpt })
  }

  if (node.internal.type === 'PrismicBlogpost') {
    const data = JSON.parse(node.dataString)
    const allText = fullText(data).toString()

    slug = localizedSlug('blog', node)

    // Check if the first slice (body[0]) has a text type
    if (data.body[0].primary.text) {
      // Use the first text node as an excerpt
      excerpt = ex(data.body[0].primary.text[0].text)
    } else if (!data.body[0].primary.text) {
      // If the first slice is e.g. a note, use the second slice (body[1]) + text type
      excerpt = ex(data.body[1].primary.text[0].text)
    } else {
      // If no excerpt can be extracted, give a default
      excerpt = 'No excerpt available'
    }
    TTR = timeToRead(allText)
    createNodeField({ node, name: 'slug', value: slug })
    createNodeField({ node, name: 'excerpt', value: excerpt })
    createNodeField({ node, name: 'timeToRead', value: TTR })
  }
}

// Take the pages from src/pages and generate pages for all locales, e.g. /blog and /en/blog
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Only create one 404 page at /404.html
  if (page.path.includes('404')) {
    return
  }

  // First delete the pages so we can re-create them
  deletePage(page)

  Object.keys(locales).map((lang) => {
    // Remove the trailing slash from the path, e.g. --> /blog
    page.path = replaceTrailing(page.path)

    // Remove the leading AND traling slash from path, e.g. --> blog
    const name = replaceBoth(page.path)
    // Create the "slugs" for the pages like in "onCreateNode". Unless default language, add prefix àla "/en"
    const localizedPath = locales[lang].default ? page.path : `${locales[lang].path}${page.path}`

    return createPage({
      ...page,
      path: localizedPath,
      context: {
        locale: lang,
        name,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Path to templates
  const postTemplate = require.resolve('./src/templates/post.jsx')
  const projectTemplate = require.resolve('./src/templates/project.jsx')
  const categoryTemplate = require.resolve('./src/templates/category.jsx')
  const tagTemplate = require.resolve('./src/templates/tag.jsx')

  const result = await wrapper(
    graphql(`
      {
        ${gatsbyNodeGraphQL}
      }
    `)
  )

  // Programmatically create pages with templates and helper functions
  createPosts(result.data.posts.edges, createPage, postTemplate)
  createProjects(result.data.projects.edges, createPage, projectTemplate)
  createCategories(result.data.categories.edges, createPage, categoryTemplate)
  createTags(result.data.tags.edges, createPage, tagTemplate)
}

// Allow me to use something like: import { X } from 'directory' instead of '../../folder/directory'
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

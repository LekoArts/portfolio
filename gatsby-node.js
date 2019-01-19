const path = require('path')
const { ex, fullText, timeToRead } = require('./src/utilities')
const { createPosts, createProjects, createCategories, createTags } = require('./src/gatsby/pageCreator')
const gatsbyNodeGraphQL = require('./src/gatsby/gatsbyNodeGraphQL')
const locales = require('./config/i18n')

// Remove trailing slashes unless it's only "/", then leave it as it is
const replaceTrailing = _path => (_path === `/` ? _path : _path.replace(/\/$/, ``))
// Remove slashes at the beginning and end
const replaceBoth = _path => _path.replace(/^\/|\/$/g, '')
// If the "lang" is the default language, don't create a prefix. Otherwise add a "/en" before the slug (defined in "locales")
const localizedSlug = (_page, node) =>
  locales[node.lang].default ? `/${_page}/${node.uid}` : `/${locales[node.lang].path}/${_page}/${node.uid}`
const wrapper = promise => promise.then(result => ({ result, error: null })).catch(error => ({ error, result: null }))

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

    // Since every project starts with a heading the element to extract from is the second item in the array
    excerpt = ex(data.body[0].primary.text[1].text)
    createNodeField({ node, name: 'slug', value: slug })
    createNodeField({ node, name: 'excerpt', value: excerpt })
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

  Object.keys(locales).map(lang => {
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

  const { error, result } = await wrapper(
    graphql(`
      {
        ${gatsbyNodeGraphQL}
      }
    `)
  )

  if (!error) {
    // Programatically create pages with templates
    createPosts(result.data.posts.edges, createPage, postTemplate)
    createProjects(result.data.projects.edges, createPage, projectTemplate)
    createCategories(result.data.categories.edges, createPage, categoryTemplate)
    createTags(result.data.tags.edges, createPage, tagTemplate)
    return
  }
  console.log(error)
}

// Allow me to use something like: import { X } from 'directory' instead of '../../folder/directory'
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

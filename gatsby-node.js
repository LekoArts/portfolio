const path = require('path')
const _ = require('lodash')
const { ex, fullText, timeToRead } = require('./src/utilities')
const locales = require('./config/i18n')

const replaceTrailing = _path => (_path === `/` ? _path : _path.replace(/\/$/, ``))
const replaceBoth = _path => _path.replace(/^\/|\/$/g, '')

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
    slug = locales[node.lang].default ? `/projects/${node.uid}` : `/${locales[node.lang].path}/projects/${node.uid}`

    // Since every project starts with a heading the element to extract from is the second item in the array
    excerpt = ex(data.body[0].primary.text[1].text)
    createNodeField({ node, name: 'slug', value: slug })
    createNodeField({ node, name: 'excerpt', value: excerpt })
    createNodeField({ node, name: 'sourceType', value: locales[node.lang].translation.projects })
  }
  if (node.internal.type === 'PrismicBlogpost') {
    const data = JSON.parse(node.dataString)
    const allText = fullText(data).toString()

    slug = locales[node.lang].default ? `/blog/${node.uid}` : `/${locales[node.lang].path}/blog/${node.uid}`

    excerpt = ex(data.body[0].primary.text[0].text) // Use the first text block for the excerpt
    TTR = timeToRead(allText)
    createNodeField({ node, name: 'slug', value: slug })
    createNodeField({ node, name: 'excerpt', value: excerpt })
    createNodeField({ node, name: 'timeToRead', value: TTR })
    createNodeField({ node, name: 'sourceType', value: locales[node.lang].translation.blog })
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
    deletePage(page)

    Object.keys(locales).map(lang => {
      page.path = replaceTrailing(page.path) // Remove the trailing slash from the path, e.g. --> /blog
      const pageName = replaceBoth(page.path) // Remove the leading AND traling slash from path, e.g. --> blog
      const localizedPath = locales[lang].default ? page.path : `${locales[lang].path}${page.path}`
      const localizedName = `${pageName}-${locales[lang].locale}` // This name is also used as "slug" (UID) in the Prismic backend. Result --> blog-de-de
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
    const postPage = path.resolve('src/templates/post.jsx')
    const projectPage = path.resolve('src/templates/project.jsx')
    const categoryPage = path.resolve('src/templates/category.jsx')
    const tagPage = path.resolve('src/templates/tag.jsx')

    resolve(
      graphql(`
        {
          posts: allPrismicBlogpost(sort: { fields: [data___date], order: DESC }) {
            edges {
              node {
                fields {
                  slug
                }
                lang
                data {
                  title {
                    text
                  }
                  cover {
                    localFile {
                      childImageSharp {
                        resize(width: 600) {
                          src
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          projects: allPrismicProjekt(sort: { fields: [data___date], order: DESC }) {
            edges {
              node {
                fields {
                  slug
                }
                lang
                data {
                  title {
                    text
                  }
                  cover {
                    localFile {
                      childImageSharp {
                        resize(width: 600) {
                          src
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          categories: allPrismicKategorie(sort: { fields: data___kategorie, order: ASC }) {
            edges {
              node {
                lang
                data {
                  kategorie
                }
              }
            }
          }
          tags: allPrismicTag(sort: { fields: data___tag, order: ASC }) {
            edges {
              node {
                lang
                data {
                  tag
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const postsList = result.data.posts.edges
        const projectsList = result.data.projects.edges
        const categoriesList = result.data.categories.edges
        const tagsList = result.data.tags.edges

        postsList.forEach(post => {
          // Create a random selection of the other posts (excluding the current post)
          const filtered = _.filter(postsList, input => input.node.fields.slug !== post.node.fields.slug)
          const sample = _.sampleSize(filtered, 2)
          const left = sample[0].node
          const right = sample[1].node
          const {
            lang,
            fields: { slug },
          } = post.node
          const i18n = locales[lang]

          createPage({
            path: slug,
            component: postPage,
            context: {
              slug,
              locale: lang,
              i18n,
              left,
              right,
            },
          })
        })

        projectsList.forEach(project => {
          // Create a random selection of the other posts (excluding the current post)
          const filtered = _.filter(projectsList, input => input.node.fields.slug !== project.node.fields.slug)
          const sample = _.sampleSize(filtered, 2)
          const left = sample[0].node
          const right = sample[1].node
          const {
            lang,
            fields: { slug },
          } = project.node
          const i18n = locales[lang]

          createPage({
            path: slug,
            component: projectPage,
            context: {
              slug,
              locale: lang,
              i18n,
              left,
              right,
            },
          })
        })

        categoriesList.forEach(c => {
          const category = c.node.data.kategorie
          const { lang } = c.node
          const localizedPath = locales[lang].default
            ? `/categories/${_.kebabCase(category)}`
            : `/${locales[lang].path}/categories/${_.kebabCase(category)}`
          const i18n = locales[lang]

          createPage({
            path: localizedPath,
            component: categoryPage,
            context: {
              category,
              locale: lang,
              i18n,
            },
          })
        })

        tagsList.forEach(t => {
          const { tag } = t.node.data
          const { lang } = t.node
          const localizedPath = locales[lang].default
            ? `/tags/${_.kebabCase(tag)}`
            : `/${locales[lang].path}/tags/${_.kebabCase(tag)}`
          const i18n = locales[lang]

          createPage({
            path: localizedPath,
            component: tagPage,
            context: {
              tag,
              locale: lang,
              i18n,
            },
          })
        })
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

const path = require('path');
const _ = require('lodash');

const pathPrefixes = {
  posts: '/blog',
  projects: '/projekte',
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const pathPrefix = pathPrefixes[fileNode.sourceInstanceName];
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'customer')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.customer)}-${_.kebabCase(node.frontmatter.title)}`;
    }
    createNodeField({ node, name: 'sourceInstanceName', value: fileNode.sourceInstanceName });
    createNodeField({ node, name: 'slug', value: `${pathPrefix}${slug}` });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postPage = path.resolve('src/templates/post.jsx');
    const projectPage = path.resolve('src/templates/project.jsx');
    const tagPage = path.resolve('src/templates/tag.jsx');
    const categoryPage = path.resolve('src/templates/category.jsx');
    resolve(
      graphql(`
        {
          posts: allMarkdownRemark(
            filter: { fields: { sourceInstanceName: { eq: "posts" } } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                frontmatter {
                  tags
                  category
                  title
                  cover {
                    childImageSharp {
                      resize(width: 400) {
                        src
                      }
                    }
                  }
                }
                fields {
                  slug
                }
              }
            }
          }
          projects: allMarkdownRemark(
            filter: { fields: { sourceInstanceName: { eq: "projects" } } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  cover {
                    childImageSharp {
                      resize(width: 400) {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const tagSet = new Set();
        const categorySet = new Set();

        const postsList = result.data.posts.edges;
        const projectsList = result.data.projects.edges;

        postsList.forEach(edge => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);
            });
          }

          if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category);
          }

          const filtered = _.filter(postsList, input => input.node.fields.slug !== edge.node.fields.slug);
          const sample = _.sampleSize(filtered, 2);
          const left = sample[0].node;
          const right = sample[1].node;

          createPage({
            path: edge.node.fields.slug,
            component: postPage,
            context: {
              slug: edge.node.fields.slug,
              left,
              right,
            },
          });
        });

        projectsList.forEach(edge => {
          const filtered = _.filter(projectsList, input => input.node.fields.slug !== edge.node.fields.slug);
          const sample = _.sampleSize(filtered, 2);
          const left = sample[0].node;
          const right = sample[1].node;

          createPage({
            path: edge.node.fields.slug,
            component: projectPage,
            context: {
              slug: edge.node.fields.slug,
              left,
              right,
            },
          });
        });

        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag,
            },
          });
        });

        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryPage,
            context: {
              category,
            },
          });
        });
      })
    );
  });
};

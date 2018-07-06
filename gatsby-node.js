const path = require('path');
const _ = require('lodash');
const { ex, fullText, timeToRead } = require('./src/utilities');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  let slug;
  let excerpt;
  let TTR;

  if (node.internal.type === 'PrismicProjekt') {
    const data = JSON.parse(node.dataString);
    slug = `/projekte/${node.uid}`;
    excerpt = ex(data.body[0].primary.text[1].text);
    createNodeField({ node, name: 'slug', value: slug });
    createNodeField({ node, name: 'excerpt', value: excerpt });
    createNodeField({ node, name: 'sourceType', value: 'Projekte' });
  }
  if (node.internal.type === 'PrismicBlogpost') {
    const data = JSON.parse(node.dataString);
    const allText = fullText(data).toString();
    slug = `/blog/${node.uid}`;
    excerpt = ex(data.body[0].primary.text[0].text);
    TTR = timeToRead(allText);
    createNodeField({ node, name: 'slug', value: slug });
    createNodeField({ node, name: 'excerpt', value: excerpt });
    createNodeField({ node, name: 'timeToRead', value: TTR });
    createNodeField({ node, name: 'sourceType', value: 'Blog' });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postPage = path.resolve('src/templates/post.jsx');
    const projectPage = path.resolve('src/templates/project.jsx');
    const categoryPage = path.resolve('src/templates/category.jsx');
    const tagPage = path.resolve('src/templates/tag.jsx');

    resolve(
      graphql(`
        {
          posts: allPrismicBlogpost(sort: { fields: [data___date], order: DESC }) {
            edges {
              node {
                fields {
                  slug
                }
                data {
                  title {
                    text
                  }
                  category {
                    document {
                      data {
                        kategorie
                      }
                    }
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
                  tags {
                    tag {
                      document {
                        data {
                          tag
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
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const categorySet = new Set();
        const tagSet = new Set();

        const postsList = result.data.posts.edges;
        const projectsList = result.data.projects.edges;

        postsList.forEach(post => {
          if (post.node.data.category.document[0].data.kategorie) {
            categorySet.add(post.node.data.category.document[0].data.kategorie);
          }

          if (post.node.data.tags[0].tag) {
            post.node.data.tags.forEach(tag => {
              tagSet.add(tag.tag.document[0].data.tag);
            });
          }

          const filtered = _.filter(postsList, input => input.node.fields.slug !== post.node.fields.slug);
          const sample = _.sampleSize(filtered, 2);
          const left = sample[0].node;
          const right = sample[1].node;

          createPage({
            path: post.node.fields.slug,
            component: postPage,
            context: {
              slug: post.node.fields.slug,
              left,
              right,
            },
          });
        });

        projectsList.forEach(project => {
          const filtered = _.filter(projectsList, input => input.node.fields.slug !== project.node.fields.slug);
          const sample = _.sampleSize(filtered, 2);
          const left = sample[0].node;
          const right = sample[1].node;

          createPage({
            path: project.node.fields.slug,
            component: projectPage,
            context: {
              slug: project.node.fields.slug,
              left,
              right,
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
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

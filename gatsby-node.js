const path = require('path');
const _ = require('lodash');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  let slug;
  if (node.internal.type === 'PrismicProjekt') {
    slug = `/projekt/${node.uid}`;
    createNodeField({ node, name: 'slug', value: slug });
  }
  if (node.internal.type === 'PrismicBlogpost') {
    slug = `/blog/${node.uid}`;
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

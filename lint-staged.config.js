module.exports = {
  '*.{js,jsx}': ['eslint --ignore-path .gitignore --fix'],
  '*.+(json|yml|yaml|css|less|scss|md|graphql|mdx)': ['prettier --write'],
}

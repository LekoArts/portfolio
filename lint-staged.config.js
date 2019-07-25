module.exports = {
  '*.{js,jsx}': ['eslint'],
  '*.+(json|yml|yaml|css|less|scss|md|graphql|mdx)': ['prettier --write', 'git add'],
}

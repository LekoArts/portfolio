module.exports = {
  '*.{js,jsx}': ['eslint --ignore-path .gitignore --fix', 'git add'],
  '*.+(json|yml|yaml|css|less|scss|md|graphql|mdx)': ['prettier --write', 'git add'],
}

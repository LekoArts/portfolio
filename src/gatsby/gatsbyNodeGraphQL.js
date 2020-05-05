const gatsbyNodeGraphQL = `
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
`

module.exports = gatsbyNodeGraphQL

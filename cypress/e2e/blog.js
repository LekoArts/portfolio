const BlogTitle = 'Quicktipp: Netlify & Discord Webhooks'

describe('Blog', () => {
  beforeEach(() => {
    cy.visit('/blog')
  })
  it('Cover links to Blogpost', () => {
    cy.getByTitle(BlogTitle)
      .click()
      .getByText(BlogTitle)
  })
  it('Title links to Blogpost', () => {
    cy.getByText(BlogTitle)
      .click()
      .getByText(BlogTitle)
  })
  it('Category links to overview of that Category', () => {
    cy.getByText('Quicktipp')
      .click()
      .getByTestId('header-title')
      .getByText('Quicktipp')
      .getByText(BlogTitle)
  })
  it('Tag in the Blogpost links to overview of that Tag', () => {
    cy.getByText(BlogTitle)
      .click()
      .getByTestId('tag-Discord')
      .click()
      .getByTestId('header-title')
      .should('contain', 'Discord')
      .getByText(BlogTitle)
  })
})

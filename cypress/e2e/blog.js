const BlogTitle = 'Quicktipp: Netlify & Discord Webhooks'

describe('Blog', () => {
  beforeEach(() => {
    cy.visit('/blog').waitForRouteChange()
  })
  it('Cover links to Blogpost', () => {
    cy.getByTitle(BlogTitle)
      .click()
      .waitForRouteChange()
      .getByText(BlogTitle)
  })
  it('Title links to Blogpost', () => {
    cy.getByText(BlogTitle)
      .click()
      .waitForRouteChange()
      .getByText(BlogTitle)
  })
  it('Category links to overview of that Category', () => {
    cy.getByText('Quicktipp')
      .click()
      .waitForRouteChange()
      .getByTestId('header-title')
      .getByText(BlogTitle)
  })
  it('Tag in the Blogpost links to overview of that Tag', () => {
    cy.getByText(BlogTitle)
      .click()
      .waitForRouteChange()
      .getByTestId('tag-Discord')
      .click()
      .waitForRouteChange()
      .getByTestId('header-title')
      .should('contain', 'Discord')
      .getByText(BlogTitle)
  })
})

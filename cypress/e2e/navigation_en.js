describe('Navigation English', () => {
  beforeEach(() => {
    cy.visit('/en')
  })
  it('in the header works', () => {
    cy.getByText('Projects')
      .click({ force: true })
      .assertRoute('/en/projects')
      .getByText('Blog')
      .click({ force: true })
      .assertRoute('/en/blog')
      .getByText('Contact')
      .click({ force: true })
      .assertRoute('/en/contact')
  })
  it('to internal sites in the footer works', () => {
    cy.getByText('Privacy Policy')
      .click({ force: true })
      .assertRoute('/en/privacy')
      .getByText('Imprint')
      .click({ force: true })
      .assertRoute('/en/imprint')
      .getByText('Freebies')
      .click({ force: true })
      .assertRoute('/en/categories/freebie')
    /*
      .getByText('Tutorials')
      .click()
      .assertRoute('/en/categories/tutorial')
      */
  })
})

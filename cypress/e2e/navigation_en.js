describe('Navigation English', () => {
  beforeEach(() => {
    cy.visit('/en')
  })
  it('in the header works', () => {
    cy.getByText('Projects')
      .click()
      .assertRoute('/en/projects')
      .getByText('Blog')
      .click()
      .assertRoute('/en/blog')
      .getByText('Contact')
      .click()
      .assertRoute('/en/contact')
  })
  it('to internal sites in the footer works', () => {
    cy.getByText('Privacy Policy')
      .click()
      .assertRoute('/en/privacy')
      .getByText('Imprint')
      .click()
      .assertRoute('/en/imprint')
    /*
      .getByText('Tutorials')
      .click()
      .assertRoute('/en/categories/tutorial')
      .getByText('Freebies')
      .click()
      .assertRoute('/en/categories/freebie')
      */
  })
})

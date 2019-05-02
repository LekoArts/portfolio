describe('Navigation English', () => {
  beforeEach(() => {
    cy.visit('/en').waitForRouteChange()
  })
  it('in the header works', () => {
    cy.get('nav').within(() => {
      cy.getByText('Projects')
        .click({ force: true })
        .waitForRouteChange()
        .assertRoute('/en/projects')
    })
    cy.getByText('Blog')
      .click({ force: true })
      .waitForRouteChange()
      .assertRoute('/en/blog')
      .getByText('Contact')
      .click({ force: true })
      .waitForRouteChange()
      .assertRoute('/en/contact')
  })
  it('to internal sites in the footer works', () => {
    cy.getByText('Privacy Policy')
      .click({ force: true })
      .waitForRouteChange()
      .assertRoute('/en/privacy')
      .getByText('Imprint')
      .click({ force: true })
      .waitForRouteChange()
      .assertRoute('/en/imprint')
      .getByText('Freebies')
      .click({ force: true })
      .waitForRouteChange()
      .assertRoute('/en/categories/freebie')
      .getByText('Tutorials')
      .click({ force: true })
      .waitForRouteChange()
      .assertRoute('/en/categories/tutorial')
  })
})

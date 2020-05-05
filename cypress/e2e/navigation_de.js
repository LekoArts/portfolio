describe('Navigation German', () => {
  beforeEach(() => {
    cy.visit('/').waitForRouteChange()
  })
  it('in the nav works', () => {
    cy.get('nav').within(() => {
      cy.findByText('Projekte').should('have.attr', 'href').and('include', '/projects')
      cy.findByText('Blog').should('have.attr', 'href').and('include', '/blog')
      cy.findByText('Kontakt').should('have.attr', 'href').and('include', '/contact')
    })
  })
  it('in the logo works', () => {
    cy.visit(`/blog`)
    cy.findByLabelText(/LekoArts, Back to homepage/)
      .click({ force: true })
      .waitForRouteChange()
      .assertRoute('/')
  })
  it('to external sites in the footer works', () => {
    cy.findByText('Behance').should('have.prop', 'href', 'https://www.behance.net/lekoarts')
    cy.findByText('Dribbble').should('have.prop', 'href', 'https://dribbble.com/LekoArts')
    cy.findByText('GitHub').should('have.prop', 'href', 'https://github.com/LekoArts')
    cy.findByText('Instagram').should('have.prop', 'href', 'https://www.instagram.com/lekoarts.de')
    cy.findByText('Patreon').should('have.prop', 'href', 'https://www.patreon.com/lekoarts')
  })
  it('to internal sites in the footer works', () => {
    cy.findByText('Datenschutzerklärung').click({ force: true }).waitForRouteChange().assertRoute('/privacy')
    cy.findByText('Tutorials').click({ force: true }).waitForRouteChange().assertRoute('/categories/tutorial')
    cy.findByText('Impressum').click({ force: true }).waitForRouteChange().assertRoute('/imprint')
    cy.findByText('Freebies').click({ force: true }).waitForRouteChange().assertRoute('/categories/freebie')
  })
})

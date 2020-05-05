describe('Contact', () => {
  it('E-Mail Button has right link', () => {
    cy.visit('/contact').waitForRouteChange()
    cy.findByText('E-Mail').should('have.prop', 'href', 'mailto:hello@lekoarts.de')
  })
})

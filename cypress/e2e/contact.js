describe('Contact', () => {
  it('E-Mail Button has right link', () => {
    cy.visit('/contact')
      .findByText('E-Mail')
      .should('have.prop', 'href', 'mailto:hello@lekoarts.de')
  })
})

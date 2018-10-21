describe('Contact', () => {
  it('Page loads', () => {
    cy.visit('/kontakt')
  })
  it('E-Mail Button has right link', () => {
    cy.visit('/kontakt')
      .getByText('E-Mail')
      .should('have.prop', 'href', 'mailto:hello@lekoarts.de')
  })
})

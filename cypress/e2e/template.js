/* globals cy */

describe('Project & Blogpost', () => {
  it('Suggestions work', () => {
    cy.visit('/projekte/krotus-computer-produktion-einer-eigenen-tastatur')
      .getByText('Kunde')
      .should('exist')
      .getByTestId('suggestion-left')
      .click()
      .getByText('Kunde')
      .should('exist')
      .getByTestId('suggestion-right')
      .click()
      .getByText('Kunde')
      .should('exist')
  })
})

describe('Blogpost', () => {
  beforeEach(() => {
    cy.visit('/blog/quicktipp-netlify-discord-webhooks')
  })
  it('Suggestions work', () => {
    cy.getByTestId('suggestion-left')
      .click()
      .getByTestId('suggestion-right')
      .click()
  })
  it('Blogpost footer links to patreon', () => {
    cy.getByText('Patreon').should('have.prop', 'href', 'https://www.patreon.com/lekoarts')
  })
})

describe('Switch', () => {
  it('Language Switch works', () => {
    cy.visit('/')
      .getByText('Englisch')
      .click()
      .waitForRouteChange()
      .assertRoute('/en')
      .getByText('German')
      .click()
      .waitForRouteChange()
      .assertRoute('/')
  })
})

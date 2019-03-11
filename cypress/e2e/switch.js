describe('Switch', () => {
  it('Language Switch works', () => {
    cy.visit('/')
      .waitForRouteChange()
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

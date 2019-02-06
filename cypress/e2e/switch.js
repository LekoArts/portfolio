describe('Switch', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Language Switch works', () => {
    cy.getByText('Englisch')
      .click()
      .assertRoute('/en')
      .getByText('German')
      .click()
      .assertRoute('/')
  })
})

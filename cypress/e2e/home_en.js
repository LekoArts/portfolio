describe('Home English', () => {
  beforeEach(() => {
    cy.visit('/en')
  })
  it('Index button (Projects) work', () => {
    cy.get('a[type="primary"]')
      .should('contain', 'Projects')
      .click()
      .assertRoute('/en/projects')
  })
  it('Index button (Blog) work', () => {
    cy.get('a[type="secondary"]')
      .should('contain', 'Blog')
      .click()
      .assertRoute('/en/blog')
  })
  it('Featured Projects load', () => {
    cy.getByTestId('featured-project-0')
      .click()
      .getByText('Period')
      .should('exist')
    /*
    cy.visit('/en')
      .getByTestId('featured-project-1')
      .click()
      .getByText('Customer')
      .should('exist')
    cy.visit('/en')
      .getByTestId('featured-project-2')
      .click()
      .getByText('Customer')
      .should('exist')
    */
  })
  it('Featured Posts load', () => {
    cy.getByTestId('featured-post-0')
      .click()
      .getByText('Sparked your interest?')
      .should('exist')
    /*
    cy.visit('/en')
      .getByTestId('featured-post-1')
      .click()
      .getByText('Weitere Blogeinträge')
      .should('exist')
    */
  })
})

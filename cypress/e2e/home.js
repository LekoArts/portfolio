/* globals cy */

describe('Home', () => {
  it('Featured Projects load', () => {
    cy.visit('/')
      .getByTestId('featured-project-0')
      .click()
      .getByText('Kunde')
      .should('exist');
    cy.visit('/')
      .getByTestId('featured-project-1')
      .click()
      .getByText('Kunde')
      .should('exist');
    cy.visit('/')
      .getByTestId('featured-project-2')
      .click()
      .getByText('Kunde')
      .should('exist');
  });
  it('Featured Posts load', () => {
    cy.visit('/')
      .getByTestId('featured-post-0')
      .click()
      .getByText('Weitere Blogeinträge')
      .should('exist');
    cy.visit('/')
      .getByTestId('featured-post-1')
      .click()
      .getByText('Weitere Blogeinträge')
      .should('exist');
  });
  it('Primary button works', () => {
    cy.visit('/')
      .get('a[type="primary"]')
      .should('contain', 'Projekte')
      .click()
      .assertRoute('/projekte');
  });
  it('Secondary button works', () => {
    cy.visit('/')
      .get('a[type="secondary"]')
      .should('contain', 'Blog')
      .click()
      .assertRoute('/blog');
  });
});

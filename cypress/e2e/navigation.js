/* globals cy */

describe('Navigation', () => {
  it('in the header works', () => {
    cy.visit('/')
      .getByText('Projekte')
      .click()
      .assertRoute('/projekte')
      .getByText('Blog')
      .click()
      .assertRoute('/blog')
      .getByText('Kontakt')
      .click()
      .assertRoute('/kontakt')
      .getByText('LekoArts')
      .click();
  });
  it('to external sites in the footer works', () => {
    cy.visit('/')
      .getByText('Behance')
      .should('have.prop', 'href', 'https://www.behance.net/lekoarts')
      .getByText('Dribbble')
      .should('have.prop', 'href', 'https://dribbble.com/LekoArts')
      .getByText('Facebook')
      .should('have.prop', 'href', 'https://www.facebook.com/lekoarts.de')
      .getByText('GitHub')
      .should('have.prop', 'href', 'https://github.com/LeKoArts')
      .getByText('Instagram')
      .should('have.prop', 'href', 'https://www.instagram.com/lekoarts.de')
      .getByText('Patreon')
      .should('have.prop', 'href', 'https://www.patreon.com/lekoarts');
  });
  it('to internal sites in the footer works', () => {
    cy.visit('/')
      .getByText('Datenschutzerklärung')
      .click()
      .assertRoute('/datenschutz')
      .getByText('Tutorials')
      .click()
      .assertRoute('/categories/tutorial')
      .getByText('Impressum')
      .click()
      .assertRoute('/impressum')
      .getByText('Freebies')
      .click()
      .assertRoute('/categories/freebie')
      .getByText('LekoArts')
      .click()
      .assertRoute('/');
  });
});

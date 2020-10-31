/// <reference types="Cypress" />

describe('Chuck Norris Jokes - API Test Challenge', () => {
  beforeEach(function () {
    cy.request('https://api.chucknorris.io/jokes/random').as('chuck');
  });

  it('should validate headers', () => {
    cy.get('@chuck')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json;charset=UTF-8');
  });

  it('should validate status code', () => {
    cy.get('@chuck').its('status').should('equal', 200);
  });

  it('should validate content', () => {
    cy.get('@chuck').its('body').should('include', {
      icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    });
  });

  it('should validate negative status code', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.chucknorris.io/joke',
      failOnStatusCode: false,
    }).as('no-jokes');

    cy.get('@no-jokes').its('status').should('equal', 404);
  });
});

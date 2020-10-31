/// <reference types="Cypress" />

describe('REST API Test with Cypress', () => {
  it('API Test - Validate Headers', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon');

    cy.get('@pokemon')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json; charset=utf-8');
  });

  it('API Test - Validate Status Code', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon');

    cy.get('@pokemon').its('status').should('equal', 200);
  });

  it('API Test - Validate Name Value', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon');

    cy.get('@pokemon').its('body').should('include', { name: 'pikachu' });
  });

  it('API Test - Validate Negative Status Code', () => {
    cy.request({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/1000',
      failOnStatusCode: false,
    }).as('pokemon');

    cy.get('@pokemon').its('status').should('equal', 404);
  });
});

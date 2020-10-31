/// <reference types="Cypress" />

describe('REST API Test with Cypress', () => {
  it('API TEST - Validate Headers', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon');

    cy.get('@pokemon')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json; charset=utf-8');
  });
});

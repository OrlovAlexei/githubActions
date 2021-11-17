/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Applications vars', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081')
  })

  it('displays applications vars', () => {
    cy.contains('Base Url').should("be.visible")
    cy.contains('https://dev.oprosso.ru/ap/2222i').should("be.visible")
  })

})

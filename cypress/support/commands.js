// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.

// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import data from "../fixtures/demoData.json"

// -- This is a parent command --
Cypress.Commands.add('login', (emailLocator, passwordLocator) => {
    cy.get(emailLocator).type(data.email,{ log: false })
    cy.get(passwordLocator).type(data.password,{ log: false })
  })


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })


// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })


// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
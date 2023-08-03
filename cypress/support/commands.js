// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('new_nest_frame',(parent_frame_cssSelector, child_frame_cssSelector, element_path, input_text_value, action) =>
      {
        if(action=='type')
        {
        cy.get(parent_frame_cssSelector).its('0.contentDocument').should('exist').its('body')
        .find(child_frame_cssSelector).its('0.contentDocument').should('exist').its('body')
        .find(element_path).type(input_text_value)
        }
        else
        {
          cy.get(parent_frame_cssSelector).its('0.contentDocument').should('exist').its('body')
          .find(child_frame_cssSelector).its('0.contentDocument').should('exist').its('body')
          .find(element_path).click()
        }
      });
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
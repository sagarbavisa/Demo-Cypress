//cypress - Spec file
/// <reference types="Cypress" />
describe('My Fourth Test Suite', function()
{

it('My FourthTest case', function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()

   

    //window:confirm
    cy.on('window:confirm', (str) =>
    {
        expect (str).to.equal('Hello , Are you sure you want to confirm?')
    })


    cy.get('#opentab').invoke('removeAttr', 'target').click()

    cy.url().should('include','qaclickacademy')    
    
    //cy.go('back')
})
})
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {faker} from '@faker-js/faker'
var prodName = faker.company.buzzNoun()
var isAvailableonWebsite = 'Yes'
var shortDesc = faker.person.fullName()
var prodId
Given('Visit the url',()=>
{
    cy.visit("/")
          cy.log(prodName)
          console.log(shortDesc)
});
When('Enter the username',()=>
{
    cy.get("input[id='username']").type('aparna.kulkarni')
});
When('Enter the password',()=>
{
    cy.get('input[type="password"]').type('aparna')
});
When('Submit the Login Button and navigate to Vivek WebUI',()=>
{
    cy.get('input[id="kc-login"]').click()
    cy.url().should('contain','pivotree')
    cy.get('span[title="VivekWebUI"]').click({ force: true })
    cy.url().should('contain','Vivek')
});
When('Click on initiate to create product with Name and Short Description',()=>
{
    cy.get('[class="gwt-Label status-selector__initiate-link-wrapper"]').click()
    cy.get('[class="gwt-TextBox stibo-NameValue"]').type(prodName)
    cy.get('[class="dropdown stibo-Value validator-text stibo-Value-Text"]').select(isAvailableonWebsite)
    cy.get('[class="gwt-TextArea"]').type(shortDesc)
    cy.wait(2000)
    cy.get('[class="material-icons NodePickerIcon"]').click({force:true})
    cy.wait(2000)
    cy.get('[class="gwt-Label"]').eq(8).click()
    cy.wait(2000)
    cy.get('[class="gwt-SuggestBox"]').type("PC195681")
    cy.wait(2000)
    cy.get('[class="stibo-GraphicsButton material SearchButton"]').click({force:true})
    cy.wait(2000)
    cy.get('[class="stibo-GraphicsButton"]').eq(0).click()
});
When('User clicks on Save & initiate Start State',()=>
{
    cy.get('[class="stibo-GraphicsButton material SaveButton"]').click()
});
When('User clicks Start State',()=>
{
    cy.get('div[title="Start State"]').eq(1).click({ force: true })
      cy.get('[class="menulink"]').last().then((str)=>
      {
          prodId = str.text()
          cy.log(prodId)
      })
      cy.get('[type="checkbox"]').last().check({force:true})
});
When('User then clicks submit & initiate into Enrich State',()=>
{
    cy.get('[title="Submit event"]').click({force:true})
      cy.get('[class="gwt-TextBox FormFieldWidget"]').type("Test message")
      cy.get('[class="stibo-GraphicsButton"]').click()
      cy.get('[class="navbar-logo-small"]').click()
});
When('User clicks on Enrich State',()=>
{
    cy.get('[title="Enrich For Website State"]').eq(1).click()
      cy.get('[type="checkbox"]').last().check({force:true})
});
When('User then clicks submit & initiate into Final Review',()=>
{
    cy.get('[title="Submit event"]').click({force:true})
      cy.get('[class="stibo-GraphicsButton"]').click({force:true})
      cy.get('[class="navbar-logo-small"]').click()
     //cy.pause()
});
When('User clicks on Final Review',()=>
{
    cy.get('[title="Final Review"]').eq(1).click({ force: true })
      cy.get('[class="menulink"]').last().click({force:true})
});
When('User clicks on References tab & then Add Reference',()=>
{
    cy.get('[id="stibo_tab_References"]').click({force:true})
      cy.contains('Add Reference').click({force:true})
      cy.contains('node_picker').click({force:true})
      cy.get('[class="gwt-TabBarItem"] [class="gwt-Label"').click({force:true})
      cy.get('[class="gwt-SuggestBox"]').type('sample1')
      cy.get('[class="text"]').eq(5).click()
      cy.get('[class="text"]').eq(6).click()
      cy.get('[class="text"]').eq(3).click()
});
When('User clicks on Submit button',()=>
{
    cy.get('[class="text"]').eq(0).click()
      cy.get('[class="text"]').eq(3).click()
});
Then('Then user validates the sucessful message',()=>
{
    cy.contains('Success').eq(0).should('contain','Success')
});
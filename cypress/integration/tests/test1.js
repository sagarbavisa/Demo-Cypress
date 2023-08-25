import {faker} from '@faker-js/faker'
describe('Workflow', function()
{
    
    it('Creation of product', function()
    {
          var prodName = faker.company.buzzNoun()
          cy.log(prodName)
          var isAvailableonWebsite = 'Yes'
          var shortDesc = faker.person.fullName()
          globalThis.prodId;
          console.log(shortDesc)
      //visit the url
      cy.visit("/")
      // Enter the username
      cy.get("input[id='username']").type('aparna.kulkarni')
      // Enter the password
      cy.get('input[type="password"]').type('aparna')
      // Submit the login
      cy.get('input[id="kc-login"]').click()
     
      cy.url().should('contain','pivotree')
      cy.get('span[title="VivekWebUI"]').click({ force: true })

      //click on initiate to create product
      cy.url().should('contain','Vivek')
      cy.get('div[title="Start State"]').eq(1).click({ force: true })
      cy.get('[class="menulink"]').last().then((str)=>
      {
         var prodId = str.text() 
          cy.wrap(prodId).as('productIdentifier');
          cy.log(prodId)
      })
      cy.get('@productIdentifier').then((prodId) => {
        cy.contains(prodId).click()
      });
    })
})

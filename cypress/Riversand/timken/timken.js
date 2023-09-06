import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given('User is on Timken Login page', () => {
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
        if (promise) {
          return false
        }
      })
      cy.clearAllCookies()
      cy.clearAllLocalStorage()
    //login
    // cy.session("Navistar", () => {
      cy.visit("https://timkenfs.riversand.com/?idp=timkenfs_Auth0_idp")
});
When('user Enter Username', function () {
    cy.get('[id="username"]').type("systemadmin.test1@timken.com")
});
When('user Enter Password', function () {
    cy.get('[id="password"]').type("Welcome@321$")
});
When('user click on Login button', function () {
    cy.get('[name="action"]').contains("Continue").eq(0).click({force:true})
    cy.wait(15000)
});
When('after succesfull login user click on Quick Actions button', function () {
    cy.wait(10000)
    cy.get("#pageMenuIcon_0").click({force:true})
    cy.wait(4000)
});
When('user click on Upload Entities', function () {
    //click on upload entities
    cy.get("#actionItem").contains("Entities").click()
    cy.wait(6000)
});
When('user selects Upload File and select the excel file', function () {
     //select file
     cy.get('pebble-bulk-file-upload[id="fileUpload"]').find('input[type="file"]').selectFile('C://Users//sbavisa//Desktop//cypress//timkentest.xlsm',{force: true})
     cy.wait(6000)
});
When('user clicks show task details', function () {
     // click on show task details
     cy.get('[title="Show task details"]').contains("Show task details").click({force:true})
     cy.wait(10000)
});
When('user clicks refresh button', function () {
     // click on refresh button
     cy.get('[d="m19.927 11.332v1e-3h4.062c0.14 3.219-1.031 6.48-3.538 8.937-4.297 4.212-11.003 4.598-15.763 1.191-0.931 0.903-2.277 2.189-2.277 2.189-0.815 0.785-1.603 0.103-1.568-0.6v-7.693c1e-3 -0.296 0.246-0.537 0.548-0.537h1.109 0.551s0.246 2e-3 0.547 2e-3l5.71-2e-3c0.488-0.016 1.447 0.563 0.593 1.568 0 0-1.222 1.199-2.279 2.227 3.124 1.872 7.257 1.494 9.962-1.156 1.717-1.682 2.487-3.926 2.343-6.127m-13.51-4.79c-1.717 1.683-2.487 3.927-2.344 6.127h-4.062c-0.14-3.219 1.03-6.479 3.538-8.937 4.298-4.212 11.004-4.597 15.763-1.192 0.929-0.903 2.277-2.189 2.277-2.189 0.814-0.786 1.603-0.103 1.567 0.601v7.692c0 0.297-0.246 0.539-0.547 0.539h-1.109-0.551s-0.246-2e-3 -0.546-2e-3l-5.71 2e-3c-0.488 0.015-1.448-0.565-0.593-1.569 0 0 1.221-1.2 2.28-2.227-3.125-1.872-7.26-1.494-9.963 1.155"]').eq(1).click({force:true})
     //  cy.get('div[id="buttonGroupWrapper"]').find('pebble-button[id="refresh"][title="Refresh"]').click({force:true})
      cy.wait(25000)
       //click on cancel button
      cy.get('[title="Cancel"]').contains("Cancel").click({force:true})
      cy.wait(6000)
      cy.get('[d="m19.927 11.332v1e-3h4.062c0.14 3.219-1.031 6.48-3.538 8.937-4.297 4.212-11.003 4.598-15.763 1.191-0.931 0.903-2.277 2.189-2.277 2.189-0.815 0.785-1.603 0.103-1.568-0.6v-7.693c1e-3 -0.296 0.246-0.537 0.548-0.537h1.109 0.551s0.246 2e-3 0.547 2e-3l5.71-2e-3c0.488-0.016 1.447 0.563 0.593 1.568 0 0-1.222 1.199-2.279 2.227 3.124 1.872 7.257 1.494 9.962-1.156 1.717-1.682 2.487-3.926 2.343-6.127m-13.51-4.79c-1.717 1.683-2.487 3.927-2.344 6.127h-4.062c-0.14-3.219 1.03-6.479 3.538-8.937 4.298-4.212 11.004-4.597 15.763-1.192 0.929-0.903 2.277-2.189 2.277-2.189 0.814-0.786 1.603-0.103 1.567 0.601v7.692c0 0.297-0.246 0.539-0.547 0.539h-1.109-0.551s-0.246-2e-3 -0.546-2e-3l-5.71 2e-3c-0.488 0.015-1.448-0.565-0.593-1.569 0 0 1.221-1.2 2.28-2.227-3.125-1.872-7.26-1.494-9.963 1.155"]').eq(1).click({force:true})
      cy.wait(6000)
});
When('user selects Success 1 link', function () {
     //click on success button
     cy.get('[class="btn-link status-link"]').contains("Success").click({force:true})
     cy.wait(8000)
});
When('user clicks on Sellable Material ID link', function () {
    cy.get('[class="ag-cell ag-cell-not-inline-editing ag-cell-auto-height grid-link ag-cell-value"]').click({force:true})
    cy.wait(10000)
  
});
When('user adds comment in Digital assets enrichment and click on done', function () {
    cy.get('[class="textarea-container fit"] textarea').eq(0).type("Approve MWF",{force:true})
    cy.wait(11000)
    //click on sumbit button
    cy.get('div[id="buttonTextBox"][title="Done"]').eq(1).contains("Done").click({force:true})
    cy.wait(10000)
});
When('user adds comment in  Marketing enrichment and click on done', function () {
    cy.get('[class="textarea-container fit"] textarea').eq(0).type("Approve next WF",{force:true})
      cy.wait(10000)
      //click on sumbit button
      cy.get('div[id="buttonTextBox"][title="Done"]').eq(0).contains("Done").click({force:true})
      cy.wait(8000)
      cy.get("[title='Previous changes have been processed by the system. Click here to see the changes']").click({force:true})
     
      cy.wait(8000)
});
When('user adds comment in  Pending User and click on Approve', function () {
    cy.get("textarea[placeholder='Add a comment']").eq(0).type("test comment",{force:true})
    cy.get("[title='Approve']").eq(0).click({force:true}) 
    cy.wait(3000)
});
Then('user should be able to see successful message', function () {
    cy.contains('success').eq(0).should('contain','success')
});
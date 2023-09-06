import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-network-idle'
var isavailableonweb = "Yes";
var shortdesc = "short description inputs";
var imagename = "test5114.jpg";
Given('user is on login page', () => {
    //Login
    cy.visit("http://67.22.105.214:8090/webcm/login.do;jsessionid=EF7970A56F17FF51234A4FF05CB50D9F")
});
When('user enters valid username , Password and click login button', function () {
    cy.get('#username').type('amhatre')
    cy.get('#password').type('amhatre')
    cy.get('#login').click()
    cy.wait(3000)
});
When('user expands homesplitter button', function () {
    //expand the homesplitter
    cy.get("div[role='button'] span[class='ui-icon ui-icon-triangle-1-e']").click()
});
When('user clicks on Test Repository', function () {
    //expand test repository
    cy.get(':nth-child(19) > .dynatree-node > .dynatree-expander').eq(0).click({ force: true })
    cy.wait(4000)
    cy.log("doublick the product repo")
});
When('user doubleclick Test Product Staging', function () {
    //doublick the product repo
    cy.contains("Test Product Staging").dblclick()
   // cy.get(':nth-child(19) > ul > li.dynatree-lastsib > .dynatree-node > .dynatree-title').dblclick()
    cy.wait(7000)
});
When('user double clicks first product', function () {
    //open the product details page by double clicking
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
        .find("input[type='checkbox'][class='cbox']").eq(7).dblclick()
    cy.wait(8000)
});
When('user enters value in short description, image name and select isavailableonwebsite as yes', function () {
    //inside product frame
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
        .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body').as('btn')
    cy.wait(4000)
    //enter short description
    cy.get('@btn').find("[name='attrValues(1005679)']").clear()
    cy.get('@btn').find("[name='attrValues(1005679)']").type(shortdesc)
    //enter image name
    cy.get('@btn').find("textarea[name='attrValues(1019592)']").clear()
    cy.get('@btn').find("textarea[name='attrValues(1019592)']").type(imagename)
    cy.wait(2000)
    //select the isavailableonwebsite as Yes
    cy.get('@btn').find("[name='attrValues(1019619)']").select(isavailableonweb)
});
When('user clicks on save and send button and click ok', function () 
{
      //click save send
      cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[id='ss-button']").click({ force: true })
    cy.wait(6000)
    //click ok(start to enrich state)
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog-buttonset']").contains("OK").click({ force: true })
});

Then('user validates if short description is empty or not', function () 
{
  
   // click the product again(2nd state)
   
  cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("input[type='checkbox'][class='cbox']").eq(7).dblclick()

      cy.wait(12000)
      // cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      // .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body').as('shortdescription')
      // cy.wait(2000)
      // cy.get('@shortdescription').find("[class='navPanel']").should('not.contain','Short Description is mandatory - DAMLink_Test_workflow ')
      
      cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
     .find("[name='attrValues(1005679)']").should('contain',shortdesc)
})
import { Before, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { When } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-data-session';
import "cypress-localstorage-commands";

Before(() => {
   
        cy.visit("http://67.22.105.214:8090/webcm/")
        cy.get('#username').type('amhatre')
        cy.get('#password').type('amhatre')
        cy.get('#login').click()
        cy.saveLocalStorage()
        
  })
Given('After succesfull login user click on MainHomeSplitter button',function()
{
    
   
    cy.wait(2000)
    cy.get("div[role='button'] span[class='ui-icon ui-icon-triangle-1-e']").click()
});
When('user expands Test Repository in Content menu',function()
{   
    cy.get(':nth-child(19) > .dynatree-node > .dynatree-expander').eq(0).as('tr') 
    cy.get('@tr').click({force:true})
        
});
When('user double clicks repository name Test Product Staging',function()
{
    cy.wait(7000)
    cy.get(':nth-child(19) > ul > li.dynatree-lastsib > .dynatree-node > .dynatree-title').as('stage')
    cy.get('@stage').dblclick()
});
When('user doubleclicks a product to navigate to product details page',function()
{
    cy.wait(3000)
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body').as('product')
    cy.get('@product').find("input[type='checkbox'][class='cbox']").eq(7).dblclick()
});
When('user enters a DAM Image name',function()
{
    cy.wait(3000)
 //enter image name
 cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body').as('parentele')
 cy.wait(3000)
 cy.get('@parentele').find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body').as('btn')
 cy.get('@btn').find("textarea[name='attrValues(1019592)']").type("test5114.jpg")
 cy.wait(2000)
});

When('user clicks on Save And Send button',function()
{
    //click save and send
 cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
 .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body').as('savebtn')
 cy.get('@savebtn').find("[id='ss-button']").click({force:true})
cy.wait(6000)
});
When('user click on OK button',function()
{
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
.find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body').as('okbtn')
cy.get('@okbtn').find("[class='ui-dialog-buttonset']").contains("OK").click({force:true})
});
Given('User is on Enterworks dashboard',()=>
{
    
    cy.get("div[role='button'] span[class='ui-icon ui-icon-triangle-1-e']").click()
});


When('user clicks on checkbox of a product',function()
{
    cy.wait(3000)
     cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body').as('checkbox')
    cy.get('@checkbox').find("input[type='checkbox'][class='cbox']").eq(7).click()
});
When('user clicks on Action button',function()
{
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body').as('action')
           cy.get('@action').find("[class='wijmo-wijmenu-text']").contains("Action").click({force:true})
});
When('user clicks on Send to workflow button',function()
{
    // click send to workflow
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
    .find("[class='wijmo-wijmenu-text']").contains("Send To Workflow").click({force:true})
});
When('user clicks on Selected Records button',function()
{
     //selected records
     cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
     .find("[class='wijmo-wijmenu-text']").contains("Selected Record(s)").click({force:true})
     cy.wait(3000)

});
When('user clicks on OK button',function()
{
    //click ok
    cy.get("[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
    .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable']").contains("OK").click({force:true})

});
Then('user should see a processing message',function()
{

    //click ok
    cy.wait(2000)
    cy.get("[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
    .find("[class='ui-state-confirm ui-corner-all']").eq(0).contains('Message').click({force:true})

});

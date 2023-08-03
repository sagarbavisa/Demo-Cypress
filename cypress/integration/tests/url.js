/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe';
describe('Enterworkese', ()=> {
    it('Enterwork', ()=> {
        const getIframeDocument = (frame1) => {
            return cy
            .get(frame1)
            .its('0.contentDocument').should('exist')
          }
          const getIframeBody = (frame1) => {
            return getIframeDocument(frame1)
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
          }
        cy.visit("http://67.22.105.214:8090/webcm/login.do;jsessionid=EF7970A56F17FF51234A4FF05CB50D9F")
        cy.get('#username').type('amhatre')
        cy.get('#password').type('amhatre')
        cy.get('#login').click()
        cy.wait(2000)
        cy.get("div[role='button'] span[class='ui-icon ui-icon-triangle-1-e']").click()
        cy.get(':nth-child(19) > .dynatree-node > .dynatree-expander').eq(0).click({force:true})
        cy.wait(2000)
        cy.get(':nth-child(19) > ul > li.dynatree-lastsib > .dynatree-node > .dynatree-title').dblclick()
      //  cy.pause()
        cy.wait(5000)
        cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
        .find("input[type='checkbox'][class='cbox']").eq(7).dblclick()
 cy.wait(5000) 
 //enter image name
 cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
 .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body').as('btn')
 cy.get('@btn').find("textarea[name='attrValues(1019592)']").type("cleanerTest7.pdf")
 //click save
 cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
 .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
 .find("[id='ss-button']").click({force:true})
cy.wait(6000)

cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
.find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
.find("[class='ui-dialog-buttonset']").contains("OK").click({force:true})

     cy.wait(3000)
     cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
     .find("input[type='checkbox'][class='cbox']").eq(7).click()
           
            cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
            .find("[class='wijmo-wijmenu-text']").contains("Action").click({force:true})
          // click send to workflow
            cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
            .find("[class='wijmo-wijmenu-text']").contains("Send To Workflow").click({force:true})
           //selected records
            cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
            .find("[class='wijmo-wijmenu-text']").contains("Selected Record(s)").click({force:true})
            cy.wait(3000)

            //click ok
            cy.get("[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
           .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable']").contains("OK").click({force:true})
             
    })
})
/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe';
describe('Enterworkese', () => {
  it('Enterwork', () => {
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
    //Login
    cy.visit("http://67.22.105.214:8090/webcm/login.do;jsessionid=EF7970A56F17FF51234A4FF05CB50D9F")
    cy.get('#username').type('amhatre')
    cy.get('#password').type('amhatre')
    cy.get('#login').click()
    cy.wait(3000)

    cy.log("expand the homesplitter")
    //expand the homesplitter
    cy.get("div[role='button'] span[class='ui-icon ui-icon-triangle-1-e']").click()
    cy.log("expand test repository")
    //expand test repository
    cy.get(':nth-child(19) > .dynatree-node > .dynatree-expander').eq(0).click({ force: true })
    cy.wait(4000)
    cy.log("doublick the product repo")
    //doublick the product repo
    cy.get(':nth-child(19) > ul > li.dynatree-lastsib > .dynatree-node > .dynatree-title').dblclick()


    cy.wait(7000)

    //open the product details page by double clicking
    cy.log("open the product details page by double clicking")
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("input[type='checkbox'][class='cbox']").eq(7).dblclick()
    cy.wait(5000)

    cy.log("enter image name")
    //inside product frame
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body').as('btn')
    cy.wait(4000)
    //enter short description
    cy.get('@btn').find("[name='attrValues(1005679)']").clear()
    cy.get('@btn').find("[name='attrValues(1005679)']").type("short description inputs")
    //enter image name
    cy.get('@btn').find("textarea[name='attrValues(1019592)']").type("test5114.jpg")
    cy.wait(2000)
    //select the isavailableonwebsite
    cy.get('@btn').find("[name='attrValues(1019619)']").select('Yes')
    cy.pause()
    //click save send
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[id='ss-button']").click({ force: true })
    cy.wait(6000)
    //click ok
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog-buttonset']").contains("OK").click({ force: true })
    // click the product again
    cy.log("second product click")
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("input[type='checkbox'][class='cbox']").eq(7).dblclick()

    cy.wait(6000)
  
    //click save and send
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[id='ss-button']").click({ force: true })
    cy.wait(2000)
    cy.pause()
    //click ok
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog-buttonset']").contains("OK").click({ force: true })
    cy.wait(3000)
    // click product checkbox
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("input[type='checkbox'][class='cbox']").eq(7).click()
    /
    cy.log("first actions click")
    //click actions 
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='wijmo-wijmenu-text']").contains("Action").click({ force: true })
    // click send to workflow
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='wijmo-wijmenu-text']").contains("Send To Workflow").click({ force: true })
    //selected records
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='wijmo-wijmenu-text']").contains("Selected Record(s)").click({ force: true })
    cy.wait(3000)
    cy.pause()
    //click ok
    cy.get("[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable']").contains("OK").click({ force: true })
    cy.wait(3000)

    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("input[type='checkbox'][class='cbox']").eq(7).click()

    cy.log("second actions click")
    //click actions 
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='wijmo-wijmenu-text']").contains("Action").click({ force: true })
    // click send to workflow
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='wijmo-wijmenu-text']").contains("Send To Workflow").click({ force: true })
    //selected records
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='wijmo-wijmenu-text']").contains("Selected Record(s)").click({ force: true })
    cy.wait(3000)
    cy.get("[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable']").contains("OK").click({ force: true })
    cy.wait(3000)
    cy.contains("Refresh Tab").click()

  })
})
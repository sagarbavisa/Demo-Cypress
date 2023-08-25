/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe';
describe('Enterworkese', () => {
  it('Enterwork', () => {
    var isavailableonweb = "Yes";
    var shortdesc = "short description inputs";
    var imagename = "test5114.jpg";
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
    cy.get('@btn').find("[name='attrValues(1005679)']").type(shortdesc)
    //enter image name
    cy.get('@btn').find("textarea[name='attrValues(1019592)']").type(imagename)
    cy.wait(2000)
    //select the isavailableonwebsite as Yes
    cy.get('@btn').find("[name='attrValues(1019619)']").select(isavailableonweb)

    //click save send
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[id='ss-button']").click({ force: true })
    cy.wait(6000)
    //click ok(start to enrich state)
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog-buttonset']").contains("OK").click({ force: true })
    // click the product again(2nd state)
    cy.log("second product click")
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("input[type='checkbox'][class='cbox']").eq(7).dblclick()

    cy.wait(6000)

    //click save and send
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[id='ss-button']").click({ force: true })
    cy.wait(2000)

    //click ok(enrich to final)
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog-buttonset']").contains("OK").click({ force: true })
    cy.wait(3000)


    //click the product again (3rd time)
    cy.log("3rd product click")
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("input[type='checkbox'][class='cbox']").eq(7).dblclick()
    cy.wait(8000)

    //select the isavailableonwebsite as No
    isavailableonweb = "No"
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[name='attrValues(1019619)']").select(isavailableonweb)

    //click save and send
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[id='ss-button']").click({ force: true })
    cy.wait(5000)

    //select return
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[class='wivActivityFieldSet'] select").select("Return")


    //click ok(final to start state)
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog-buttonset']").contains("OK").click({ force: true })
    cy.wait(3000)

    //click the product again (4th time)
    cy.log("4th product click")
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("input[type='checkbox'][class='cbox']").eq(7).dblclick()
    cy.wait(6000)

    //select the isavailableonwebsite as Yes 
    isavailableonweb = "Yes"
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[name='attrValues(1019619)']").select(isavailableonweb)

    //click save and send
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[id='ss-button']").click({ force: true })
    cy.wait(2000)

    //click ok (start to enrich)
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog-buttonset']").contains("OK").click({ force: true })
    cy.wait(3000)

    // click product checkbox
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("input[type='checkbox'][class='cbox']").eq(7).click()
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

    //click ok (enrich to final)
    cy.get("[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable']").contains("OK").click({ force: true })

    cy.wait(5000)


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
    //select return
    cy.get("[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable']")
      .find("[class='wivActivityFieldSet'] select").select("Return")
    cy.wait(3000)
    //click ok (final to enrich)
    cy.get("[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable']").contains("OK").click({ force: true })
    cy.wait(3000)


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

    //click ok (enrich to final)
    cy.get("[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable']").contains("OK").click({ force: true })
    cy.wait(5000)



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

    //click ok (final to end state))
    cy.get("[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable']").contains("OK").click({ force: true })
    cy.wait(5000)



    cy.contains("Refresh Tab").click()
    cy.wait(5000)

    //doublick the product repo
    cy.get(':nth-child(19) > ul > li.dynatree-lastsib > .dynatree-node > .dynatree-title').dblclick()
    cy.wait(5000)

    //open the product details page by double clicking
    cy.log("open the product details page by double clicking")
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("input[type='checkbox'][class='cbox']").eq(7).dblclick()

      cy.wait(8000)
      //open the link
    cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[id='tabli_10583'] a").click({force:true})

      cy.wait(4000)
      //assert the linkage
      cy.get("div[class='ew-tabs-iframe-panels'] iframe").eq(1).its('0.contentDocument').should('exist').its('body')
      .find("[class='ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable wijmo-wijdialog'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[class='attr-grid-container-tabledata'][title='test5114.jpg']").should('contain','test5114.jpg')
      cy.pause()
  })
})
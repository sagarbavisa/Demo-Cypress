/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe';
describe('Enterworkese', ()=> {
    it('Enterwork', ()=> {
        cy.visit("http://67.22.105.214:8090/webcm/login.do;jsessionid=EF7970A56F17FF51234A4FF05CB50D9F")
        cy.get('#username').type('Ajadhav')
        cy.get('#password').type('Ajadhav')
        cy.get('#login').click()
        cy.wait(2000)
        cy.get("div[role='button'] span[class='ui-icon ui-icon-triangle-1-e']").click()
        cy.wait(2000)
        cy.get(':nth-child(9) > .ui-icon').click()
        cy.get("#Profiles").click()
        cy.wait(4000)
        cy.get("div[id='tabProfiles'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[href='#action-menu']").click()
        cy.get("div[id='tabProfiles'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[href='#new-action']").click()
        cy.wait(2000)
    const randomnumber2 = Math.floor(Math.random()*(9))
       globalThis.randomnumber2 = randomnumber2
       let random_string = Math.random().toString(36).substring(2,3)
       globalThis.random_string = random_string
       // PROFILE
       // Select Name
       cy.new_nest_frame("div[id='tabProfiles'] iframe", "[id='profileEditor-modalIFrameDialog'] iframe", "[id='name']", "testname1"+random_string, "type")
        //input description field
        cy.new_nest_frame("div[id='tabProfiles'] iframe", "[id='profileEditor-modalIFrameDialog'] iframe", "[id='description']", "Test_Data", "type")
        //select type
        cy.get("div[id='tabProfiles'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[id='profileEditor-modalIFrameDialog'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[name='formatTypeCode']").select('EPIM')
    //    select pathcode
    cy.get("div[id='tabProfiles'] iframe").its('0.contentDocument').should('exist').its('body')
    .find("[id='profileEditor-modalIFrameDialog'] iframe").its('0.contentDocument').should('exist').its('body')
    .find("[name='isComplete']").select('True')
    //select next button
    cy.new_nest_frame("div[id='tabProfiles'] iframe", "[id='profileEditor-modalIFrameDialog'] iframe", "[name='nextButton']", "", "click")
    cy.wait(2000)
    //Click on Action button add attribute
    cy.new_nest_frame("div[id='tabProfiles'] iframe", "[id='profileEditor-modalIFrameDialog'] iframe", "[href='#action-menu']", "", "click")
    cy.new_nest_frame("div[id='tabProfiles'] iframe", "[id='profileEditor-modalIFrameDialog'] iframe", "[href='#new-action']", "", "click")
    cy.wait(2000)
    //Attribute Name
    cy.get("div[id='tabProfiles'] iframe").its('0.contentDocument').should('exist').its('body')
    .find("[id='profileEditor-modalIFrameDialog']  iframe").its('0.contentDocument').should('exist').its('body')
    .find("[id='profileAttribute-modalIFrameDialog']  iframe").its('0.contentDocument').should('exist').its('body')
        .find("[id='name']").type("TestLaptop")
   //Restricated Name
   cy.get("div[id='tabProfiles'] iframe").its('0.contentDocument').should('exist').its('body')
   .find("[id='profileEditor-modalIFrameDialog']  iframe").its('0.contentDocument').should('exist').its('body')
   .find("[id='profileAttribute-modalIFrameDialog']  iframe").its('0.contentDocument').should('exist').its('body')
       .find("[name='restrictedName']").type("TestLaptop23")
  //Select Language
cy.wait(2000)
cy.get("div[id='tabProfiles'] iframe").its('0.contentDocument').should('exist').its('body')
   .find("[id='profileEditor-modalIFrameDialog']  iframe").its('0.contentDocument').should('exist').its('body')
   .find("[id='profileAttribute-modalIFrameDialog']  iframe").its('0.contentDocument').should('exist').its('body')
       .find("[id='activeLangList']").select('English')
//Select Type attrGroupManageButtonName
cy.get("div[id='tabProfiles'] iframe").its('0.contentDocument').should('exist').its('body')
   .find("[id='profileEditor-modalIFrameDialog']  iframe").its('0.contentDocument').should('exist').its('body')
   .find("[id='profileAttribute-modalIFrameDialog']  iframe").its('0.contentDocument').should('exist').its('body')
       .find("[name='attrGroupManageButtonName']").click()
       cy.wait(6000)
//Attribute Group Name
cy.get("div[id='tabProfiles'] iframe").its('0.contentDocument').should('exist').its('body')
    .find("[id='profileEditor-modalIFrameDialog'] iframe").its('0.contentDocument').should('exist').its('body')
    .find("[id='profileAttribute-modalIFrameDialog'] iframe").its('0.contentDocument').should('exist').its('body')
    .find("input[type='text'][id='name']").click().as('name')
    cy.get('@name').type("TestData")
    cy.wait(6000)
    //Attribute Tab
    cy.get("div[id='tabProfiles'] iframe").its('0.contentDocument').should('exist').its('body')
    .find("[id='profileEditor-modalIFrameDialog'] iframe").its('0.contentDocument').should('exist').its('body')
    .find("[id='profileAttribute-modalIFrameDialog'] iframe").its('0.contentDocument').should('exist').its('body')
    .find("[name='attrTabId']").select("Default Start Tab")
    cy.wait(2000)
    //Click on ok button
    cy.get("div[id='tabProfiles'] iframe").its('0.contentDocument').should('exist').its('body')
    .find("[id='profileEditor-modalIFrameDialog'] iframe").its('0.contentDocument').should('exist').its('body')
    .find("[id='profileAttribute-modalIFrameDialog'] iframe").its('0.contentDocument').should('exist').its('body')
     .find("[type='submit'][value='OK']").click()
        cy.wait(2000)
   
       cy.wait(6000)

    // TAXOMONY
    cy.get("#Taxonomy").click()
    cy.wait(4000)
    cy.get("div[id='tabTaxonomy'] iframe").its('0.contentDocument').should('exist').its('body')
     .find("[href='#action-menu']").click()
     cy.get("div[id='tabTaxonomy'] iframe").its('0.contentDocument').should('exist').its('body')
     .find("[href='#new-action']").click()
     cy.wait(2000)
      // Taxomony Name
      cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[name='name']", "TaxonoyTest"+random_string, "type")
      //Select folder
      cy.get("div[id='tabTaxonomy'] iframe").its('0.contentDocument').should('exist').its('body')
       .find("[id='codeset-editor'] iframe").its('0.contentDocument').should('exist').its('body')
      .find("[name='codeSetTypeId']").select('Services Taxonomy - Hierarchy')
      // Taxonoy description
     cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[name='description']", "Test_Data_Taxonoy", "type")
     // properties repository
     cy.get("div[id='tabTaxonomy'] iframe").its('0.contentDocument').should('exist').its('body')
     .find("[id='codeset-editor'] iframe").its('0.contentDocument').should('exist').its('body')
    .find("[name='csMetadataRepoId']").select('CM_ItemStaging_Taxonomy_Metadata')
    //Include owner
    cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[id='ownerUseInd0']", "", "click")
    //Path code
    cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[id='pathCode0']", "", "click")
    //Select Source
    cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[id='codeSetSource0']", "", "click")
   //select next button
    cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[id='nextBtn']", "", "click")
      cy.wait(4000)
    //Click on ADD button in Editor
    cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[name='AddButton']", "", "click")
    // Level Name
   cy.wait(4000)
    cy.get("div[id='tabTaxonomy'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[id='codeset-editor'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[type='text'][size='30']").type("TestLeve5")
    //click on next button
    cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[name='Next']", "", "click")
      cy.wait(4000)
      cy.log("Before Add button ")
      cy.pause()

      //click on add button in  Detaileditor
      // cy.new_nest_frame("div[id='tabTaxonomy'] iframe", "[id='codeset-editor'] iframe", "[name='Add']", "", "click")
      cy.get("div[id='tabTaxonomy'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[id='codeset-editor'] iframe").its('0.contentDocument').should('exist').its('body')
        .find("[name='Add']").as('addbtn')
        cy.log("After Add button ")
        cy.window().then((win) => {
            const orig = win.open
          
            win.open = function (url, target, features) {
              return orig.call(this, url, '_self', features)
             
            }
          })
          cy.get('@addbtn').click()
        cy.pause()


    })
})
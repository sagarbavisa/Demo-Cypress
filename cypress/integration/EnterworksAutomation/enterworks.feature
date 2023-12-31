Feature: Test Enterworks application

    Feature Description: Test Enterworks application
    Scenario: DAM link test workflow
        Given  After succesfull login user click on MainHomeSplitter button
        When   user expands Test Repository in Content menu
        When   user double clicks repository name Test Product Staging
        When   user doubleclicks a product to navigate to product details page
        When   user enters a DAM Image name
        When   user clicks on Save And Send button
        When   user click on OK button

    Scenario: Send to workflow
        Given  User is on Enterworks dashboard
        When   user clicks on checkbox of a product
        When   user clicks on Action button
        When   user clicks on Send to workflow button
        When   user clicks on Selected Records button
        When   user clicks on OK button
        Then   user should see a processing message

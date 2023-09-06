Feature: Test enterworks application
    Scenario: Enterworks Add image using workflow
        Given user is on login page
        When  user enters valid username , Password and click login button
        When  user expands homesplitter button
        When  user clicks on Test Repository
        When  user doubleclick Test Product Staging
        When  user double clicks first product
        When  user enters value in short description, image name and select isavailableonwebsite as yes
        When  user clicks on save and send button and click ok
        Then  user validates if short description is empty or not
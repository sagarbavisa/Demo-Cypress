Feature: Test enterworks application
    Scenario: Enterworks Add image using workflow
        Given user is on login page
        When  user enters valid username , Password and click login button
        When  user expands homesplitter button
        When  user clicks on Test Repository
        When  user doubleclick Test Product Staging
        When  user double clicks first product
        When  user enters empty value in short description, image name and select isavailableonwebsite as yes
        When  user clicks on save and send button and click ok
        When  user validates if short description is empty or not
        When  user sends product from enrich to final
        When  user sends product from final to start using return and isavailableonwebsite as yes
        When  user sends product from start to enrich state
        When  user sends product from enrich to final using actions
        When  user sends product from final to enrich
        When  user sends product from enrich state to final
        When  user sends product from final to end state
        Then  user validates the image linked in link tab
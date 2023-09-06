Feature: Test riversand Timken application   
   Scenario:Upload Entity
        Given User is on Timken Login page
        When user Enter Username
        When user Enter Password
        When user click on Login button
        When after succesfull login user click on Quick Actions button
        When user click on Upload Entities
        When user selects Upload File and select the excel file
		When user clicks show task details
		When user clicks refresh button
		When user selects Success 1 link
		When user clicks on Sellable Material ID link
		When user adds comment in Digital assets enrichment and click on done
		When user adds comment in  Marketing enrichment and click on done
		When user adds comment in  Pending User and click on Approve
		Then user should be able to see successful message
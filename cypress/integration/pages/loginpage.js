export default class loginpage {
    path = "/login";
 
    // Create variables for element locators
    usernameInput = "input[name='username']";
    passwordInput = "input[name='password']";
    loginButton = "input[type='submit']";
 
    // Create independent methods to do actions on elements
    visitLogin(){
        cy.visit('/');
    }
 
    typeUsername(username){
        cy.get(this.usernameInput).type(username);
    }
 
    typePassword(password){
        cy.get(this.passwordInput).type(password);
    }
 
    clickLogin(){
        cy.get(this.loginButton).click();
    }
}

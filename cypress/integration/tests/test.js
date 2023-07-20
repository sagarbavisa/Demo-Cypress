import loginpage from "../pages/loginpage";
import SecurePage from "../pages/SecurePage";

const loginPage = new loginpage()
const securePage = new SecurePage()
 
context('Login', () => {
 
  it('Login successfully', () => {
    loginPage.visitLogin();
    loginPage.typeUsername("sagarb");
    loginPage.typePassword("Sagarb");
    loginPage.clickLogin();
    // securePage.getMessage().should((actual) => {
    //   expect(actual).to.have.string("Accounts Overview");
    // })
  })
 
})

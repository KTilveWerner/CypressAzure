import {Given,And,Then, When} from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../../Pages/LoginPage';
import ProductPage from '../../Pages/ProductPage';

const loginPage=new LoginPage();
const productPage=new ProductPage();
//test steps 
Given('I login',()=>{
    cy.visit('https://www.saucedemo.com/');
});
And('I login by entering username and password',() => {
    loginPage.getUserName().type('standard_user')
    loginPage.getPassword().type('secret_sauce')
});
When('I Enter login',()=>{
    loginPage.getLoginButton().click();
});
Then('I verify user has logged in', () => {
    productPage.getProductTitle().should('be.visible');
 
})

import LoginPage from '../../Pages/LoginPage';



describe ('Cypress Test Demo', function()
{

    before(function(){
        cy.fixture('testdata').then(function(data)
        {
            this.data=data ;
           
        })
        })



    it('Verify Login Test for Sauce Demo Appki Positive', function()
    {
        const loginPage=new LoginPage();
        cy.visit('https://www.saucedemo.com/');
        loginPage.getUserName().type(this.data.Username)
        loginPage.getPassword().type('secret_sauce')
        loginPage.getLoginButton().click()
      
    })


    it('Verify Login Test ', function()
    {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click() 
       // cy.get('#item_5_title_link > div').click() //also you can use class name and index name 
        
        
    })
     
    it('Demo Asynchronous call', function()
    {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click() 
        cy.get('#inventory_filter_container>div').should("have.text", "Products")
        cy.get('#inventory_filter_container>div').then(function(heading){
            var headingstr = heading.text()
            cy.log('ssss',headingstr)
            console.log('I am Inside')

        })
        console.log('I am Outside')
    })
    

    it('Verify Dropdown', function()
    {
        cy.visit('https://the-internet.herokuapp.com/dropdown') 
       cy.get('#dropdown').select('Option 2')
    })

})
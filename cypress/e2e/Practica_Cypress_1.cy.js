/// <reference types="Cypress" />


describe('template spec', () => {

  beforeEach('Conect to saucedemo', () => {
    cy.visit('https://www.saucedemo.com/')
    
  })

  it('Test Login Usuario', () => {

      // check login
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').click();
      // primera asercion
      cy.get('#user-name').clear().type('testing_user');
      cy.get('#password').clear().type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('#login_button_container > div > form > div.error-message-container.error > h3').should('contain','Epic sadface: Username and password do not match any user in this service')
      
      // segunda asercion
      cy.get('#user-name').clear().type('testing_user');
      cy.get('#password').clear().type('secret_password');
      cy.get('#login-button').click();
      cy.get('#login_button_container > div > form > div.error-message-container.error > h3').should('contain','Epic sadface: Username and password do not match any user in this service')
      
      // tercera asercion
      cy.get('#user-name').clear().type('locked_out_user');
      cy.get('#password').clear().type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('#login_button_container > div > form > div.error-message-container.error > h3').should('contain','Epic sadface: Sorry, this user has been locked out.')
      
      // check carrito
      
      cy.get('#user-name').clear().type('standard_user');
      cy.get('#password').clear().type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      cy.get('#shopping_cart_container > a').click();
      cy.get('#remove-sauce-labs-backpack').contains('Remove');
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').click();
      cy.get('#root > div > div.login_logo').contains('Swag Labs');

      
    
    })
    
    })


   


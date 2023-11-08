it('Test Case 1: Register User', () => {
  cy.visit('https://automationexercise.com/');
  cy.title().should('contain', 'Automation Exercise');
  cy.get('#header').should('be.visible');
  cy.get('a[href="/login"]').click();
  cy.get('.signup-form').should('contain', 'New User Signup!');
  cy.get('[data-qa="signup-name"]').type('test testerson');
  cy.get('[data-qa="signup-email"]').type('123123test@test123.com');
  cy.get('[data-qa="signup-button"]').click();
  cy.contains(/ENTER ACCOUNT INFORMATION/i).should('be.visible');
  cy.get('#id_gender1').check();
  cy.get('[data-qa="password"]').type('test');
  cy.get('#days').select('24');
  cy.get('#months').select('4');
  cy.get('#years').select('1992');
  cy.get('#newsletter').check();
  cy.get('#optin').check();
  cy.get('[data-qa="first_name"]').type('test');
  cy.get('[data-qa="last_name"]').type('test');
  cy.get('[data-qa="company"]').type('test');
  cy.get('[data-qa="address"]').type('test');
  cy.get('[data-qa="address2"]').type('test');
  cy.get('[data-qa="country"]').select('India');
  cy.get('[data-qa="state"]').type('test');
  cy.get('[data-qa="city"]').type('test');
  cy.get('[data-qa="zipcode"]').type('test');
  cy.get('[data-qa="mobile_number"]').type('test');
  cy.get('[data-qa="create-account"]').click();
  cy.contains(/ACCOUNT CREATED/i).should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
  cy.contains(/logged in as test testerson/i).should('be.visible');
  cy.get('a[href="/delete_account"]').click();
  cy.contains(/account deleted!/i).should('be.visible');
});

it('Test Case 2: Login User', () => {
  cy.visit('https://automationexercise.com/');
  cy.title().should('contain', 'Automation Exercise');
  cy.get('#header').should('be.visible');
  cy.get('a[href="/login"]').click();
  cy.get('.signup-form').should('contain', 'New User Signup!');
  cy.get('[data-qa="signup-name"]').type('test testerson');
  cy.get('[data-qa="signup-email"]').type('123123test@test123.com');
  cy.get('[data-qa="signup-button"]').click();
  cy.contains(/ENTER ACCOUNT INFORMATION/i).should('be.visible');
  cy.get('#id_gender1').check();
  cy.get('[data-qa="password"]').type('test');
  cy.get('#days').select('24');
  cy.get('#months').select('4');
  cy.get('#years').select('1992');
  cy.get('#newsletter').check();
  cy.get('#optin').check();
  cy.get('[data-qa="first_name"]').type('test');
  cy.get('[data-qa="last_name"]').type('test');
  cy.get('[data-qa="company"]').type('test');
  cy.get('[data-qa="address"]').type('test');
  cy.get('[data-qa="address2"]').type('test');
  cy.get('[data-qa="country"]').select('India');
  cy.get('[data-qa="state"]').type('test');
  cy.get('[data-qa="city"]').type('test');
  cy.get('[data-qa="zipcode"]').type('test');
  cy.get('[data-qa="mobile_number"]').type('test');
  cy.get('[data-qa="create-account"]').click();
  cy.contains(/ACCOUNT CREATED/i).should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
  cy.contains(/logged in as test testerson/i).should('be.visible');
  cy.get('a[href="/logout"]').click();
  cy.get('a[href="/login"]').click();
  cy.get('.login-form').should('contain', 'Login to your account');
  cy.get('[data-qa="login-email"]').type('123123test@test123.com');
  cy.get('[data-qa="login-password"]').type('test');
  cy.get('[data-qa="login-button"]').click();
  cy.contains(/logged in as test testerson/i).should('be.visible');
  cy.get('a[href="/delete_account"]').click();
  cy.contains(/account deleted!/i).should('be.visible');
});

it('Test Case 3: Login User with incorrect email and password', () => {
  cy.visit('https://automationexercise.com/');
  cy.title().should('contain', 'Automation Exercise');
  cy.get('#header').should('be.visible');
  cy.get('a[href="/login"]').click();
  cy.get('.login-form').should('contain', 'Login to your account');
  cy.get('[data-qa="login-email"]').type('incorrect-email@incorrect.com');
  cy.get('[data-qa="login-password"]').type('incorrect-password');
  cy.get('[data-qa="login-button"]').click();
  cy.contains('Your email or password is incorrect!').should('be.visible');
});
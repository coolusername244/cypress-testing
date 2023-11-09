it('Test Case 1: Register User', () => {
  cy.visitHomePage();
  cy.performSignUp('test testerson', '123123test@test123.com', 'test');
  cy.get('a[href="/delete_account"]').click();
  cy.contains(/account deleted!/i).should('be.visible');
});

it('Test Case 2: Login User', () => {
  cy.visitHomePage();
  cy.performSignUp('test testerson', '123123test@test123.com', 'test');
  cy.get('a[href="/logout"]').click();
  cy.performLogin('123123test@test123.com', 'test');
  cy.contains(/logged in as test testerson/i).should('be.visible');
  cy.get('a[href="/delete_account"]').click();
  cy.contains(/account deleted!/i).should('be.visible');
});

it('Test Case 3: Login User with incorrect email and password', () => {
  cy.visitHomePage();
  cy.performLogin('incorrect@test.com', 'incorrect');
  cy.contains('Your email or password is incorrect!').should('be.visible');
});

it('Test Case 4: Logout User', () => {
  cy.visitHomePage();
  cy.performSignUp('test testerson', '123123test@test123.com', 'test');
  cy.get('a[href="/logout"]').click();
  cy.get('.login-form').should('contain', 'Login to your account');
  cy.performLogin('123123test@test123.com', 'test');
  cy.contains(/logged in as test testerson/i).should('be.visible');
  cy.deleteAccount();
});

it('Test Case 5: Register User with existing email', () => {
  cy.visitHomePage();
  cy.performSignUp('test testerson', '123123test@test123.com', 'test');
  cy.get('a[href="/logout"]').click();
  cy.get('.login-form').should('contain', 'Login to your account');
  cy.get('.signup-form').should('contain', 'New User Signup!');
  cy.get('[data-qa="signup-name"]').type('test testerson');
  cy.get('[data-qa="signup-email"]').type('123123test@test123.com');
  cy.get('[data-qa="signup-button"]').click();
  cy.get('.signup-form > form > p').should(
    'contain',
    'Email Address already exist!',
  );
  cy.performLogin('123123test@test123.com', 'test');
  cy.contains(/logged in as test testerson/i).should('be.visible');
  cy.deleteAccount();
});

it('Test Case 6: Contact Us Form', () => {
  cy.visitHomePage();
  cy.get('a[href="/contact_us"]').click();
  cy.contains(/GET IN TOUCH/i).should('be.visible');
  cy.get('[data-qa="name"]').type('test');
  cy.get('[data-qa="email"]').type('test@test.com');
  cy.get('[data-qa="subject"]').type('test');
  cy.get('[data-qa="message"]').type('test');
  cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json');
  cy.get('[data-qa="submit-button"]').click();
  cy.contains(/Success! Your details have been submitted successfully/i).should(
    'be.visible',
  );
});

it('Test Case 7: Verify Test Cases Page', () => {
  cy.visitHomePage();
  cy.get('a[href="/test_cases"]').eq(0).click();
  cy.url().should('eq', 'https://automationexercise.com/test_cases');
});

it('Test Case 8: Verify All Products and product detail page', () => {
  cy.visitHomePage();
  cy.get('a[href="/products"]').click();
  cy.get('h2')
    .contains(/all products/i)
    .should('be.visible');
  cy.get('.features_items').should('be.visible');
  cy.get('a[href="/product_details/1"]').click();
  cy.url().should('eq', 'https://automationexercise.com/product_details/1');
  cy.get('.product-information')
    .contains(/blue top/i)
    .should('be.visible');
  cy.get('.product-information')
    .contains(/Category:/i)
    .should('be.visible');
  cy.get('.product-information').contains(/Rs./i).should('be.visible');
  cy.get('.product-information')
    .contains(/Availability:/i)
    .should('be.visible');
  cy.get('.product-information')
    .contains(/Condition:/i)
    .should('be.visible');
  cy.get('.product-information')
    .contains(/Brand:/i)
    .should('be.visible');
});

it('Test Case 9: Search Product', () => {
  cy.visitHomePage();
  cy.get('a[href="/products"]').click();
  cy.get('h2')
    .contains(/all products/i)
    .should('be.visible');
  cy.get('#search_product').type('top');
  cy.get('#submit_search').click();
  cy.get('.productinfo').each($result => {
    cy.wrap($result).should('be.visible');
  });
});

it('Test Case 10: Verify Subscription in home page', () => {
  cy.visitHomePage();
  cy.scrollTo('bottom');
  cy.contains(/subscription/i).should('be.visible');
  cy.get('#susbscribe_email').type('123123test@test123.com');
  cy.get('#subscribe').click();
  cy.get('#success-subscribe')
    .contains(/You have been successfully subscribed!/i)
    .should('be.visible');
});

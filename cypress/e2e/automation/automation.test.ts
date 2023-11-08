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
  cy.deleteAccount();
});

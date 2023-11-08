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

it.only('Test Case 6: Contact Us Form', () => {
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

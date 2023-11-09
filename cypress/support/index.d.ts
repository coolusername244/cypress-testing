export {};

declare global {
  namespace Cypress {
    interface Chainable {
      visitHomePage(): Chainable<any>;
      performSignUp(
        name: string,
        email: string,
        password: string,
      ): Chainable<any>;
      performLogin(email: string, password: string): Chainable<any>;
      deleteAccount(): Chainable<any>;
      subscribe(email: string): Chainable<any>;
    }
  }
}

import { getGreeting } from '../support/app.po';

describe('react-desktop', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to react-desktop!');
  });
});

export class Login {
  private readonly HOME_PAGE: string = 'https://www.saucedemo.com/';
  private readonly BTN_LOGIN: string = '[data-test="login-button"]';
  private readonly MENSAGE_ERROR: string = '[data-test="error"]';
  private readonly USER_NAME: string = '[data-test="username"]';
  private readonly PASSWORD: string = '[data-test="password"]';

  validUser(): void {
    cy.get(this.USER_NAME).first().click().type('standard_user');
  }

  validPassword(): void {
    cy.get(this.PASSWORD).first().click().type('secret_sauce');
  }

  btnLogin(): void {
    cy.get(this.BTN_LOGIN).first().click();
  }

  visitPage() {
    cy.visit(this.HOME_PAGE);
  }

  invalidUser(): void{
    cy.get(this.USER_NAME).first().click().type('EeeeerrorUser');
  }

  login(): void {
    this.visitPage();
    this.validUser();
    this.validPassword();
    this.btnLogin();
  }
  invalidLogin(): void {
    this.visitPage();
    this.invalidUser();
    this.validPassword();
    this.btnLogin();
    cy.get(this.MENSAGE_ERROR)
    .contains('Epic sadface: Username and password do not match any user in this service');
  }
}

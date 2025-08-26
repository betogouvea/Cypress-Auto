export class CheckoutInformation {
  private readonly SECOUND_NAME: string = '[data-test="lastName"]';
  private readonly BTN_CONTINUE: string = '[data-test="continue"]';
  private readonly FIRST_NAME: string = '[data-test="firstName"]';
  private readonly ZIP_POST: string = '[data-test="postalCode"]';

  inputName(value: string): void{
    cy.get(this.FIRST_NAME)
    .first()
    .click()
    .type(value);
  }
  inputLastName(value: string): void {
    cy.get(this.SECOUND_NAME)
    .first()
    .click()
    .type(value);
  }
  inputZip(value: string): void {
    cy.get(this.ZIP_POST)
    .first()
    .click()
    .type(value);
  }
  continus(): void {
    cy.get(this.BTN_CONTINUE)
    .first()
    .click();
  }

}

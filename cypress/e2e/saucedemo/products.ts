export class Products {

  private readonly BOLSA_COSTAS: string = '[data-test="inventory-item-name"]';
  private readonly PRICE: string = '[data-test="inventory-item-price"]';
  private readonly BACK_LIST: string ='[data-test="back-to-products"]';
  private readonly ADD_CART: string = '[data-test="add-to-cart"]';

  selectItem(): void {
    cy.get(this.BOLSA_COSTAS)
    .first()
    .click();
  }
  priceConfirm(value: string): void {
    cy.get(this.PRICE)
    .contains(value);
  }
  addItem(): void {
    cy.get(this.ADD_CART)
    .first()
    .click();
  }
  backPage(): void {
    cy.get(this.BACK_LIST)
    .first()
    .click();
  }


}

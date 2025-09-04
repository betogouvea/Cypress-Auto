export class Products {

  private readonly INVENTORY_ITEM_NAME: string = '[data-test="inventory-item-name"]';
  private readonly PRICE: string = '[data-test="inventory-item-price"]';
  private readonly BACK_LIST: string = '[data-test="back-to-products"]';
  private readonly ADD_CART: string = '[data-test="add-to-cart"]';

  selectItem(): void {
    cy.get(this.INVENTORY_ITEM_NAME)
    .first()
    .click();
  }
  priceConfirm(value: string): void {
    cy.get(this.PRICE)
    .contains(value)
    .should('be.visible');
  }
  addItem(): void {
    cy.get(this.ADD_CART)
    .first()
    .click();
  }
  backPage(): void {
    cy.get(this.BACK_LIST)
    .click();
  }


}

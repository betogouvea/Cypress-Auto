import { DetalhesPagamento } from "./detalhes-pagamento";
import { Cart } from "./cart";
import { Menu } from "./menu";

export class CoffeePom {
  private readonly SITE: string = "https://coffee-cart.app/";
  private readonly DETAILS: DetalhesPagamento;
  private readonly CART: Cart;
  private readonly MENU: Menu;

  constructor() {
    this.DETAILS = new DetalhesPagamento();
    this.CART = new Cart();
    this.MENU = new Menu();
  }

  confirmPriceAmericano() {
    cy.visit(this.SITE);
    cy.get('[data-cy="Americano"]').should("be.visible");
    this.CART.selectAmericano();
    this.CART.total("$7.00");
  }
  confirmPriceBreve() {
    cy.visit(this.SITE);
    cy.get('[data-cy="Cafe-Breve"]').should("be.visible");
    this.CART.selectBreve();
    this.CART.total("$15.00");
  }
  confirmPriceCappuccino() {
    cy.visit(this.SITE);
    cy.get('[data-cy="Cappuccino"]').should("be.visible");
    this.CART.selectCappuccino();
    this.CART.total("$19.00");
  }
  confirmPriceEspresso() {
    cy.visit(this.SITE);
    cy.get('[data-cy="Espresso"]').should("be.visible");
    this.CART.selectEspresso();
    this.CART.total("$10.00");
  }
  confirmPriceFlat() {
    cy.visit(this.SITE);
    cy.get('[data-cy="Flat-White"]').should("be.visible");
    this.CART.selectFlat();
    this.CART.total("$18.00");
  }
  confirmPriceLatte() {
    cy.visit(this.SITE);
    cy.get('[data-cy="Cafe-Latte"]').should("be.visible");
    this.CART.selectLatte();
    this.CART.total("$16.00");
  }
  confirmPriceMacchiato() {
    cy.visit(this.SITE);
    cy.get('[data-cy="Espresso-Macchiato"]').should("be.visible");
    this.CART.selectMacchiato();
    this.CART.total("$12.00");
  }
  confirmPriceMocha() {
    cy.visit(this.SITE);
    cy.get('[data-cy="Mocha"]').should("be.visible");
    this.CART.selectMocha();
    this.CART.total("$8.00");
  }
  confirmPricePanna() {
    cy.visit(this.SITE);
    cy.get('[data-cy="Espresso-Con Panna"]').should("be.visible");
    this.CART.selectPanna();
    this.CART.total("$14.00");
  }
  selectCoffees() {
    cy.visit(this.SITE);
    cy.get('[data-cy="Americano"]').should("be.visible");
    this.CART.selectAmericano();
    this.CART.total("Total: $7.00");
    this.CART.selectCappuccino();
    this.CART.selectMacchiato();
    this.MENU.hoverCheckout();
    this.MENU.selectCheckout();
    this.DETAILS.inviteName("Beto");
    this.DETAILS.inviteEmail("Beto@gmail.com");
    this.DETAILS.endShop();
    this.DETAILS.confirmMessage();
  }
}

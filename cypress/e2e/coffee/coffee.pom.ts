import { DetalhesPagamento } from './detalhes-pagamento';
import { Cart } from './cart';
import { Menu } from './menu';

export class CoffeePom{
    private readonly SITE: string = 'https://coffee-cart.app/';
    private readonly DETAILS: DetalhesPagamento;
    private readonly CART: Cart;
    private readonly MENU: Menu;


 constructor() {
     this.DETAILS = new DetalhesPagamento;
    this.CART = new Cart;
    this.MENU = new Menu;
    }
    
    confirmPriceAmericano() {
    cy.visit(this.SITE);
    cy.wait(2000);
    this.CART.selectAmericano();
    this.CART.total('$7.00');
    }
    confirmPriceBreve() {
    cy.visit(this.SITE);
    cy.wait(2000);
    this.CART.selectBreve();
    this.CART.total('$15.00');
    }
    confirmPriceCappuccino(){
    cy.visit(this.SITE);
    cy.wait(2000);          
    this.CART.selectCappuccino();
    this.CART.total('$19.00');
    }
    confirmPriceExpresso(){
    cy.visit(this.SITE);
    cy.wait(2000);        
    this.CART.selectExpresso();
    this.CART.total('$10.00');
    }
    confirmePriceFlat(){
    cy.visit(this.SITE);
    cy.wait(2000);        
    this.CART.selectFlat();
    this.CART.total('$18.00');
    }
    confirmPriceLatte(){
    cy.visit(this.SITE);
    cy.wait(2000);        
    this.CART.selectLatte();
    this.CART.total('$16.00');
    }
    confirmPriceMacchiato(){
    cy.visit(this.SITE);
    cy.wait(2000);       
    this.CART.selectMacchiato();
    this.CART.total('$12.00');
    }
    confirmPriceMocha(){
    cy.visit(this.SITE);
    cy.wait(2000);        
    this.CART.selectMocha();
    this.CART.total('$8.00');
    }
    confirmPricePanna(){
    cy.visit(this.SITE);
    cy.wait(2000);        
    this.CART.selectPanna();
    this.CART.total('$14.00');
    }
    selectCoffees() {
    cy.visit(this.SITE);
    cy.wait(2000);
    this.CART.selectAmericano();
    this.CART.total('Total: $7.00');
    this.CART.selectCappuccino();
    this.CART.selectMacchiato();
    this.MENU.checkTotal();
    this.MENU.selectTotal();
    this.DETAILS.inviteName('Beto');
    this.DETAILS.inviteEmail('Beto@gmail.com');
    this.DETAILS.endShop();
    this.DETAILS.confirmMensage();
    }



}
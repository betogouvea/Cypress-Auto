import { CheckoutInformation } from './checkout-information';
import { CheckoutComplete } from './checkout-complete';
import { CheckoutOverview } from './checkout-overview';
import { CheckOut } from './checkout';
import { Products } from './products';
import { Login } from './login';

export class Pom {

  private readonly CHECK_OUT_INFORMATION: CheckoutInformation;
  private readonly CHECK_OUT_OVERVIEW: CheckoutOverview;
  private readonly CHECK_OUT_COMPLETE: CheckoutComplete;
  private readonly CHECK_OUT: CheckOut;
  private readonly PRODUCTS: Products;
  private readonly LOGIN: Login;

  constructor(){
    this.CHECK_OUT_INFORMATION = new CheckoutInformation;
    this.CHECK_OUT_OVERVIEW = new CheckoutOverview;
    this.CHECK_OUT_COMPLETE = new CheckoutComplete;
    this.CHECK_OUT = new CheckOut;
    this.PRODUCTS = new Products;
    this.LOGIN = new Login;
  }
  login(){
    this.LOGIN.login();
    this.LOGIN.invalidLogin();
  }
  addProduct(): void {
    this.LOGIN.login();
    this.PRODUCTS.selectItem();
    this.PRODUCTS.priceConfirm('$29.99');
    this.PRODUCTS.addItem();
    this.PRODUCTS.backPage();
  }
  checkOut(): void {
    this.CHECK_OUT.visitCart();
    this.CHECK_OUT.confirmName('Sauce Labs Backpack');
    this.CHECK_OUT.finishBuy();
  }
  clientInformation(): void {
    this.CHECK_OUT_INFORMATION.inputName('beto');
    this.CHECK_OUT_INFORMATION.inputLastName('Gouvea');
    this.CHECK_OUT_INFORMATION.inputZip('2233344');
    this.CHECK_OUT_INFORMATION.continue();
  }
  overview(): void {
    this.CHECK_OUT_OVERVIEW.description('Checkout: Overview');
    this.CHECK_OUT_OVERVIEW.information('SauceCard #31337');
    this.CHECK_OUT_OVERVIEW.totalPrice('Total: $32.39');
    this.CHECK_OUT_OVERVIEW.finishBuy();
  }
  completeCheckout(): void {
    this.CHECK_OUT_COMPLETE.writeMessage('Thank you for your order!');
    this.CHECK_OUT_COMPLETE.backToMenu();
  }

}

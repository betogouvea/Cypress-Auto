import {Pom} from './pom';

describe('Teste com POM', () => {
  it('teste de login', () => {
    let shopping = new Pom();
    shopping.entrar();
    });
    it('Adiciona o produto e realiza o check-out', () => {
    let shopping = new Pom();
    shopping.addProduct();
    shopping.checkOut();
    shopping.clientInformation();
    shopping.overview();
    shopping.completeCheckout();
  });
});

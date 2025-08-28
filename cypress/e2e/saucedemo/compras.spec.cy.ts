import { Pom } from './pom';

describe ('Teste com Pom', () => {
    it('teste de login',() => {
        let compras = new Pom();
        compras.entrar();
    });
    it('Adiciona um produto e realiza o check-out', () => {
        let compras = new Pom();
        compras.addProduct();
        compras.checkOut();
        compras.clientInformation();
        compras.overview();
        compras.completeCheckout();
    });
});
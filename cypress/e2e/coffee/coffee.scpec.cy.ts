import { CoffeePom } from './coffee.pom';

describe('Teste com POM', () => {
    let coffee = new CoffeePom();

    it('Preço do expresso', () => {
        coffee.confirmPriceExpresso();
    });
    it('Preço do cappuccino', () => {
        coffee.confirmPriceCappuccino();
    });
    it('Preço do latte', () => {
        coffee.confirmPriceLatte();
    });
    it('Preço do americano', () => {
        coffee.confirmPriceAmericano();
    });
    it('Preço do Breve', () => {
        coffee.confirmPriceBreve();
    });
    it('Preço do Mocha', () => {
        coffee.confirmPriceMocha();
    });
    it('Preço do Panna', () => {
        coffee.confirmPricePanna();
    });
    it('Preço do Flat', () => {
        coffee.confirmePriceFlat();
    });
    it('Preço do Macchiato', () => {
        coffee.confirmPriceMacchiato();
    });
    it('teste de escolha de café', () => {
      coffee.selectCoffees();
    });


});
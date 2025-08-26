export class Cart {
    private readonly EXPRESSO_PANNA: string = '[data-cy="Espresso-Con Panna"]';
    private readonly MACCHIATO: string = '[data-cy="Espresso-Macchiato"]';
    private readonly CAPPUCCINO: string = '[data-cy="Cappuccino"]';
    private readonly FLAT_WHITE: string ='[data-cy="Flat-White"]';
    private readonly AMERICANO: string = '[data-cy="Americano"]';
    private readonly EXPRESSO: string = '[data-cy="Espresso"]';
    private readonly LATTE: string = '[data-cy="Cafe-Latte"]';
    private readonly BREVE: string = '[data-cy="Cafe-Breve"]';
    private readonly TOTAL: string = '[data-test="checkout"]';
    private readonly MOCHA: string = '[data-cy="Mocha"]';


    total(value: string): void {
        cy.get(this.TOTAL)
        .trigger('mousever')
        .contains(value);
    }
    
    selectExpresso(): void {
        cy.get(this.EXPRESSO)
        .first()
        .click();
    }
    selectMacchiato(): void {
        cy.get(this.MACCHIATO)
        .first()
        .click();
    }
    selectCappuccino(): void {
        cy.get(this.CAPPUCCINO)
        .first()
        .click()
    }
    selectMocha(): void {
        cy.get(this.MOCHA)
        .first()
        .click()
    }
    selectFlat(): void {
        cy.get(this.FLAT_WHITE)
        .first()
        .click();
    }
    selectAmericano(): void {
        cy.get(this.AMERICANO)
        .first()
        .click({force: true});
    }
    selectLatte(): void {
        cy.get(this.LATTE)
        .first()
        .click();
    }
    selectPanna(): void {
        cy.get(this.EXPRESSO_PANNA)
        .first()
        .click();
    }
    selectBreve(): void {
        cy.get(this.BREVE)
        .first()
        .click();
    }



}
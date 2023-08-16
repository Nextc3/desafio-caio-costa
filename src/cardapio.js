class Cardapio {
    constructor() {
        this.itens = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };
        this.extras = [
            {extra:"chantily",principal: "cafe"},
            {extra:"queijo", principal:"sanduiche"}

        ];
    }

    getValor(comida) {
        return this.itens[comida] || false;
    }

    toString(comida) {
        const cardapioNomes = {
            cafe: "Café",
            chantily: "Chantily (extra do Café)",
            suco: "Suco Natural",
            sanduiche: "Sanduíche",
            queijo: "Queijo (extra do Sanduíche)",
            salgado: "Salgado",
            combo1: "1 Suco e 1 Sanduíche",
            combo2: "1 Café e 1 Sanduíche"
        };

        return cardapioNomes[comida] || false;
    }
}

export { Cardapio };
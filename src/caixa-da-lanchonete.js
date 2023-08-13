class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let resposta;

        return resposta;
    }

}

export { CaixaDaLanchonete };

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
  }

  getValor(comida) {
    return this.itens[comida] || 0;
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

    return cardapioNomes[comida] || "Item não encontrado";
  }
}

export {Cardapio}
class Usabilidade {
  static separarString(stringComVirgula) {
    const [parte1, parte2] = stringComVirgula.split(',');
    return [parte1, Number(parte2)];
  }

  static juntarString(string, numero) {
    return `${string} ${numero}`;
}
}
export {Usabilidade}


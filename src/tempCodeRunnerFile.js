class FormasDePagamento {
  constructor() {
    this.formas = {
      credito: 1.03,   // Taxa de 3% a mais
      dinheiro: 0.95,  // Desconto de 5%
      debito: 1.00     // Sem alterações
    };
  }

  validarForma(forma) {
    if (forma in this.formas) {
      return true;
    } else {
      return false;
    }
  }

  calcularTotal(valorOriginal, forma) {
    if (!this.validarForma(forma)) {
      return "Forma de pagamento inválida!";
    }

    const fator = this.formas[forma];
    const valorTotal = valorOriginal * fator;

    return valorTotal.toFixed(2); // Arredonda para 2 casas decimais
  }
}

// Exemplo de uso
const formasDePagamento = new FormasDePagamento();

console.log(formasDePagamento.validarForma("credito")); // true
console.log(formasDePagamento.validarForma("cheque")); // false

console.log(formasDePagamento.calcularTotal(100, "credito")); // 103.00 (taxa de 3% a mais)
console.log(formasDePagamento.calcularTotal(100, "dinheiro")); // 95.00 (desconto de 5%)
console.log(formasDePagamento.calcularTotal(100, "debito")); // 100.00 (sem alterações)
console.log(formasDePagamento.calcularTotal(100, "paypal")); // Forma de pagamento inválida!
;
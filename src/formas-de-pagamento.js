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
      
  
      const fator = this.formas[forma];
      const valorTotal = valorOriginal * fator;
  
      return valorTotal.toFixed(2).replace(".",",") // Arredonda para 2 casas decimais e substitui ponto por virgula
    }
  };
  
  
  export {FormasDePagamento};

  //console.log(new FormasDePagamento().calcularTotal(4,"credito"))
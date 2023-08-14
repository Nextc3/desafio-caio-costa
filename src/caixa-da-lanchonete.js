import { Cardapio } from "./cardapio";
import { FormasDePagamento } from "./formas-de-pagamento";
import { Usabilidade } from "./usabilidade";




class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let resposta;
        
        const formaDePagamento = new FormasDePagamento();
        if (!formaDePagamento.validarForma(metodoDePagamento)){
            return "Forma de pagamento inválida!" ;
            
        }
        if (itens.length === 0){
            return "Não há itens no carrinho de compra!";
        }
        pedidos = itens.map(element => {
            Usabilidade.separarString(element);
            
        });
        if (pedidos.some(element => element.includes(0))){
            return "Quantidade inválida!"
        }
        if (pedidos.some(element => element.length === 0) || !((element)  => {new Cardapio().getValor(element[0])})){
            return 'Item inválido!'
        }
    
        console.log(resposta)
        return resposta;
    }
}

export { CaixaDaLanchonete };

console.log(new CaixaDaLanchonete().calcularValorDaCompra('credo', ['cafe,1','chantily,1']))

class CaixaDaLanchoneteError extends Error {
    constructor(message) {
        super(message);
        this.name = "CaixaDaLanchoneteError";
    }
}

export { CaixaDaLanchoneteError };






import { Cardapio } from "./cardapio.js";
import { FormasDePagamento } from "./formas-de-pagamento.js";
import { Usabilidade } from "./usabilidade.js";





class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        
        
        const formaDePagamento = new FormasDePagamento();
        if (!formaDePagamento.validarForma(metodoDePagamento)){
            return "Forma de pagamento inválida!" ;
            
        }
        
        //se o carrinho de compras está  vazio
        if (itens.length === 0){
            return "Não há itens no carrinho de compra!";
        }
        const pedidos = itens.map(element => {
           return  Usabilidade.separarString(element);
            
        });
        
        //verifica se a quantidade de algum item é zero
        if (pedidos.some(element => {return element.includes(0)})){
            return "Quantidade inválida!";
        }
        const cardapio = new Cardapio();
        
        //verifica se item existe
        //pedidos.some(element => element.length === 0) || 
        if (!pedidos.every(element => {return cardapio.getValor(element[0]) })){
            return 'Item inválido!';
        }
        //verifica se os itens extras existem junto com seus respectivos principais
        for (const extra of cardapio.extras){
            //procura se extra está nos pedidos e seu principal, caso não encontre o principal retornamos mensagem de não encontrado
            if (pedidos.some(pedido => {return pedido[0] === extra.extra}) && !(pedidos.some(pedido => {return pedido[0] === extra.principal}))) {
                  return "Item extra não pode ser pedido sem o principal";
            }


        }
        
        const precoTotal = pedidos.map(pedido => {return cardapio.getValor(pedido[0]) * pedido[1]});
        let total = precoTotal.reduce((acc,atual) => {return acc + atual},0);
        total = formaDePagamento.calcularTotal(total,metodoDePagamento);
        return Usabilidade.juntarString("R$",total);
    }
}

export { CaixaDaLanchonete };

//console.log(new CaixaDaLanchonete().calcularValorDaCompra('debito', ['cafe,1','sanduiche,1','queijo,1','queijo,2']))







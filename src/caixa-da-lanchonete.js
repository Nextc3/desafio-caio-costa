import { Cardapio } from "./cardapio";
import { FormasDePagamento } from "./formas-de-pagamento";
import { Usabilidade } from "./usabilidade";




class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        
        //verifica se existe forma de pagamento solicitada
        const formaDePagamento = new FormasDePagamento();
        if (!formaDePagamento.validarForma(metodoDePagamento)){
            return "Forma de pagamento inválida!" ;
            
        }
        //se o carrinho de compras está  vazio
        if (itens.length === 0){
            return "Não há itens no carrinho de compra!";
        }
        pedidos = itens.map(element => {
            Usabilidade.separarString(element);
            
        });
        console.log(pedidos)
        //verifica se a quantidade de algum item é zero
        if (pedidos.some(element => element.some(el => el===0))){
            return "Quantidade inválida!";
        }
        const cardapio = new Cardapio();
        
        //verifica se item existe
        //pedidos.some(element => element.length === 0) || 
        if (!pedidos.every(element => {cardapio.getValor(element[0]) })){
            return 'Item inválido!';
        }
        //verifica se os itens extras existem junto com seus respectivos principais
        for (const extra of cardapio.extras){
            //procura se extra está nos pedidos e seu principal, caso não encontre o principal retornamos mensagem de não encontrado
            if (pedidos.some(pedido => {pedido[0] === extra.extra}) && !(pedidos.some(pedido => {pedido[0] === extra.principal}))) {
                  return "Item extra não pode ser pedido sem o principal";
            }


        }
        
        const precoTotal = pedidos.map(pedido => {cardapio.getValor(pedido[0]) * pedido[1]})
        const total = precoTotal.reduce((acc,atual) => { acc + atual},0)
        const resposta = Usabilidade.juntarString("R$",total)
        
        

    
        console.log(resposta)
        return resposta;
    }
}

export { CaixaDaLanchonete };

console.log(new CaixaDaLanchonete().calcularValorDaCompra('credo', ['cafe,1','chantily,1']))







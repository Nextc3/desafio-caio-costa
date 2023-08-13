import { CaixaDaLanchonete } from "./caixa-da-lanchonete";




const bola = new CaixaDaLanchonete()
const retorno = bola.calcularValorDaCompra('credito', ['combo1,1','cafe,2']);

console.log(retorno)
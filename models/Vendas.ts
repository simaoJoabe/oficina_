
import { Venda } from "./Venda.js";

export class Vendas {
  private produtosVendidos: Venda[] = [];

  adicionaVenda(venda:Venda) {
    this.produtosVendidos.push(venda);
  }
  lista(): readonly Venda[] {
    return this.produtosVendidos;
  }
}

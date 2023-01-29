import { Cliente } from "./Cliente.js";

export class Vendas {
  private produtosVendidos: Cliente[] = [];

  adicionaVenda(cliente: Cliente) {
    this.produtosVendidos.push(cliente);
  }
  lista(): readonly Cliente[] {
    return this.produtosVendidos;
  }
}

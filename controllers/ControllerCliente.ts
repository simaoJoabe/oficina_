import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Cliente } from "../models/Cliente.js";

import { Vendas } from "../models/Vendas.js";
import { MensagemView } from "../views/MensagemView.js";
import { VendasView } from "../views/Vendas-View.js";

export class ControllerCliente {
  private inputNome: HTMLInputElement;
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private inputPagamento: HTMLInputElement;
  private inputTelefone: HTMLInputElement;

  private vendas = new Vendas();
  private vendasView = new VendasView("#vendasView", true);
  private mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this.inputNome = document.querySelector("#nome");
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.inputTelefone = document.querySelector("#telefone");
    this.inputPagamento = document.querySelector("#pag");

    this.vendasView.update(this.vendas);
  }

  public adiciona(): void {
    const venda = Cliente.criaDe(
      this.inputNome.value,
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value,
      this.inputTelefone.value,
      this.inputPagamento.value
    );
    if (!this.ehDiaUtil(venda.dataCadastro)) {
      this.mensagemView.update("apenas dias uteis");
      return;
    }
    this.vendas.adicionaVenda(venda);
    this.vendasView.update(this.vendas);
    this.vendas.lista();
    this.mensagemView.update("venda realizada com sucesso!");
    this.limparFormulario();
    this.atualizaView();
  }

  private limparFormulario(): void {
    this.inputNome.value = "";
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputTelefone.value = "";
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.vendasView.update(this.vendas);
    this.mensagemView.update("venda adicionada");
  }

  private ehDiaUtil(data: Date) {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }
}

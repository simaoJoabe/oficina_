import { Pagamento } from "./Pagamento.js";
import { Venda } from "./Venda.js";

export class Cliente {
  constructor(
    private _nome: string,
    private _dataCadastro: Date,
    private _quantidade: number,
    private _valor: number,
    private _pagamento: Pagamento,
    private _telefone: number
  ) {}

  get nome(): string {
    return this._nome;
  }
  get dataCadastro() {
    return new Date(this._dataCadastro.getTime());
  }
  get quantidade(): number {
    return this._quantidade;
  }
  get valor(): number {
    return this._valor;
  }
  get pagamento(): Pagamento {
    return this._pagamento;
  }
  get telefone(): number {
    return this._telefone;
  }

  public static criaDe(
    nomeString: string,
    dataString: string,
    quantidadeString: string,
    valorString: string,
    telefoneString: string,
    pagamentoString: string
  ) {
    const expressaoRegular = /-/g;
    const nome = nomeString;
    const date = new Date(dataString.replace(expressaoRegular, " "));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    const telefone = parseInt(telefoneString);
    const pagamento = pagamentoString;

    return new Venda(nome, date, quantidade, valor, pagamento, telefone);
  }
}

import { Pagamento } from "./Pagamento";
import { Preco } from "./Preco";

export class Venda {
  constructor(
    private _preco: Preco,
    private _data: Date,
    private _pagamento: Pagamento
  ) {}

  get preco(): Preco {
    return this._preco
  }
  get data():Date{
    return new Date(this._data.getTime())
  }

  get pagamento():Pagamento{
    return this._pagamento
  }
}

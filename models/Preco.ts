export class Preco {
  constructor(private _quantia: number) {}
  
  toCents():number{
    return this._quantia * 100

  }
}

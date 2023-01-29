import { Vendas } from "../models/Vendas.js";
import { View } from "./View.js";

export class VendasView extends View<Vendas> {
  protected template(modelo: Vendas): string {
    return `
        <table class = "table table-hover table-bordered">
        <thead>
            <tr>
                <th>NOME DO CLIENTE</th>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>PAGAMENTO</th>
                <th>TELEFONE</th>
                </tr>
        </thead>
        <tbody>
        ${modelo
          .lista()
          .map((item) => {
            return `
            <tr>
            <td>${item.nome}</td>
            <td>${this.formata(item.dataCadastro)}</td>
            <td>${item.quantidade}</td>
            <td>${item.valor}</td>
            <td>${item.pagamento}</td>
            <td>${item.telefone}</td>
           
            
           
            </tr>
            <script>alert("oi")</script>`;
          })
          .join("")}
        </tbody>
    </table>`;
  }
  formata(data: Date) {
    return new Intl.DateTimeFormat().format(data);
  }
}

import { ControllerCliente } from "./controllers/ControllerCliente.js";


const controller = new ControllerCliente();

const form = document.querySelector(".form");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  controller.adiciona();
});


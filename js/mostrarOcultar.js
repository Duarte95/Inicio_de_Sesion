import { pass } from "./validaciones.js";

export const mostrarIcono = document.querySelector(".mostrar");
export const ocultarIcono = document.querySelector(".ocultar");

export function togglePasswordVisibility() {

  if (pass.type === "password") {
    pass.type = "text";
    mostrarIcono.style.display = "none";
    ocultarIcono.style.display = "block";
  } else {
    pass.type = "password";
    mostrarIcono.style.display = "block";
    ocultarIcono.style.display = "none";
  }
}
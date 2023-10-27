import {pass} from "./validaciones.js"
export function togglePasswordVisibility() {
  const mostrarIcono = document.querySelector(".mostrar");
  const ocultarIcono = document.querySelector(".ocultar");

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
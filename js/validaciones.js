import { azul, verde, blanco, rojo } from "./colores.js";
import { boton } from "./colores.js";
import { cuentas } from "./usuarios.js";

const user = document.querySelector("[data-usuario]");
const pass = document.querySelector("[data-clave]");
const msg = document.querySelector("[data-span]");

//-VALIDACION DE USUARIO-//
const validarUsuario = () => {
  return cuentas.some((cuenta) => cuenta.usuario === user.value);
};
///////////////////////////

//-VALIDACION REGEX-//
const regex = /^(?=(?:[^A-Z]*[A-Z]){1})(?=(?:\D*\d){2})[A-Za-z\d]{1,10}$/;
//////////////////////

//////-EVENTO CLICK-///////
boton.addEventListener("click", () => {
  if (validarUsuario() && pass.value === "") {
    setTimeout(rojo, 500);
    setTimeout(verde, 2000);
  } else if (user.value.length > 0 && !validarUsuario() && pass.value === "") {
    setTimeout(rojo, 500);
    setTimeout(blanco, 2000);
  } else if (user.value === "" || pass.value === "") {
    setTimeout(rojo, 500);
    setTimeout(azul, 2000);
  }
});
////////////////////////////

///////-EVENTO INPUT-///////
user.addEventListener("input", () => {
  setTimeout(() => {
    if (validarUsuario()) {
      verde();
    } else if (user.value.length > 0) {
      blanco();
    } else {
      azul();
    }
  }, 500);
});
////////////////////////////

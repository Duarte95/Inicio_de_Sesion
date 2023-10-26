import { azul, verde, blanco, boton } from "./colores.js";
import { cuentas } from "./usuarios.js";
import { fotoPredeterminada, foto } from "./funciones.js";
import { iniciarSesion } from "./inicioSesion.js";

//-INPUTS-//
export const user = document.querySelector("[data-usuario]");
export const pass = document.querySelector("[data-clave]");
////////////

//-VALIDACION DE USUARIO-//
export const validarUsuario = () => {
  return cuentas.find((cuenta) => cuenta.usuario === user.value); //valor .some()
};
///////////////////////////

//-VALIDACION REGEX-//
const regex = /^(?=(?:[^A-Z]*[A-Z]){1})(?=(?:\D*\d){2})[A-Za-z\d]{1,10}$/;
//////////////////////

///////-EVENTO INPUT-///////
user.addEventListener("input", () => {
  const cuentaUsuario = validarUsuario();
  const fotoUsuario = () => {
    foto.style.backgroundImage = `url(${cuentaUsuario.foto})`;
    foto.style.filter = "none";
    foto.style.backgroundPosition = "center";
  };
  setTimeout(() => {
    if (cuentaUsuario) {
      fotoUsuario(cuentaUsuario);
      verde();
    } else if (user.value.length > 0) {
      fotoPredeterminada();
      blanco();
    } else {
      fotoPredeterminada();
      azul();
    }
  }, 500);
});
////////////////////////////

//////-EVENTO CLICK-///////
boton.addEventListener("click", (event) => {
  event.preventDefault();
  iniciarSesion();
});
////////////////////////////

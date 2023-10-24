import { azul, verde, blanco, rojo } from "./colores.js";
import { boton } from "./colores.js";
import { cuentas } from "./usuarios.js";

const user = document.querySelector("[data-usuario]");
const pass = document.querySelector("[data-clave]");
const foto = document.querySelector("[data-foto]");
const msg = document.querySelector("[data-span]");
let imagen; //para almacenar la imagen

//-VALIDACION REGEX-//
const regex = /^(?=(?:[^A-Z]*[A-Z]){1})(?=(?:\D*\d){2})[A-Za-z\d]{1,10}$/;
//////////////////////

//-VALIDACION DE USUARIO-//
const validarUsuario = () => {
  return cuentas.some((cuenta) => cuenta.usuario === user.value);
};
///////////////////////////

///////-EVENTO INPUT-///////
user.addEventListener("input", () => {
  setTimeout(() => {
    if (validarUsuario()) {
      foto.style.backgroundImage = `url(${imagen})`;
      verde();
    } else if (user.value.length > 0) {
      blanco();
    } else {
      azul();
    }
  }, 500);
});
////////////////////////////

/////-INICIO DE SESION-/////
function iniciarSesion() {
  if (validarUsuario() && pass.value === "") {
    setTimeout(rojo, 500);
    setTimeout(verde, 2000);
  } else if (user.value.length > 0 && !validarUsuario() && pass.value === "") {
    setTimeout(rojo, 500);
    setTimeout(blanco, 2000);
  } else if (user.value === "" || pass.value === "") {
    setTimeout(rojo, 500);
    setTimeout(azul, 2000);
  } else {
    const usuarioEncontrado = cuentas.find(
      (usuario) =>
        usuario.usuario === user.value && usuario.clave === pass.value
    );
    if (usuarioEncontrado) {
      window.location.href = "../html/ingreso.html";
    } else {
      setTimeout(rojo, 500);
      user.value = "";
      pass.value = "";
      setTimeout(azul, 2000);
    }
  }
}
////////////////////////////

//////-EVENTO CLICK-///////
boton.addEventListener("click", (event) => {
  event.preventDefault();
  iniciarSesion();
});
////////////////////////////

import { azul, verde, blanco, boton } from "./colores.js";
import { cuentas } from "./usuarios.js";
import { fotoPredeterminada, foto } from "./funciones.js";
import { iniciarSesion } from "./inicioSesion.js";
import { togglePasswordVisibility } from "./mostrarOcultar.js";
import { mostrarIcono, ocultarIcono } from "./mostrarOcultar.js";

//-INPUTS-//
export const user = document.querySelector("[data-usuario]");
export const pass = document.querySelector("[data-clave]");
////////////

//-VALIDACION DE USUARIO-//
export const validarUsuario = () => {
  return cuentas.find((cuenta) => cuenta.usuario === user.value.toLowerCase()); //valor .some()
};
///////////////////////////

//-VALIDACION REGEX-//
const regex = /^(?=(?:[^A-Z]*[A-Z]){1})(?=(?:\D*\d){2})[A-Za-z\d]{1,10}$/;
//////////////////////

//-FUNCION DE VALIDACION-//
function validUser() {
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
}

///////-EVENTO INPUT-///////
user.addEventListener("input", () => {
  user.value = user.value.replace(/\s/g, "");
  validUser();
});

pass.addEventListener("input", () => {
  pass.value = pass.value.replace(/\s/g, "");
})
////////////////////////////

//-EVENTO MOSTRAR/OCULTAR-//
const mostrarOcultar = document.querySelector(".icono_mostrar_ocultar");

mostrarOcultar.addEventListener("click", () => {
  togglePasswordVisibility();
})
////////////////////////////

//////-EVENTO CLICK-///////
boton.addEventListener("click", (event) => {
  event.preventDefault();
  iniciarSesion();
  if (pass.type = "password") {
    mostrarIcono.style.display = "block";
    ocultarIcono.style.display = "none";
  }
});
////////////////////////////
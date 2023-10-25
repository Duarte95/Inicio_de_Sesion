import { azul, verde, blanco, rojo } from "./colores.js";
import { boton } from "./colores.js";
import { cuentas } from "./usuarios.js";

const user = document.querySelector("[data-usuario]");
const pass = document.querySelector("[data-clave]");
const foto = document.querySelector("[data-foto]");
const msg = document.querySelector("[data-span]");
const contMsg = document.querySelector("[data-msg]");

//-LIMPIAR CAMPOS-//
function limpiar() {
  user.value = "";
  pass.value = "";
}
////////////////////

//-FUNCIONES PARA MENSAJE-//
function msgError(error) {
  msg.innerHTML = error;
}
function msgVisible(visible) {
  contMsg.style.display = visible;
}
////////////////////////////

//-VALIDACION REGEX-//
const regex = /^(?=(?:[^A-Z]*[A-Z]){1})(?=(?:\D*\d){2})[A-Za-z\d]{1,10}$/;
//////////////////////

//-FOTO PREDETERMINADA-//
const fotoPredeterminada = () => {
  foto.style.backgroundImage = "url(../../assets/usuario.png)";
  foto.style.filter = "invert()";
  foto.style.backgroundPosition = "0px 12px";
};
/////////////////////////

//-VALIDACION DE USUARIO-//
const validarUsuario = () => {
  return cuentas.find((cuenta) => cuenta.usuario === user.value); //valor .some()
};
///////////////////////////

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

/////-INICIO DE SESION-/////
function iniciarSesion() {
  if (validarUsuario() && pass.value === "") {
    msgVisible("block");
    msgError("Debe ingresar una contraseña.");
    setTimeout(rojo, 500);
    setTimeout(() => {
      msgVisible("none");
      verde();
    }, 3000);
  } else if (user.value.length > 0 && !validarUsuario()) {
    msgVisible("block");
    msgError("Usuario no registrado.");
    setTimeout(rojo, 500);
    setTimeout(() => {
      msgVisible("none");
      blanco();
    }, 3000);
  } else if (user.value === "" || pass.value === "") {
    msgVisible("block");
    msgError("Los campos no deben estar vacios");
    setTimeout(rojo, 500);
    setTimeout(() => {
      msgVisible("none");
      azul();
    }, 3000);
  } else {
    const usuarioEncontrado = cuentas.find(
      (usuario) => (usuario.usuario === usuario.clave) === pass.value
    );
    if (usuarioEncontrado) {
      window.location.href = "../html/ingreso.html";
    } else {
      limpiar();
      msgVisible("block");
      msgError("Contraseña incorrecta.");
      fotoPredeterminada();
      setTimeout(rojo, 500);
      setTimeout(() => {
        msgVisible("none");
        azul();
      }, 3000);
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

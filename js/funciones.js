import { user, pass } from "./validaciones.js";

const msg = document.querySelector("[data-span]");
const contMsg = document.querySelector("[data-msg]");
export const foto = document.querySelector("[data-foto]");

//-FOTO PREDETERMINADA-//
export const fotoPredeterminada = () => {
  foto.style.backgroundImage = "url(../assets/default/usuario.png)";
  foto.style.filter = "invert()";
  foto.style.backgroundPosition = "0px 12px";
};
/////////////////////////

//-LIMPIAR CAMPOS-//
export function limpiar() {
  user.value = "";
  pass.value = "";
}
////////////////////

//-FUNCIONES PARA MENSAJE-//
export function msgError(error) {
  msg.innerHTML = error;
}
export function msgVisible(visible) {
  contMsg.style.display = visible;
}
////////////////////////////

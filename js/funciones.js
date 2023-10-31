import { user, pass } from "./validaciones.js";
import { rojo, azul } from "./colores.js";

export const foto = document.querySelector("[data-foto]");

//-FOTO PREDETERMINADA-//
export const fotoPredeterminada = () => {
  foto.style.backgroundImage = "url(assets/default/usuario.png)";
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
export function msgError(error, color = azul) {

  const msg = document.querySelector("[data-span]");
  const contMsg = document.querySelector("[data-msg]");

  setTimeout(() => {
    rojo();
    msg.innerHTML = error;
    contMsg.style.display = "block";
  }
    , 500);

  setTimeout(() => {
    if (typeof color === 'function') {
      color();
    }
    msg.innerHTML = "";
    contMsg.style.display = "none";
  }, 3000);
}
////////////////////////////
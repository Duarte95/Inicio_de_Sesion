//-BOTON-//
export const boton = document.querySelector("[data-boton]");

//-FOTO-//
const fotoCont = document.querySelector(".contenedor_foto");

//-DEGRADADOS-//
const contColor = document.querySelector(".contenido_color");
const back = document.querySelectorAll(".back");
const back2 = document.querySelector(".back2");

//-SOMBRAS-//
const backGndColor = document.querySelector(".background_color");
const backUsuario = document.querySelector(".back_usuario");
const backClave = document.querySelector(".back_clave");
const backBoton = document.querySelector(".back_boton");

////FUNCION-//
function skins(color1, color2, btnStyle) {
  //-BOTON-//
  boton.style.background = `linear-gradient(0deg, ${color1}, ${color2}`;
  boton.style.color = btnStyle;

  //-FOTO-//
  fotoCont.style.border = `3px solid ${color2}`;
  fotoCont.style.boxShadow = `0px 0px 10px 2px ${color1}`;

  //-DEGRADADO-//
  contColor.style.background =
    `linear-gradient(0deg, ${color1}, ${color2})`;
  back.forEach((element) => {
    element.style.background =
      `linear-gradient(0deg, ${color1}, ${color2})`;
  });
  back2.style.background =
    `linear-gradient(0deg, ${color1}, ${color2})`;

  //-SOMBRA-//
  backGndColor.style.boxShadow = `0px 0px 15px 2px ${color1}`;
  backUsuario.style.boxShadow = `0px 0px 10px 2px ${color1}`;
  backClave.style.boxShadow = `0px 0px 10px 2px ${color1}`;
  backBoton.style.boxShadow = `0px 0px 10px 2px ${color1}`;
}

//-AZUL: Significa que no hay datos ingresados, es la pantalla inicial
export function azul() {
  //-BOTON-// //-FOTO-// //-DEGRADADO-// //-SOMBRA-//
  skins("var(--gradient-start)", "var(--gradient-end)", "white");
}

//-BLANCO: Significa que el usuario ingresado, no se encuentra registrado
export function blanco() {
  //-BOTON-// //-FOTO-// //-DEGRADADO-// //-SOMBRA-//
  skins("white", "white", "black");
}

//-VERDE: Significa que el usuario ingresado es valido y se encuentra registrado.
export function verde() {
  //-BOTON-// //-FOTO-// //-DEGRADADO-// //-SOMBRA-//
  skins("var(--gradient2-start)", "var(--gradient2-end)", "black");
}

//-ROJO: Significa errores, como campos vacios, o credenciales erradas
export function rojo() {
  //-BOTON-// //-FOTO-// //-DEGRADADO-// //-SOMBRA-//
  skins("var(--gradient3-start)", "var(--gradient3-end)", "white");
}
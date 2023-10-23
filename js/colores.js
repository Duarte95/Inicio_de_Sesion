//-BOTON-//
export const boton = document.querySelector("[data-boton]");
//-FOTO-//
const foto = document.querySelector(".contenedor_foto");
//-DEGRADADOS-//
const contColor = document.querySelector(".contenido_color");
const back = document.querySelectorAll(".back");
const back2 = document.querySelector(".back2");

//-SOMBRAS-//
const backGndColor = document.querySelector(".background_color");
const backUsuario = document.querySelector(".back_usuario");
const backClave = document.querySelector(".back_clave");
const backBoton = document.querySelector(".back_boton");

//-AZUL: Significa que no hay datos ingresados, es la pantalla inicial
export function azul() {
  //-BOTON-//
  boton.style.background =
    "linear-gradient(0deg, var(--gradient-start), var(--gradient-end))";
  boton.style.color = "white";

  //-FOTO-//
  foto.style.border = "3px solid var(--gradient-end)";
  foto.style.boxShadow = "0 0px 10px 2px var(--gradient-start)";

  //-DEGRADADO-//
  contColor.style.background =
    "linear-gradient(0deg, var(--gradient-start), var(--gradient-end))";
  back.forEach((element) => {
    element.style.background =
      "linear-gradient(0deg, var(--gradient-start), var(--gradient-end))";
  });
  back2.style.background =
    "linear-gradient(0deg, var(--gradient-start), var(--gradient-end))";

  //-SOMBRA-//
  backGndColor.style.boxShadow = "0 0px 15px 2px var(--gradient-start)";
  backUsuario.style.boxShadow = "0 0px 10px 2px var(--gradient-start)";
  backClave.style.boxShadow = "0 0px 10px 2px var(--gradient-start)";
  backBoton.style.boxShadow = "0 0px 10px 2px var(--gradient-start)";
}

//-BLANCO: Significa que el usuario ingresado, no se encuentra registrado
export function blanco() {
  //-BOTON-//
  boton.style.background = "white";
  boton.style.color = "black";

  //-FOTO-//
  foto.style.border = "3px solid white";
  foto.style.boxShadow = "0 0px 10px 2px white";

  //-DEGRADADO-//
  contColor.style.background = "white";
  back.forEach((element) => {
    element.style.background = "white";
  });
  back2.style.background = "white";

  //-SOMBRA-//
  backGndColor.style.boxShadow = "0 0px 15px 2px white";
  backUsuario.style.boxShadow = "0 0px 10px 2px white";
  backClave.style.boxShadow = "0 0px 10px 2px white";
  backBoton.style.boxShadow = "0 0px 10px 2px white";
}

//-VERDE: Significa que el usuario ingresado es valido y se encuentra registrado.
export function verde() {
  //-BOTON-//
  boton.style.background =
    "linear-gradient(0deg, var(--gradient2-start), var(--gradient2-end))";
  boton.style.color = "black";

  //-FOTO-//
  foto.style.border = "3px solid var(--gradient2-end)";
  foto.style.boxShadow = "0 0px 10px 2px var(--gradient2-start)";

  //-DEGRADADO-//
  contColor.style.background =
    "linear-gradient(0deg, var(--gradient2-end), var(--gradient2-start))";
  back.forEach((element) => {
    element.style.background =
      "linear-gradient(0deg, var(--gradient2-start), var(--gradient2-end)";
  });
  back2.style.background =
    "linear-gradient(0deg, var(--gradient2-start), var(--gradient2-end)";

  //-SOMBRA-//
  backGndColor.style.boxShadow = "0 0px 15px 2px var(--gradient2-start)";
  backUsuario.style.boxShadow = "0 0px 10px 2px var(--gradient2-start)";
  backClave.style.boxShadow = "0 0px 10px 2px var(--gradient2-start)";
  backBoton.style.boxShadow = "0 0px 10px 2px var(--gradient2-start)";
}

//-ROJO: Significa errores, como campos vacios, o credenciales erradas
export function rojo() {
  //-BOTON-//
  boton.style.background =
    "linear-gradient(0deg, var(--gradient3-start), var(--gradient3-end))";
  boton.style.color = "white";

  //-FOTO-//
  foto.style.border = "3px solid var(--gradient3-end)";
  foto.style.boxShadow = "0 0px 10px 2px var(--gradient3-start)";

  //-DEGRADADO-//
  contColor.style.background =
    "linear-gradient(0deg, var(--gradient3-end), var(--gradient3-start))";
  back.forEach((element) => {
    element.style.background =
      "linear-gradient(0deg, var(--gradient3-start), var(--gradient3-end))";
  });
  back2.style.background =
    "linear-gradient(0deg, var(--gradient3-start), var(--gradient3-end))";

  //-SOMBRA-//
  backGndColor.style.boxShadow = "0 0px 15px 2px var(--gradient3-start)";
  backUsuario.style.boxShadow = "0 0px 10px 2px var(--gradient3-start)";
  backClave.style.boxShadow = "0 0px 10px 2px var(--gradient3-start)";
  backBoton.style.boxShadow = "0 0px 10px 2px var(--gradient3-start)";
}

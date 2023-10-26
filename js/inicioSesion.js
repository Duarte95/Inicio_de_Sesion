import { validarUsuario, user, pass } from "./validaciones.js";
import { azul, verde, blanco, rojo } from "./colores.js";
import { cuentas } from "./usuarios.js";
import { limpiar, msgError, msgVisible, fotoPredeterminada } from "./funciones.js";

/////-INICIO DE SESION-/////
export function iniciarSesion() {
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
    } else if (user.value === "" && pass.value.length > 0) {
        limpiar();
        msgVisible("block");
        msgError("Debes ingresar un Usuario.");
        setTimeout(rojo, 500);
        setTimeout(() => {
            msgVisible("none");
            azul();
        }, 3000);
    } else if (user.value === "" && pass.value === "") {
        msgVisible("block");
        msgError("Los campos no deben estar vacios.");
        setTimeout(rojo, 500);
        setTimeout(() => {
            msgVisible("none");
            azul();
        }, 3000);
    } else {
        const usuarioEncontrado = cuentas.find(
            (usuario) =>
                usuario.usuario === user.value && usuario.clave === pass.value
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

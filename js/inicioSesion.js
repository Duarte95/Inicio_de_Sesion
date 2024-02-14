import { validarUsuario, user, pass } from "./validaciones.js";
import { verde } from "./colores.js";
import { cuentas } from "./usuarios.js";
import { limpiar, msgError, fotoPredeterminada } from "./funciones.js";

/////-INICIO DE SESION-/////
export function iniciarSesion() {
    if (validarUsuario() && pass.value === "") {
        msgError("Debe ingresar una contraseña.", verde);

    } else if (user.value.length > 0 && !validarUsuario()) {
        msgError("Usuario no registrado.");
        setTimeout(limpiar, 500);

    } else if (user.value === "" && pass.value.length > 0) {
        msgError("Debes ingresar un Usuario.");
        setTimeout(limpiar, 500);

    } else if (user.value === "" && pass.value === "") {
        msgError("Los campos no deben estar vacios.");

    } else {
        const usuarioEncontrado = cuentas.find(
            (usuario) =>
                usuario.usuario === user.value.toLowerCase() && usuario.clave === pass.value
        );
        if (usuarioEncontrado) {
            window.location.href = "html/ingreso.html";
        } else {
            limpiar();
            fotoPredeterminada();
            msgError("Contraseña incorrecta.");
        }
    }
}
////////////////////////////
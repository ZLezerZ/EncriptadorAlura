
/*Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"*/
var contenedorResultado = document.querySelector(".contenedor-resultado ");
var mensajeInput = document.getElementById("mensaje");
var mensajeOutput = "";
var letra = "";

function encriptar() {
    mensajeOutput = "";
    for (i = 0; i < mensajeInput.value.length; i++) {
        letra = mensajeInput.value.substring(i, i + 1);
        switch (letra) {
            case "a":
                mensajeOutput += "ai";
                break;
            case "e":
                mensajeOutput += "enter";
                break;
            case "i":
                mensajeOutput += "imes";
                break;
            case "o":
                mensajeOutput += "ober";
                break;
            case "u":
                mensajeOutput += "ufat";
                break;
            default:
                mensajeOutput += letra;
        }
    }
    if (mensajeOutput == "") {
        mensajeError();
    }
    return mensajeOutput;
}


function desencriptar() {
    //Agregar validación para que no llegue mensaje vacío
    mensajeOutput = "";
    var cadenaAuxiliar = "";
    var cont1 = 0;
    var cont2 = 0;
    for (i = 0; i < mensajeInput.value.length; i++) {
        letra = mensajeInput.value.substring(i, i + 1);
        cadenaAuxiliar += letra;
        switch (cadenaAuxiliar) {
            case "ai":
                mensajeOutput += "a";
                cadenaAuxiliar = "";
                cont1 = cont1 + 2;
                break;
            case "enter":
                mensajeOutput += "e";
                cadenaAuxiliar = "";
                cont1 = cont1 + 2;
                break;
            case "imes":
                mensajeOutput += "i";
                cadenaAuxiliar = "";
                cont1 = cont1 + 2;
                break;
            case "ober":
                mensajeOutput += "o";
                cadenaAuxiliar = "";
                cont1 = cont1 + 2;
                break;
            case "ufat":
                mensajeOutput += "u";
                cadenaAuxiliar = "";
                cont1 = cont1 + 2;
                break;
            default:
                if (cadenaAuxiliar != "a" && cadenaAuxiliar != "e" && cadenaAuxiliar != "i" && cadenaAuxiliar != "o" && cadenaAuxiliar != "u" && cadenaAuxiliar.length < 2) {
                    mensajeOutput += cadenaAuxiliar;
                    cadenaAuxiliar = "";
                }
                if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
                    cont2++;
                }
                break;
        }
    }
    if (cont1 != cont2 || cont1 == 0 || mensajeOutput == "") {
        mensajeError();
    }
    return mensajeOutput;
}

function mensajeError() {
    //Se cambia imagen del dragón, título y sombra del contenedor resultado.
    mensajeOutput = "¡Ups! No es posible desencriptar este mensaje. Intenta con otro.";
    var imagenDragon = document.getElementById("imagenDragon");
    imagenDragon.src="Imagenes/dragonError.png";

    var titulo = document.querySelector(".contenedor-resultado p");
    titulo.textContent = "¡Error!";
    titulo.style.color="#ce3803";
    contenedorResultado.style.boxShadow = "7px 10px 30px -10px #ce3803";
}

function insertarResultado(encriptado) {
    //Se cambia imagen del dragón
    var imagenDragon = document.getElementById("imagenDragon");
    imagenDragon.src="Imagenes/dragonEncriptado.png";
    //Se agrega sombra de color al contenedor del resultado.
    contenedorResultado.style.boxShadow = "7px 10px 30px -10px #0373ba";
    //Se verifica si el mensaje ingresado es para encriptar o desencriptar a través de un booleano.
    var mensajeResultado = document.querySelector(".resultado");
    var resultado = "";
    var titulo = document.querySelector(".contenedor-resultado p");
    //cambia color a título
    titulo.style.color="#0373ba";
    if (encriptado) {
        titulo.textContent = "¡Mensaje encriptado!";
        resultado = encriptar();
    } else {
        titulo.textContent = "¡Mensaje desencriptado!";
        resultado = desencriptar();
    }
    //Se muestra el mensaje encriptado/desencriptado y se agrega clase con propiedades de estilo.
    mensajeResultado.textContent = resultado;
    mensajeResultado.classList.add("resultadoEncriptado");

    //Se muestra el botón de copiar.
    var copiar = document.querySelector(".contenedor-resultado button")
    copiar.style.display = "block";
}

function copiar() {
    var boton = document.querySelector(".contenedor-resultado button");
    var mensajeResultado = document.querySelector(".resultado");
    navigator.clipboard.writeText(mensajeResultado.textContent);
    boton.textContent = "¡Copiado!";
    setTimeout(function () {
        boton.textContent = "Copiar";
    }, 1000);
}
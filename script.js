
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
var mensajeInput = document.getElementById("mensaje");
var mensajeOutput = "";
var letra = "";

function encriptar() {
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
    return mensajeOutput;
}

// function desencriptar(){
//     for(i = 0; i < mensajeInput.value.length; i++){
//         letra = mensajeInput.value.substring(i, i + 1);

//         switch (letra){
//             case "ai":
//         }
//     }
// }

function insertarResultadoEncriptado(encriptar) {
    //Se verifica si el mensaje ingresado es para encriptar o desencriptar a través de un booleano.
    var mensajeResultado = document.querySelector(".resultado");
    var resultado = "";
    if (encriptar) {
        resultado = encriptar();
    } else {
        resultado = desencriptar();
    }
    //Se muestra el mensaje encriptado/desencriptado y se agrega clase con propiedades de estilo.
    mensajeResultado.textContent = resultado;
    mensajeResultado.classList.add("resultadoEncriptado");

    //Se quita la imágen del dragon inicial.
    var imagenDragon1 = document.getElementById("dragonSinMensaje");
    imagenDragon1.style.display = "none"

    //Se hace visible la imágen del dragon con mensaje.
    var imagenDragon2 = document.getElementById("dragonConMensaje");
    imagenDragon2.style.display = "block"

    //Se modifica el mensaje "No hay mensaje" por "¡Mensaje encriptado!
    var titulo = document.querySelector(".contenedor-resultado p");
    titulo.textContent = "¡Mensaje encriptado!";

    //Se muestra el botón de copiar.
    var copiar = document.querySelector(".contenedor-resultado button")
    copiar.style.display = "block";
}
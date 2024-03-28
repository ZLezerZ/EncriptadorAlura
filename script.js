
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
var copiado = document.querySelector(".contenedor-resultado button")
var titulo = document.querySelector(".contenedor-resultado p");
var condiciones = document.getElementById("condiciones");
var mensajeResultado = document.querySelector(".resultado");
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
    if(validarCaracteres() === false){
        mensajeError(true);
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
                break;
        }
        if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
            cont2++;
        }
        //console.log("LETRA es: " + letra + " CADENA AUXILIAR: " + cadenaAuxiliar + " CONTADOR 1: " + cont1 + " CONTADOR 2: " + cont2)
    }
    if (cont1 != cont2 || cont1 == 0 || validarCaracteres() === false) {
        mensajeError(false);
    }
    return mensajeOutput;
}

function validarCaracteres() {
    var patron = /^[a-z0-9\s]*$/;
    //Si retorna null quiere decir que encontró caracteres especiales, sino, retorna la cadena del mensaje input
    if (mensajeInput.value.match(patron) === null) {
        condiciones.classList.add("condicionesError");
        setTimeout(function () {
            condiciones.classList.remove("condicionesError");
        }, 2000);
        return false;
    }
    else {
        return true;
    }
}

function mensajeError(errorEncriptar) {
    //Se cambia imagen del dragón, título y sombra del contenedor resultado.
    if (errorEncriptar) {
        mensajeOutput = "¡Ups! No es posible encriptar este mensaje. <br><br>Intenta con otro.";
    }else{
    mensajeOutput = `¡Ups! No es posible desencriptar este mensaje. <br><br>Intenta con otro.`;}
    var imagenDragon = document.getElementById("imagenDragon");
    imagenDragon.src = "Imagenes/dragonError.png";

    var titulo = document.querySelector(".contenedor-resultado p");
    titulo.textContent = "¡Error!";
    titulo.style.color = "#ce3803";
    copiado.style.display = "none";
    contenedorResultado.style.boxShadow = "7px 10px 15px -10px #ce3803";
}

function insertarResultado(encriptado) {
    //Se verifica si el mensaje ingresado es para encriptar o desencriptar a través de un booleano en el html.
    var resultado = "";
    var imagenDragon = document.getElementById("imagenDragon");
    if (mensajeInput.value != "") {
        //Se muestra el botón de copiar.
        copiado.style.display = "block";
        //cambia color a título
        titulo.style.color = "#0373ba";
        //Se cambia imagen del dragón
        imagenDragon.src = "Imagenes/dragonEncriptado.png";
        //Se agrega sombra de color al contenedor del resultado.
        contenedorResultado.style.boxShadow = "7px 10px 15px -10px #0373ba";
        if (encriptado) {
            titulo.textContent = "¡Mensaje encriptado!";
            resultado = encriptar();
        } else {
            titulo.textContent = "¡Mensaje desencriptado!";
            resultado = desencriptar();
        }
        //Se muestra el mensaje encriptado/desencriptado y se agrega clase con propiedades de estilo.
        mensajeResultado.innerHTML = resultado;
        mensajeResultado.classList.add("resultadoEncriptado");
    }
}
function revertirMensajes() {
    if (mensajeInput.value === "") {
        imagenDragon.src = "Imagenes/dragonBuscando.png";
        titulo.textContent = "Ningún mensaje fue encontrado";
        titulo.style.color = "black";
        mensajeResultado.textContent = "Ingrese el texto que desees encriptar o desencriptar.";
        contenedorResultado.style.boxShadow = "7px 10px 15px -10px #000000";
        copiado.style.display = "none";
    }
}

function copiar() {
    navigator.clipboard.writeText(mensajeResultado.textContent);
    titulo.textContent = "¡Mensaje copiado!";
    titulo.style.color = "#257043";
    imagenDragon.src = "Imagenes/dragonCopiado.png";
    contenedorResultado.style.boxShadow = "7px 10px 15px -10px #257043";
    mensajeInput.value = "";
    setTimeout(function () {
        imagenDragon.src = "Imagenes/dragonEncriptado.png";
        titulo.textContent = "¡Mensaje encriptado!";
        titulo.style.color = "#0373ba";
        contenedorResultado.style.boxShadow = "7px 10px 15px -10px #0373ba";
    }, 1000);
}
//Función para que al presionar encriptar o desencriptar se desplace la pantalla hacia el resultado.
function desplazarAlResultado() {
    var resultado = document.querySelector(".contenedor-resultado");
    resultado.scrollIntoView({ behavior: "smooth", block: "center" });
}

function desplazarAlTextarea() {
    mensajeInput.scrollIntoView({ behavior: "smooth", block: "center" });
}
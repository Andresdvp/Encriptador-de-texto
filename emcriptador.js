let resultado = document.getElementById("text-resultado");



//Aqui empieza la funcion para encriptar
function encriptar() {
  let textArea = recuperarTexto();
  resultado.textContent = encriptarTexto(textArea);

}

//Aqui empieza la funcion para desencriptar 1

function desencriptar() {
  let textArea = recuperarTexto();
  resultado.textContent = desencriptarTexto(textArea);

}
//recupera el texto
function recuperarTexto() {
  let mensaje = document.getElementById("texto");
  return mensaje.value;

}

//emcripta el texto 
function encriptarTexto(mensaje) {

  let texto = mensaje;
  let textoFinal = " ";

  for (let i = 0; i < texto.length; i++) {

    if (texto[i] == "a") {
      textoFinal = textoFinal + "ai";
    }
    else if(texto[i] == "e"){
      textoFinal = textoFinal + "enter";

    }
    else if (texto[i] == "i") {
      textoFinal = textoFinal + "imes";
      
    }
    else if (texto[i] == "o") {
      textoFinal = textoFinal + "ober";
      
    }
    else if (texto[i] == "u") {
      textoFinal = textoFinal + "ufat";
    }

    else {
      textoFinal = textoFinal + texto[i];
    }

  }



  return textoFinal;
}

//desemcripta el texto 
function desencriptarTexto(mensaje) {

  let texto = mensaje;
  let textoFinal = " ";

  for (let i = 0; i < texto.length; i++) {

    if (texto[i] == "a") {
      textoFinal = textoFinal + "a";
      i=i+1;
    }
    else if(texto[i] == "e"){
      textoFinal = textoFinal + "e";
      i=i+4;

    }
    else if (texto[i] == "i") {
      textoFinal = textoFinal + "i";
      i=i+3;

    }
    else if (texto[i] == "o") {
      textoFinal = textoFinal + "o";
      i=i+3;

    }
    else if (texto[i] == "u") {
      textoFinal = textoFinal + "u";
      i=i+3;

    }

    else {
      textoFinal = textoFinal + texto[i];
    }

  }



  return textoFinal;
}
// boton copiar
function copiar() {
  var textoCopiar = document.getElementById("text-resultado").textContent; // Obtiene el texto a copiar
  navigator.clipboard.writeText(textoCopiar);
}

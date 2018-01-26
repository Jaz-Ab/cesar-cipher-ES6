$(document).ready(begin);

function begin() {
  //  Se le muestra al usuario un menu de opciones para Cifrar y Descifrar
  let validation;
  let inputPhrase = document.getElementById('input-user');
  let optionCipher = document.getElementById('cipher');
  let optionDesCipher = document.getElementById('des-cipher');
  let containerResults = document.getElementById('results');
  let originalText = document.getElementById('original-text');
  let resultText = document.getElementById('result-text');

  inputPhrase.addEventListener('click', clean);
  optionCipher.addEventListener('click', cipher);
  optionDesCipher.addEventListener('click', deCipher);

  function clean() {
    originalText.value = '';
    resultText.value = '';
  }

  function showPhrase(result) {
    phrase = inputPhrase.value;
    originalText.value = phrase;
    resultText.value = result;
  }
  // validamos que ingrese la opción correcta, si es correcta evaluamos la frase que no contenga números ni espacios
  function validationPhrase() {
    let phrase = inputPhrase.value;
    console.log(inputPhrase.value);
    for (var i = 0; i < phrase.length; i++) {
      if (phrase.charCodeAt(i) === ' '.charCodeAt || isNaN(phrase[i]) === false) {
        validation = false;
        alert('No ingrese n\u00FAmeros ni espacios en blanco');
      } else {
        validation = true;
      }
    }
  };

  //  Función para Cifrar
  function cipher(phrase) {
    phrase = inputPhrase.value;
    validationPhrase();
    //  Creamos el string vacio donde se almacenara los nuevos valores.
    var strLet = '';
    //  Recorremos la frase ingresada,Si esta en el rango de MAYUSCULAS.
    for (i = 0; i < phrase.length; i++) {
      //  Obtenemos el codigo ASCII de cada letra
      let asc = phrase.charCodeAt(i);
      //  Rango para solo las mayúsculas
      if (asc >= 65 && asc <= 90) {
      // Aplicamos la formula para obtener la nueva posición ASCII.
        let newAsc = (asc - 65 + 33) % 26 + 65;
        //  Desciframos  ese nuevo código a letra.
        let newLet = String.fromCharCode(newAsc);
        //  Almacenamos letra por letra dentro del nuevo String.
        strLet += newLet;
      } else if (asc >= 97 && asc <= 122) {
        //  en caso contrario si es MINÚSCULA.
        //  en este caso la formula cambia porque el rango es otro.
        let newAscm = (asc - 97 + 33) % 26 + 97;
        //  Desciframos  ese nuevo codigo a letra.
        let newLetm = String.fromCharCode(newAscm);
        //  Almacenamos letra por letra dentro del nuevo String.
        strLet += newLetm;
      }
    }
    //  Retornamos el nuevo string con las letras enncriptadas.
    console.log(strLet);
    showPhrase(strLet, 'Cifrado');
    inputPhrase.value = '';
  };

  //  Función para Descifrar

  function deCipher(phrase) {
    phrase = inputPhrase.value;
    validationPhrase();
    //  Creamos el string vacio donde se almacenara los nuevos valores.
    let strLet = '';
    //  Recorremosla la frase ingresada,Si esta en el rango de MAYÚSCULA.
    for (i = 0; i < phrase.length; i++) {
      //  Obtenemos el código ASCII de cada letra
      let asc = phrase.charCodeAt(i);
      //  Rango para solo las mayúsculas
      if (asc >= 65 && asc <= 90) {
        //  Aplicamos la formula para obtener la nueva posición ASCII.
        let newAsc = (asc + 65 - 33) % 26 + 65;
        //  Desciframos  ese nuevo código a letra.
        let newLet = String.fromCharCode(newAsc);
        //  Almacenamos letra por letra dentro del nuevo String.
        strLet += newLet;
      } else if (asc >= 97 && asc <= 122) {
        //  en caso contrario si es MINÚSCULA.
        //  en este caso la formula cambia porque el rango es otro.
        let newAscm = (asc + 97 + 33) % 26 + 97;
        //  Desciframos  ese nuevo codigo a letra.
        let newLetm = String.fromCharCode(newAscm);
        //  Almacenamos letra por letra dentro del nuevo String.
        strLet += newLetm;
      }
    }
    //  Retornamos el nuevo string con las letras enncriptadas.
    console.log(strLet);
    showPhrase(strLet, 'Descifrado');
    inputPhrase.value = '';
  };
}

//Se le muestra al usuario un menu de opciones para Cifrar y Descifrar
var option = prompt("Elija una de las opciones "+"\n" + "1. Cifrar "+"\n" + "2. Decifrar" + "\n" + "3. Salir");
var validation;

//validamos que ingrese la opción correcta, si es correcta evaluamos la frase que no contenga números ni espacios
if (option === "3"){
  validation = false;
  alert("Regrese pronto");

}
else if (option !== "1" && option !== "2"){
  validation = false;
  alert("Solo ingrese opci\u00F3n 1 o 2");
  option = prompt("Elija una de las opciones "+"\n" + "1. Cifrar "+"\n" + "2. Decifrar" + "\n" + "3. Salir");

} else{
  var phrase = prompt("Ingrese su frase por favor");
  validationPhrase();
}

//Una vez validado todo, pasamos a realizar la opción que el usuario haya escogido y lo mostramos por medio de un alert()
if(option === "1" && validation === true){
  alert("Texto Original : " + phrase + "\n" + "Texto Cifrado : " + cipher(phrase));
  option = prompt("Elija una de las opciones "+"\n" + "1. Cifrar "+"\n" + "2. Decifrar" + "\n" + "3. Salir");

} else if(option === "2" && validation === true){
  alert("Texto Original : " + phrase + "\n" + "Texto Descifrado : " + decipher(phrase));
  option = prompt("Elija una de las opciones "+"\n" + "1. Cifrar "+"\n" + "2. Decifrar" + "\n" + "3. Salir");
}

function validationPhrase() {
  for(var i = 0; i < phrase.length; i++) {
    if (phrase.charCodeAt(i) === " ".charCodeAt || isNaN(phrase[i]) === false){
      validation = false;
      alert("No ingrese n\u00FAmeros ni espacios en blanco");
      phrase = prompt("Ingrese su frase por favor");
    } else {
      validation = true;
    }
  }
}

//Función para Cifrar
function cipher(phrase){

  //Creamos el string vacio donde se almacenara los nuevos valores.
  var strLet ="";

  //Recorremos la frase ingresada,Si esta en el rango de MAYUSCULAS.
  for(i = 0; i < phrase.length; i++){

    //Obtenemos el codigo ASCII de cada letra
    var asc = phrase.charCodeAt(i)

    //Rango para solo las mayúsculas
    if(asc >= 65 && asc <= 90){

      // Aplicamos la formula para obtener la nueva posición ASCII.
      var newAsc = (asc - 65 + 33) % 26 + 65;

      //Desciframos  ese nuevo código a letra.
      var newLet = String.fromCharCode(newAsc);

      //Almacenamos letra por letra dentro del nuevo String.
      strLet += newLet;
    }
    //en caso contrario si es MINÚSCULA.
    else if(asc >= 97 && asc <= 122) {

      //en este caso la formula cambia porque el rango es otro.
      var newAscm = (asc - 97 + 33) % 26 +97;

      //Desciframos  ese nuevo codigo a letra.
      var newLetm = String.fromCharCode(newAscm);

      //Almacenamos letra por letra dentro del nuevo String.
      strLet += newLetm;
      }
  }
  //Retornamos el nuevo string con las letras enncriptadas.
  return strLet;
}

//Función para Descifrar

function decipher(phrase){

  //Creamos el string vacio donde se almacenara los nuevos valores.
  var strLet = "";

  //Recorremosla la frase ingresada,Si esta en el rango de MAYÚSCULA.
  for(i = 0; i < phrase.length; i++){

    //Obtenemos el código ASCII de cada letra
    var asc = phrase.charCodeAt(i)

    //Rango para solo las mayúsculas
    if(asc >= 65 && asc <= 90){

      //Aplicamos la formula para obtener la nueva posición ASCII.
      var newAsc = (asc + 65 -33) % 26 + 65;

      //Desciframos  ese nuevo código a letra.
      var newLet= String.fromCharCode(newAsc);

      //Almacenamos letra por letra dentro del nuevo String.
      strLet += newLet;
    }
    //en caso contrario si es MINÚSCULA.
    else if(asc >= 97 && asc <= 122){

      //en este caso la formula cambia porque el rango es otro.
      var newAscm = (asc + 97 + 33) % 26 + 97;

      //Desciframos  ese nuevo codigo a letra.
      var newLetm = String.fromCharCode(newAscm);

      //Almacenamos letra por letra dentro del nuevo String.
      strLet += newLetm;
    }
  }
  //Retornamos el nuevo string con las letras enncriptadas.
  return strLet;
}
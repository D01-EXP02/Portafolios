/*Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function LetrasEncriptar(){
var texto = document.getElementById("input").value.toLowerCase();
var Cifrar = texto.replace(/e/igm,"enter");
var Cifrar = Cifrar.replace(/o/igm,"ober");
var Cifrar = Cifrar.replace(/i/igm,"imes");
var Cifrar = Cifrar.replace(/a/igm,"ai");
var Cifrar = Cifrar.replace(/u/igm,"ufat");

document.getElementById("chicoimg").style.display = "none";
document.getElementById("texto1").style.display = "none";
document.getElementById("texto2").innerHTML = Cifrar;
document.getElementById("copiarTXT").style.display = "show";
document.getElementById("copiarTXT").style.display = "inherit";
}


function Desencriptar(){
var texto = document.getElementById("input").value.toLowerCase();
var Cifrar = texto.replace(/enter/igm,"e");
var Cifrar = Cifrar.replace(/ober/igm,"o");
var Cifrar = Cifrar.replace(/imes/igm,"i");
var Cifrar = Cifrar.replace(/ai/igm,"a");
var Cifrar = Cifrar.replace(/ufat/igm,"u");

document.getElementById("chicoimg").style.display = "none";
document.getElementById("texto1").style.display = "none";
document.getElementById("texto2").innerHTML = Cifrar;
document.getElementById("copiarTXT").style.display = "show";
document.getElementById("copiarTXT").style.display = "inherit";
}

function copiartexto(){
    var texto = document.querySelector("#texto2");
    texto.select();
    document.execCommand("copy");
    alert("¡Texto Copiado!");
}


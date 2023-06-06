var botonencriptar = document.querySelector(".botonencriptar");
var botondesencriptar = document.querySelector(".botondesencriptar");
var muneco = document.querySelector(".contenedormuneco");
var contenedor = document.querySelector(".contenedorparrafo");
var resultado = document.querySelector(".textoresultado");

botondesencriptar.oneclick = encriptar;
botondesencriptar.oneclick = desencriptar;


function encriptar (){
    ocultaradelante();
    var cajatexto = recuperartexto()
    resultado.textContent = encriptartexto(cajatexto);
 }

 function desencriptar (){
    ocultaradelante();
    var cajatexto = recuperartexto()
    resultado.textContent = desencriptartexto(cajatexto);
 }
function recuperartexto (){
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value 
}
function ocultaradelante(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptartexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptartexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});

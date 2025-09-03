// CONSOLE - TERMINAL DO NAVEGADOR
console.log(console);

// WINDOW - JANELA DO NAVEGADOR
window.alert("Sim")
alert("Não")

// DOCUMENT = DOM OU SEU CÓDIGO HTML INTEIRO
console.log(document);
console.log(document.head);
console.log(document.body);

// ACESSAR ELEMENTOS DO BODY

  // PEGA ELEMENTOS PELA TAG
var titulos = document.getElementsByTagName("h1")
console.log(titulos);

  // PEGA ELEMENTOS PELA CLASS
var paragrafos = document.getElementsByClassName("para")
console.log(paragrafos)

  // PEGA ELEMENTOS PELO ID
var especifico = document.getElementById("p3")
console.log(especifico);

//MODIFICANDO PROPRIEDADES DE ALGUM ELEMENTO

  //PEGO POR ID
especifico.style.backgroundColor = "gray"
especifico.style.color = "blue"

  //PEGO POR CLASSE
paragrafos[0].style.backgroundColor = "red"

  //PEGO POR TAG
titulos[2].style.backgroundColor = "blue" 

function cliquei(){
    console.log("Eu falei para você não clicar");
}

function alterar() {
    
    for(var i = 0; i < titulos.length; i++ ){
        titulos[i].style.backgroundColor = "green"
        titulos[i].style.fontSize = "100px"
    }
}

function quemFoi(elemento){
    console.log(elemento)
}






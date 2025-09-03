function troca(elementoQueChamou){
    // console.log(elementoQueChamou);
    var textoNovo = elementoQueChamou.value

    var textoAntigo = document.getElementById("textoTrocar")

    textoAntigo.innerText = textoNovo

    console.log(textoNovo);
}

function trocaAgora(elementola){
    var textoNovo2 = elementola.value

    var textoAntigo2 = document.getElementById("textoTrocarAgora")

    textoAntigo2.innerText = textoNovo2

    console.log(textoNovo2);
}

function viraVerde(elemento){
    elemento.style.color = "green"
    elemento.style.fontSize = "200px"
}

function viraAzul (elemento){
    elemento.style.color = "blue"
    elemento.style.fontSize = "10px"
}
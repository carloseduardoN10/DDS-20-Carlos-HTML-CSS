// CRIAÇÃO DO ARRAY
var array = ["largatixa", 5, "dois", 8.7, true]

// MOSTRA TODO O ARRAY
console.log(array)

// MOSTRA A POSIÇÃO DO ARRAY
console.log(array[1])

//SUBSTITUI UM VALOR
array[2] = "Outro valor"
console.log(array)

//LAÇO DE REPETIÇÃO PARA INTERAGIR COM ARRAY
var times = ["Real Madrid", "Liverpool", "Inter", "Chelsea", "Manchester"]

for (var i = 0; i < 4 < 4; i++) {
    console.log(times[i]);
}

console.log("--------------");
for (var i = 0; i < 4 < 4; i++) {
    console.log(times[i]);
}

for (var index in times) {
    console.log(times[index]);
}

// MANIPULAÇÂO DE ARRAYS
var frutas = ["Maçã","Uva", "Pera"]
console.log(frutas);

    //PUSH - ADICIONA NO FIM DO ARRAY
frutas.push("Laranja")
console.log(frutas);

    // POP - RETIRA O ÚTILMO VALOR, E TE RETORNA
var frutaTirada = frutas.pop()
console.log("Fruta tirada:", frutaTirada);
console.log(frutas);

    //SHIFT - RETIRA O PRIMERO VALOR, E TE RETORNA
var exPrimeiraFruta = frutas.shift()
console.log("EX:", exPrimeiraFruta);

    //UNSHIFT - ADICIONA NO INICIO DO ARRAY
frutas.unshift("Tomarte")
console.log(frutas);




// Mostra uma mensagem no console
console.log("Salve")

//Caixinha de alerta
alert("Testando para ver")

var nome = "Cristiano"
var numero = 7
var pulo = 2.10
var theBest = true

console.log("O nome:"+ nome);
console.log("De número:", numero);
console.log(pulo);
console.log(theBest);

console.log(typeof(pulo))

var nulo = null
var indefinido = undefined

console.log(typeof(nulo))
console.log(typeof(indefinido))

// OPERADORES ARITIMETICOS
// +,-,*,/,%

var a = 10, b = 5

console.log("soma", a + b )
console.log("soma", a - b )
console.log("soma", a * b )
console.log("soma", a / b )
console.log("soma", a % b )

// OPERADORES LÓGICOS
// E , OU , NO
// &&, ||, !

var verdade = true
var mentira = false

console.log(verdade && mentira);
console.log(verdade || mentira);
console.log(verdade && !mentira);
console.log("FIM");


// OPERADORES RELACIONAIS
// >,<, >=, <=, ==, !=, ===, !==

var x = 65, y = 32, z = "65"

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y);
console.log(x != y);

console.log(x === z);
console.log(x !== z);

// Iteragir com o usuário

var time = prompt("Digite seu clube de coração")

console.log("Seu time é o: ", time);

// DESVIOS CONDICIONAIS

// IF = SE
var estarVivo = true


if (estarVivo == true) {
    console.log("Você está vivo");
}
else if (estaVivo == false) {
    console.log("Esta desvivo 💀");
}
else{
    console.log("Você não existe");
}

// SWITCH = ESCOLHA
var camisa = prompt("Digite a cor da sua camisa:")

switch (camisa) {
    case "Azul":
        console.log("Você ganhou um voucher");   
        break
    case "Branco":
        console.log("Ganhou um playstation");
        break
    case "vermelho":
        console.log("Você ganhou uma ferrari");
        break
    default:
        console.log("Camisa inválida");
        break;
}

// LAÇOS DE REPETIÇÃO = LOOPS

//FOR = PARA
for (var i = 0; i < 5; i++){
    console.log("Estoy aquí");
}

//WHILE = ENQUANTO
var c = 1
while (c < 10) {
    console.log("Entrei no loop");
    c++
}

// FUNÇÕES
//SÓ EXECUÇÃO
function teste() {
    console.log("Funcionou sim o teste");
}

console.log(teste);

teste()

//COM PARAMETROS
function teste2(parametro) {
    console.log("O parametro é", parametro);
}

teste2("Arroz")

//COM RETORNO
function calculo(n1, n2) {
    let 
    
}












//COM ARRAY
var alunos = ["Pedro", "Tiago", "Barquinho"]

var media = [7, 8, 4]

console.log("O aluno", alunos[0], "teve média de:", media[2]);

//CRIANDO UM OBJETO
var aluno1 = {
    //chave : "Valor",
    nome : "Pedro",
    media : 7
}

var aluno2 = {
    nome : "Jonas",
    media : 9
}

//ACESSA TODO O OBJETO
console.log(aluno1);

//ACESSA UMA PROPRIEDADE DAQUELE OBJETO
console.log(aluno1.nome);
console.log(aluno2.media);

var curso = {
    nome : "curso",
    turno : "Noturno",
    preco : 10000.00,
    cargaHr : "1200hrs" 
}

console.log("O curso é de ", curso.curso, "e tem a carga horaria de ", curso.cargaHr);

//ACESSANDO UM VALOR PASSANDO UMA CHAVE
console.log("preço: ", curso["preco"])

//CRIANDO UM OBJETO VAZIO
var garrafa = {}

garrafa.cor = "azul"
garrafa.volume = "500ml"
garrafa.marca = "Staney"
garrafa["preco"] = 150

console.log(garrafa);

//PEÇA AO USUARIO, UMA NOVA PROPRIEDADE E UM NOVO VALOR PARA SER ADICIONADO NA GARRAFA
var propriedadeAdc = prompt("Digite uma propriedade para a garrafa: ")
garrafa[propriedadeAdc] = prompt("Digite um valor para propriedade:" )

console.log(garrafa);

//CRIANDO MÉTODO 
var animal1 = {
    nome : "Tom",
    especie : "Gato",
    raca : "Adidas",

    andar : function(){
        console.log("Estou andando, acredite");   
    },
    falar : function(){
        console.log("MIAAAAAAAAU");
    }
}
console.log(animal1);
animal1.andar()
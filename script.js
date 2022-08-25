

// let nomes = ["David", "Denisson", "de" , "Oliveira", "Felix"];

// console.log(nomes[1], nomes[3], nomes[4]);


// let teste = ["False", "True", "False", "True"];

// console.log(nomes.length, teste.length);


// let onibus = {
//     rodas: 8,
//     passageiros: 40,
//     portas: 2
// }

// console.log(onibus.rodas, onibus.passageiros, onibus.portas);

// onibus.janelas = 20;

// delete onibus.rodas;

// console.log(onibus);

// let ArrayTeste1 = ["Teste", "Teste2", "Teste3", "Teste4", "Teste5", "Teste6"];
// let ArrayTeste2 = ["Teste1", "Teste2", "Teste3"];

// function VerificaArray(argument){
//     if(ArrayTeste1.length < 5){
//         console.log("Menor que 5");
//     }
//     else if(ArrayTeste1.length >= 5){
//         console.log("Maior ou igual a 5");
//     }
// }

// console.log(VerificaArray(ArrayTeste1));


// let frutas = ["Maçã", "Banana", "Melão", "Melancia", "Laranja"];

// for(let i= 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }


// const frase  = "Ser um programdor sei la oq só é teste";

// const arrFrase = frase.split(" ");

// for(let i = 0; i < arrFrase.length; i++){
//     console.log(arrFrase[i]);
// }


let calculadora = {
    somar: function(obj1, obj2){
        return obj1 + obj2;
    },
    dividir: function(obj1, obj2){
        return obj1 / obj2;
    },
    multiplicar: function(obj1, obj2){
        return obj1 * obj2;
    },
    subtrair: function(obj1, obj2){
        return obj1 - obj2;
    }   

}

console.log(calculadora.somar(1, 2));

console.log(calculadora.dividir(10, 2));
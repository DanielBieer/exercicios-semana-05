//Exercicio 3
const prompt = require("prompt-sync")({sigint: true});
const numeros = []

for (let i = 0; i < 5; i++ ){
    const numero = parseInt(prompt(`Escolha seu ${i + 1} número`));
    numeros.push(numero);
}

for (let i = 0; i < 5; i++){
    console.log(`O seu ${i + 1} número é ${numeros[i]}`);
}

//Exercicio 4
let soma = numeros.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual
}, 0)

console.log("A soma total é: " + soma);

//Exercicio 5
const numerosOrdenados = [...numeros]

numerosOrdenados.sort((num1, num2) => num1 - num2);

console.log(`Os números em ordem crescente são: ${numerosOrdenados.join(" ")}`);

//Exercicio 6
let pares = numeros.filter((numeroAtual) => {
    if (numeroAtual % 2 == 0){
    return true
    }
})

console.log("O array de números pares é: ",  pares)

//Exercicio 7
const quadrados = numeros.map(numeroAtual => numeroAtual ** 2)

console.log(`O quadrado dos números do primeiro array é: ${quadrados}`);
//Fim

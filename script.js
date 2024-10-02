
// Verificação de maioridade - Exercicio 1

let idade = prompt("Digite sua idade:");
idade = (idade);
if (idade >= 18) {
    console.log("Você é de maior");
} else {
    console.log("Você é de menor");
}

// Verificação par ou impar - Exercicio 2
function parouImpar () {
    let numero = prompt("Digite um número:");
    numero = (numero);
    if (numero % 2 == 0) {
        console.log("é par");
    } else {
    console.log("é impar");
    }
}

parouImpar();

// Verificação se o número é positivo, negativo ou zero - Exercicio 3

let numero1 = prompt("Digite um numero de novo:");
numero1 = (numero1);
if (numero1 == 0) {
    console.log("seu numero é zero");
} else if (numero1 > 0) {
    console.log("seu numero é positivo");
} else {
    console.log("seu numero é negativo");
}

// Tabuada - Exercicio 4

function tabuada () {
    let numero2 = prompt("Qual numero voce quer a tabuada?:");
    numero2 = (numero2);
    for (let i = 1; i < 11; i++) {
        let total = numero2 * i;
        console.log(numero2 + " x " + i + " = " + total);
    }
}

tabuada();

function calculadora (x, y, operacao) {
        if (operacao === "soma") {
            return x + y;
        }
        if (operacao === "subtracao") {
            return x - y;
        }
        if (operacao === "divisao") {
            return x / y;
        }
        if (operacao === "multiplicacao") {
            return x * y;
        } else {
            return "Operação Invalida";
        }
}
console.log (calculadora(2, 5, "soma"));
console.log (calculadora(2, 5, "subtracao"));
console.log (calculadora(2, 5, "divisao"));
console.log (calculadora(2, 5, "multiplicacao"));
console.log (calculadora(2, 5, "batata"));










// Funcao Simples

// function exibirboasvindas () {
//     return console.log ("Olá, seja bem-vindo!");
// }
// exibirboasvindas();

// // Função com Parâmetros
// function soma(a,b,c) {
//     const total = a + b + c;
//     return console.log("Total soma:", total);
// }

// soma(10,20,30);

// // Função Anonima
// const multiplicar = function(x,y) {
//     return console.log("Resultado", x * y);
// }

// multiplicar (3,5);

// // Função Arrow Function
// const dividir = (a, b) => a / b;
// console.log("Divisao", dividir(10,2));

// // Função de Callback
// function inicialziarProjeto () {
//     exibirboasvindas();
//     soma(40,50,60);
//     dividir(20,2);
//     multiplicar(10,6);
    
// }

// inicialziarProjeto();
// Faça um programa para calcular o valor de uma viagem. 

// Você terá 3 variáveis. Sendo elas: 1- Preço do combustível; 2- Gasto médio de combustível do carro por KM; 3- Distância em KM de viagem.

// Imprima no console o valor que será gasto para realizar esta viagem.

const precoCombustivel = 5.79;
const gastoMedioKm = 10;
const kmViagem = 100;

const resultado = kmViagem / gastoMedioKm * precoCombustivel;

console.log(resultado.toFixed(2));
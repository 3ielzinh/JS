/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustível que esá no seu carro;
    4 - O gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.79;
const gastoMedioEtanol = 10;
const precoGasolina = 6.66;
const gastoMedioGasolina = 10;
const distanciaKM = 100;
const tipoCombustivel = 'gasolina'

if(tipoCombustivel === 'etanol') {
    console.log(distanciaKM / gastoMedioEtanol * precoEtanol);
}   else {
    console.log(distanciaKM / gastoMedioGasolina * precoGasolina);
}

/*
1 - Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado. Crie um método que dado a quantidade de quilómetros e o preço do combusível nos dê o valor gasto em reais para realizar o percuso.
*/

class Carro{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGastoDePercuso(distancia, precoCombustivel) {
        return distancia * this.gastoMedio * precoCombustivel;
    }
}

const civic = new Carro('honda', 'prata', 1/10);


console.log(civic.calcularGastoDePercuso(70, 4).toFixed(2));
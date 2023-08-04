// function sayMyName(name) {
//     console.log('Your name is ' + name);
// }

// sayMyName('Gabriel');

// function quadrado(valor) {
//     return valor * valor;
// }

// const quadradoDeDez = quadrado(10);
// console.log(quadradoDeDez)

// function incrementarJuros(valor, percentualJuros) {
//     const valorDeAcrecimo = (percentualJuros / 100) * valor;
//     return valor + valorDeAcrecimo;
// }

// console.log(incrementarJuros(100, 11));

// // Organização

// function calcularJuros() {

// }

// function main() {
//     console.log('Programa principal');
//     calcularJuros();
// }

// main();


function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return `Seu IMC é de ${imc.toFixed(2)}, você está abaixo do peso.`;
    } else if (imc >=18.5 && imc <25) {
        return `Seu IMC é de ${imc.toFixed(2)}, você está com o peso normal.`;
    } else if (imc >=25 && imc <30) {
        return `Seu IMC é de ${imc.toFixed(2)}, você está acima do peso.`;
    } else if (imc >=30 && imc <40) {
        return `Seu IMC é de ${imc.toFixed(2)}, você está obeso.`;
    } else {
        return `Seu IMC é de ${imc.toFixed(2)}, você está com obsidade grave.`;
    }
}

// main
(function () {
    const peso = 130;
    const altura = 1.84;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();




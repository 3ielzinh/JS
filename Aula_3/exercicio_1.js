/*
1- Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcula e imprima a sua media e a sua classificação confome a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre.
*/ 

const notaUm = 5;
const notaDois = 5;
const notaTres = 5;

const resultado = (notaUm + notaDois + notaTres) / 3;

if (resultado < 5) {
    console.log(`Sua média final é ${resultado.toFixed(2)}, infelizmente você reprovou.`);
} else if (resultado >= 7) {
    console.log(`Sua média final é ${resultado.toFixed(2)}, parabéns você passou de semestre.`);
} else {
    console.log(`Sua média final é ${resultado.toFixed(2)}, infelizmente você está de recuperação.`);
};

if (resultado < 5) {
    console.log(`Sua média final é ${resultado.toFixed(2)}, você reprovou.`);
} else if (resultado >= 5 && resultado <= 7) {
    console.log(`Sua média final é ${resultado.toFixed(2)}, você está de recuperação.`);
} else {
    console.log(`Sua média final é ${resultado.toFixed(2)}, você passou de semestre.`);
};
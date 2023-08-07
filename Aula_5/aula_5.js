// const pessoa = {
//     nome: 'Gabriel Silva Jorge',
//     idade: 25,
//     descrever: function() {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
//     }
// }

// gabriel.descrever();

// gabriel.altura = 1.84;

// delete gabriel.idade;

// const atributo = 'idade';
// console.log(pessoa[atributo]);

// console.log(gabriel.nome);
// console.log(gabriel.idade);
// console.log(gabriel);


class Pessoa  {
    nome;
    idade;
    anoDeNasciomento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNasciomento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} eu nasci em ${this.anoDeNasciomento}.`);
    }
}

// const vitor = new Pessoa('Vitor', 20);
// const gabriel = new Pessoa('Gabriel', 24);

// vitor.descrever();
// gabriel.descrever();

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p1.nome} é mais novo que ${p2.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

const vitor = new Pessoa('Vitor', 20);
const gabriel = new Pessoa('Gabriel', 25);

compararPessoas(vitor, gabriel);
function verificaIdade(idade) {
    if(idade < 18) {
        console.log(`Você só tem ${idade} anos, você é menor de idade.`);
    } else {
        console.log(`Você tem ${idade} anos, você é maior de idade.`)
    }
}

verificaIdade(18);
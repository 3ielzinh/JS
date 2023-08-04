function aplicaDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicaJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}

const valorDoProduto = 100;
const formaPagamento = 3;

    if(formaPagamento === 1) {
        console.log(aplicaDesconto(valorDoProduto, 10));
    } else if(formaPagamento === 2) {
        console.log(aplicaDesconto(valorDoProduto, 15));
    } else if(formaPagamento === 3) {
        console.log(valorDoProduto);
    } else {
        console.log(aplicaJuros(valorDoProduto, 10));
    }
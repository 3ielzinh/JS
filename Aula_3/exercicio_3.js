/*
3- Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código de condições de pagamento:
    - À vista Débito, recebe 10% de desconto.
    - À vista no Dinheiro ou PIX, recebe 15% de desconto.
    - Em duas vezes, preço normal de etiqueta sem juros.
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

const valorProduto = 30;
const valorDebito = valorProduto * 0.9;
const valorDiPi = valorProduto * 0.85;
const valorDV = valorProduto;
const valorAcimaDV = valorProduto * 1.10;
const opcaoPagamento = '';

if (opcaoPagamento === 'Débito') {
    console.log(`O preço do produto será de R$ ${valorDebito}`);
} else if (opcaoPagamento === 'Dinheiro/Pix') {
    console.log(`O preço do produto será de R$ ${valorDiPi}`);
} else if (opcaoPagamento === 'Duas vezes') {
    console.log(`O preço do produto será de R$ ${valorDV}`);
} else {
    console.log(`O preço do produto será de R$ ${valorAcimaDV}`);
};


const valorDoProduto = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
    console.log(valorDoProduto - (valorDoProduto * 0.1));
} else if (formaPagamento === 2 ) {
    console.log(valorDoProduto - (valorDoProduto * 0.15));
} else if (formaPagamento === 3) {
    console.log(valorDoProduto);
} else {
    console.log(valorDoProduto + (valorDoProduto * 0.1));
}

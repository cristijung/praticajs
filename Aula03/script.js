//js
//Samanta é consumidora assídua de uma loja de departamentos,
//no dia de hoje ela abusou um pouco nos seus gastos em compras para ela e seu irmão.
//Crie um programa que liste os produtos que ela comprou e o quanto ela gastou.
//Use as informações contidas na tabela abaixo e, mas abaixo, você encontrará um modelo de saída do programa.

const produtos = [
  { nome: 'perfume', preco: 1236.99 },
  { nome: 'brinco', preco: 134.28 },
  { nome: 'gravata', preco: 189.99 },
  { nome: 'sapato', preco: 899.99 },
  { nome: 'casaco', preco: 2568.78 },
  { nome: 'terno', preco: 3566.99 },
  { nome: 'vestido', preco: 4896.99 },
];

const listarProdutos = (listaDeProdutos) => {
  let total = 0;
  for (let produto of listaDeProdutos) {
    total += produto.preco;
    console.log(`Nome: ${produto.nome}, Preço: R$ ${produto.preco}`);
  }
  console.log(`Total: R$ ${total}`);
};

listarProdutos(produtos);

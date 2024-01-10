//Braga é estudante de química que tem interesse por programação.
//Ele entende que a programação pode ajudá-lo em suas pesquisas e, assim como qualquer
//estudante, resolveu fazer alguns testes. O estudante criou um programa que pergunta a
//quantidade de carbono de duas substâncias. Para a segunda substância, ele fará um ajuste somando
//o número 2 com o valor lido. Depois de feito o ajuste, o programa compara se a quantidade de carbono
//da primeira substância é igual ao do segundo e avisa ao usuário se forem iguais.

const elementos = [
  {
    nome: 'elemento01',
    quantidadeCarbono: 3,
  },
  {
    nome: 'elemento02',
    quantidadeCarbono: 1,
  },
  {
    nome: 'elemento03',
    quantidadeCarbono: 4,
  },
  {
    nome: 'elemento04',
    quantidadeCarbono: 3,
  },
];

for (let index = 0; index < elementos.length - 1; index += 1) {
  if (
    elementos[index].quantidadeCarbono ===
    elementos[index + 1].quantidadeCarbono + 2
  ) {
    console.log('Quantidade de carbono iguais');
  }
}

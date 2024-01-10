//Você foi designado para escrever um programa que encontre todos os números primos em um intervalo específico.
//Para isso, você deve implementar o famoso "Crivo de Eratóstenes".
//O "Crivo de Eratóstenes" é um algoritmo antigo e eficiente para encontrar números primos em um intervalo dado.
//A ideia é marcar todos os múltiplos de cada número primo encontrado até o limite dado, identificando assim todos
//os números não primos e, consequentemente, os números primos restantes.
//Seu programa deve conter uma função chamada encontrarPrimosAteN, que recebe como parâmetro um número inteiro positivo "n" (n > 1) representando o limite superior do intervalo. A função deve retornar um array contendo todos os números primos encontrados até o número "n", inclusive.
//Para isso, você deve cumprir as seguintes especificações do programa:
// - Inicialize um array de booleanos chamado "numeros" com "n + 1" elementos, todos inicialmente marcados como "true". O índice i representa o número i, e o valor em cada índice indica se o número é primo (true) ou não (false).
// - Defina os números 0 e 1 como não primos (false), pois não são considerados primos.
// - Comece o Crivo de Eratóstenes com um loop "for" que percorra todos os números de 2 até a raiz quadrada de "n". O loop deve verificar se o número atual é primo (ou seja, não foi marcado como não primo) e, caso seja, marcar seus múltiplos como não primos no array "numeros".
// - Finalmente, crie um array com os números primos encontrados e retorne-o como resultado da função.
// - Você deve implementar o algoritmo do Crivo de Eratóstenes usando laços de repetição. Não é permitido utilizar métodos prontos de busca de números primos ou quaisquer outras bibliotecas externas.

function isPrime(num) {
    let count = 0;

    for (let i = 1; i <= num && count <= 2; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    return count ===2;
}
console.log(isPrime(100));

(function crivo(num){

    let array = new Array(num).fill(false);

    for(let index in array){
        const isPrime = isPrime(index);
        
    console.log(array);
})(100);
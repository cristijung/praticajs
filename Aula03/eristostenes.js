function encontrarPrimosAteN(n) {
    // array
    let numeros = new Array(n + 1).fill(true);  
    // definindo os q não são primos
    numeros[0] = numeros[1] = false;
  
    // executa o crivo
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (numeros[i]) {
        // marcando os primos
        for (let j = i * i; j <= n; j += i) {
          numeros[j] = false;
        }
      }
    }
  
    // criando o array
    let primos = [];
    for (let i = 2; i <= n; i++) {
      if (numeros[i]) {
        primos.push(i);
      }
    }
  
    return primos;
  }  
 
  let limiteSuperior = 30;
  let primosEncontrados = encontrarPrimosAteN(limiteSuperior);  
  console.log(`Números primos até ${limiteSuperior}: ${primosEncontrados}`);
  
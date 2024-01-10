//Faça um algoritmo que imprima no console os valores como se fosse um
//relógio durante 1 minuto, ou seja que fique exibindo a hora, os minutos e os segundos em tempo real;

function printaMinutos() {
  let seconds = 0;
  const intervalo = setInterval(() => {
    const data = new Date();
    seconds++;
    console.log("Horario atual = " +data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());
    if (seconds == 60) {
      clearInterval(intervalo);
    }
  }, 1000);
}

printaMinutos();
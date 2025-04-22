
  function calcularTempo() {
    let distanciaKm = Number(prompt("Digite a distancia em km/h: ")) 

// Como estava em duvida para ajustar para números inteiros, descobri o math.floor enquanto pesquisava
// Foi a maneira mais facil que descobri pois peguei como exemplo um exercicio do beecrow que fizemos
// no portugol


    let tempo = distanciaKm * 60
    let ano = Math.floor(tempo / 31104000)
    let restoAno = tempo % 31104000
    let mes = Math.floor(restoAno / 2592000)
    let restoMes = restoAno % 2592000
    let dias = Math.floor(restoMes / 86400)
    let restoDia = restoMes % 86400
    let horas = Math.floor(restoDia / 3600)
    let restoHora = restoDia % 3600
    let minutos = Math.floor(restoHora / 60)    
    let segundos = Math.floor(restoHora % 60)



    console.log("O tempo da viagem é " + ano," Anos "+ mes ," Meses "+ dias ," Dias " + "(" + horas,":"+ minutos,":"+ segundos ,")" +" Horas")
  }
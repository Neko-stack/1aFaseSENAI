programa {
  funcao inicio() {
    real numeroUm, numeroDois, media
    real peso1 = 3.5, peso2 = 7.5, peso, mediaFinal
    

    
    escreva("Digite o primeiro numero: ")
    leia(numeroUm)

    escreva("Digite o segundo numero: ")
    leia(numeroDois)

    media = (numeroUm * peso1) + (numeroDois * peso2)
    peso = peso1 + peso2
    mediaFinal = media / peso


    escreva("MEDIA =  ", mediaFinal)
    


  }
}

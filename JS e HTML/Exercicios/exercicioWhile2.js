function sla(){

let numerodigitado = Number(prompt("Digite o numero"))
let numerodividido = numerodigitado
let digito = 0
while(numerodividido >= 0){
    numerodividido = numerodividido / 10
    console.log(numerodividido)
    alert("Digito: " + digito + " Dividido " + numerodividido)

    digito++
}
 }


 function sla2(){
    let numerodigitado = Number(prompt("Digite o numero"))
    let digito = 0
    let contador = 0

    while(contador < String(numerodigitado).length){ 
    digito++
    contador++
     }
     alert("Digitos: "+ digito)
 }

 function sla3(){
    let contador = 1
    let somatorio = 0
    while(contador <= 20){ 
    let resto = contador % 2
    if(contador === 0){
        alert(`O numero ${contador} é par e o somatorio é ${somatorio}`)
    } }
    contador++
     

    alert("A soma dos numero pares de 1 a 20 é: "+ somatorio)

 }

 function sla4(){
    let numero = Number(prompt("Digite o numero"))
    let contador = 1
    let fatorial = numero

    while(contador < numero){
        let fatorial = fatorial * (numero - contador)
        contador++
    }
    alert("O fatorial de "+ numero + " é: "+ fatorial)
 }

 function sla5(){
    let numerSecreto = 120
    let numeroUsuario = 0

    while(numerSecreto !== numeroUsuario){
        numeroUsuario = Number(prompt("Digite um número: "))
        if(numeroUsuario === numerSecreto){
            alert("Parabéns, você acertou!!")
        }else if(numeroUsuario < numerSecreto){
            alert("O número que você digitou é menor")
        }else if(numeroUsuario > numerSecreto){
            alert("O número que você digitou é maior")
        }else{
            alert("Erro")
        }

 }
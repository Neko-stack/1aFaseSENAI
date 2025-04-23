
function exercicio1(){
    let nome = prompt("Digite seu nome: ")

    alert(`Olá, ${nome}! Seja bemv indo!`)
}

function exercicio2(){
    let num1 = Number(prompt("Digite o primeiro número: "))
    let num2 = Number(prompt("Digite o segundo número: "))

    soma = num1 + num2

    alert(`A soma dos número é ${soma}`)


}
function exercicio3(){
    let temperatura = prompt("Digite a temperatura em Celsius: ")

    let conversão = (temperatura * 9/5 + 32)

    alert(`A temperatura em Fahrenheit é ${conversão}`)



}

function exercicio4(){
    let number = prompt("Digite um número: ")

    if(number % 2 === 0){
        alert(`O número ${number} é par!`)
    }else{
        alert(`O número ${number} é impar!`)
    }




}
function exercicio5(){
    let num1 = Number(prompt("Digite a primeira nota: "))
    let num2 = Number(prompt("Digite a segunda nota: "))
    let num3 = Number(prompt("Digite a terceira nota: "))


    soma = (num1 + num2 + num3) / 3

    alert(`A média das notas é ${soma}`)




}

function exercicio6(){
    let peso = prompt("Digite seu peso: ")
    let altura = prompt("Digite sua altura: ")

    let imc = peso / (altura^2)


    if(imc <= 18,5){
        alert(`Seu IMC é ${imc}; Abaixo do peso`)
    }else if(imc >= 18,5 || imc <= 24,9){
        alert(`Seu IMC é ${imc}; Peso nomal`)
    }else if(imc >= 25 || imc <= 29,9){
        alert(`Seu IMC é ${imc}; Sobrepeso`)
    }else if(imc >= 30){
        alert(`Seu IMC é ${imc}; AObesidade`)
    }




    
}
function exercicio7(){

}

function exercicio8(){
    
}
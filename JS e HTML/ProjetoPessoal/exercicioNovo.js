function exercicio1(){
const idade = prompt("Digite sua idade: ")
const carteiraM = prompt("Possui carteira de motorista?")

if(idade >= 18 && carteiraM === "sim"){
    alert("Pode dirigir")
}else{
    alert("Não pode dirigir")
}
}

function exercicio2(){
const number = Number(prompt("Digite um número: "))
if(number % 2 === 0){
    alert(`${number} é par`)
}else{
    alert(`${number} é impar`)
}

}

function exercicio3(){
const user = prompt("Digite seu usuario: ")
const senha = prompt("Digite sua senha: ")

if(user === "admin" || senha === "1234"){
    alert("Acesso permitido")
}else{
    alert("Acesso negado")
}
}

function exercicio4(){
const num1 = Math.floor(Math.random() * 10) //ver
const num2 = Math.floor(Math.random() * 10)

num1 = num1 * (-1)

alert("num1: "+ num1+  " num2: "+ num2)

if(num1 >= 0 && num2 < 0 || num1 < 0 && num2 >= 0){
    alert("Valores válidos")
}else{
    alert("erro")
}

}

function exercicio5(){
const nota =Math.floor(Math.random() * 10)
alert(nota)
if(nota > 6 && nota <= 10){
    alert("Aprovado")
}else{
    alert("Reprovado")
}

 }

 function exercicio6(){
    const nota =Math.floor(Math.random()* 200)
    alert(nota)
    if(nota >= 1 && nota <= 100){
        alert("Válido")
    }else{
        alert("Número inválido")
    }
    }
    
    
function exercicio7(){
    const idade = prompt("digite sua idade: ")
    const school = prompt("É estudante: ")

    if(idade < 18 || school === "sim"){
        alert("Meia entrada")
    }else{
        alert("erro")
    }
    }
    
function exercicio8(){  
    const user = prompt("Aceitou os termos?")
    const email = prompt("Confirmou o emai?")
    if(user === "sim" && email === "sim"){
        alert("Cadastro completo")
    }else{
        alert("Cadastro inválido")
    }

    }
    
function exercicio9(){
    const altura = prompt("Digite sua altura: ")
    const peso = prompt("Digite seu peso: ")

    if(altura > 1.60 && peso >=50 && peso <=90){
        alert("apto")
    }else{
        alert("Não apto")
    }
    }
    
function exercicio10(){
    const idade = Number(prompt("Digite sua idade: "))
    const termo = prompt("Aceitou os termos? ")

    if(idade < 18 || termo === "nao"){
        alert("Acesso negado")
    }else{ 
        alert("erro")
    }



}
    
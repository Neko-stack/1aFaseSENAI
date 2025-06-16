function exercicio1(){
let contador = 1
while(contador <= 20){
let resto = contador % 2
if(resto === 0){
    alert(`${contador}`)
}else{

}
contador++ 
}
}

function exercicio2(){
let contador = 1
while(contador <= 20){
let resto = contador % 2
if(resto === 0){
    
}else{
    alert(`${contador}`)
}
contador++ 
}
}

function exercicio3(){ //arrumar
    let contador = 1
   
    while(contador <= 5){ 
   
    let frase = "Olá mundo!"
    alert(`${frase}`)
    contador++
    }
    
}

function exercicio4(){
    let contador = 1
while(contador <= 50){
let resto = contador % 5
if(resto === 0){
    alert(`${contador}`)
}else{

}
contador++ 
} 
}

function exercicio5(){
    let contador = 100
    while(contador >= 0){
    alert(contador)
    contador-= 10
    }
    
 } 

  
function exercicio6(){
    let contador = 1
    while(contador <= 30){
    let resto = contador % 3
    if(resto === 0){
        alert(`${contador}`)
    }else{
    
    }
    contador++ 
    } 
}

function exercicio7(){
let contador = 1
while(contador <= 10){ 
let num1 = contador ** 2
alert(num1)
contador++
 }

}

function exercicio8(){
    let contador = 1
while(contador <= 10){ 
let num1 = contador ** 3
alert(num1)
contador++
}
 }

function exercicio9(){
    let contador = 1
    while(contador <= 15){
        let resto = contador % 2
        if(resto === 0){
            alert(`O número ${contador} é par`)
        }else{
            alert(`O número ${contador} é impar`)
        }
        contador++ 
    }
}

function exercicio10(){
    let contador = 1
    while(contador <= 100){
    let resto = contador % 4
    if(resto === 0){
        alert(`${contador}`)
    }else{
    
    }
    contador++ 
    } 
}

function exercicio11(){
    let contador = 1 
    while(contador <= 20){ 
    alert("Número: " + contador)
    contador++
 }
}

function exercicio12(){
    let contador = 1 
    while(contador <= 20){ 
    if(contador % 3 === 0){
    alert("Fizz")
    }else{ 
    alert(contador)
    }
    contador++
     }
}

function exercicio13(){
    let contador = 1 
    while(contador <= 20){ 
    if(contador % 5 === 0){
    alert("Buzz")
    }else{ 
    alert(contador)
    }
    contador++
     }
}
//FASE MEDIO
function exercicio14(){
    
}

function exercicio15(){
    let numero = 5
    let contador = 1
    let fatorial = numero

    while(contador < numero){
        fatorial = fatorial * (numero - contador)
        contador++
    }
    alert("O fatorial de "+ numero + " é: " + fatorial)
}

function exercicio16(){
    let contador = 1
    while(contador <= 50){
    let resto = contador % 2
    if(resto === 0){
        alert(`${contador} é par`)
    }else{
    
    }
    contador++ 
    } 
}

function exercicio17(){
    let contador = 1
    while(contador <= 100){
    let resto = contador % 6
    if(resto === 0){
        alert(`${contador} é multiplo de 6`)
    }else{
       
    }
    contador++
}
 }

function exercicio18(){
    let contador = 1
    while(contador <= 30){
    let resto = contador % 4
    if(resto !== 0){
        alert(`${contador}`)
    }else{
       
    }
    contador++
}
}

function exercicio19(){

}

function exercicio20(){
    let senha = "12345"
    let tentativas = 1
    let acertou = false

    while(tentativas <= 3 && acertou === false){
        let tentativaSenha = prompt("Digite a senha: ")
        if(tentativaSenha === senha){
            alert("Logou!")
            acertou = true
        }else{
        let tentativasRestantes = 3 - tentativas
        alert(`Você errou, tem mais ${tentativasRestantes} tentativas.`)

        }
        tentativas++
    }
}

function exercicio21(){
    let contador = 1
    
    while(contador <= 50){ 
    alert(contador)

    if(contador === 30){
        break
    }
    contador++
   
}
 }
   


function exercicio22(){
    let contador = 0
    
    while(contador <= 100){ 

    if(contador === 50){
        alert("ESPECIAL")
    }else{
        alert(contador)
    }
    contador+= 5
   
}
}

function exercicio23(){
let contador = 10

while(contador <= 10){
    alert(contador)
    if(contador === 0){
        alert("Lançamento")
        break
    }
    contador--
}
}

function exercicio24(){
    let contador = 1
    while(contador <= 30){
    let resto = contador % 7
    if(resto === 0){
        alert(`Pulando`)
    }else{
        alert(contador)
       
    }
    contador++
}
}

function exercicio25(){
    let contador = 1
    while(contador <= 20){
    let resto = contador % 2
    let resto2 = contador % 3
    if(resto === 0 && resto2 === 0){
        alert(`Especial`)
    }else{
        alert(contador)
       
    }
    contador++
}
}

function exercicio26(){

}

function exercicio27(){

}

function exercicio28(){

}

function exercicio29(){

}

function exercicio30(){

}
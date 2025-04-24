
function exercicio1(){
  let letras = {
    'a': '@',
    'e': '#',
    'i': '!',
    'o': '$',
    'u': '*',
    'A': '@',
    'E': '#',
    'I': '!',
    'O': '$',
    'U': '*'

  };

  let resultado = ''


}

function exercicio3(){
  
let nome = prompt("Digite seu nome")

alert(`${nome}, o velocista lento`)

}
function exercicio4(){
let signo = prompt("Digite seu signo")

if(signo === "aquario"){
    alert("Verdadeiro")
}else if(signo === "aries"){
    alert("Corajoso")
}else if(signo === "touro"){
    alert("Resistente")
}else if(signo === "gemeos  "){
    alert("Criativo")
}else if(signo === "cancer"){
    alert("Bondoso")
}else if(signo === "leao"){
    alert("Destemido")
}else if(signo === "virgem"){
    alert("Zeloso")
}else if(signo === "libra"){
    alert("justo")
}else if(signo === "escorpiao"){
    alert("leais")
}else if(signo === "sagitario"){
    alert("aventureiro")
}else if(signo === "capricornio"){
    alert("protetor")
}else if(signo === "peixes"){
    alert("caridoso")
}


}

function exercicio10(){
    let disputa = prompt("Escolha entre impar ou par: ")
    let num1 = Number(prompt("Escolha um número: "))
    let numeroAleatorio = Math.floor(Math.random() * 100);

    alert(`Você escolheu ${num1} e o computador escolheu ${numeroAleatorio}`)

    let soma = num1 + numeroAleatorio

    if(disputa === "par" && soma % 2 === 0){
        alert(`O número ${soma} é par, você ganhou!!`)
    }else if(disputa === "par" && soma % 2 !== 0){
        alert(`O número ${soma} é impar, você perdeu!!`)
    }else if(disputa === "impar" && soma % 2 !== 0)
        alert(`O número ${soma} é impar, você ganhou!!`)
    else{
        alert(`O número ${soma} é par, você perdeu!!`)
    
  
}
}
function exercicio14(){
   




}

function exercicio15(){
   



    
}
function exercicio18(){

}

function exercicio20(){
  

}
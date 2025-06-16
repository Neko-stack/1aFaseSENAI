function taboada1(){ 
let multiplicador = 1
while(multiplicador <= 10) {
    let multiplicando = 1
    while(multiplicando <= 10){
        let resultado = multiplicador * multiplicando
        alert(`taboada do ${multiplicador} multiplicada por ${multiplicando}\nResultado: ${resultado}`)
        multiplicando++
    }
    multiplicador++
}
}

function taboada2(){
    let contador = 1
    while(contador <= 10){
        let resto = contador % 2
        if(resto === 0){
            alert(`O número ${contador} é par`)
        }else{
            alert(`O número ${contador} é impar`)
        }
        contador++ 
    }
    
}

function taboada3(){
    let senha = "12345"
    let tentativas = 1
    let acertou = false
    while(tentativas <= 3 && acertou === false){
        let tentativasenha = prompt("Digite sua senha: ")
        if(senha === tentativasenha){
            alert("Senha correta, usuário logado!")
            acertou = true
        }else{
            let tentativasobra = 3 - tentativas
            alert("Seha incorreta, você tem mais " + tentativasobra +" tentativas")
        }
        tentativas++
       
    }
    if(acertou === false){
        alert("Conta bloqueada")
    }else{
        alert("Você se conectou!")
    }
}
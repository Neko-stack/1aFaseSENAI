
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
   let contador = 0;

    let botaoClique = document.getElementById('botaoClique')
    let botaoResultado = document.getElementById('botaoResultado')
    let resultadoBotao = document.getElementById('resultadoBotao')


    botaoClique.onclick = () => contador++;

    botaoResultado.onclick = () => {
        alert = `Você clicou ${contador} vezes!`
    }

}

function exercicio15(){
   
    let num1 = Number(prompt("Escolha um número: "))
    let numeroAleatorio = Math.floor(Math.random() * 100);

    alert(`Você escolheu ${num1} e o computador escolheu ${numeroAleatorio}`)

    if(num1 === numeroAleatorio){
        alert("Parabéns, você acertou!")
    }else{
        alert("Tente novamente")
    }


    
}
function exercicio18(){
    let gerar = document.querySelector('#gerar');

    gerar.onclick = () => {
       // let tamanhoSenha = document.querySelector('#tamanhoSenha').value;
        let tamanhoSenha = prompt("Digite o tamanho da senha")
        let caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+'
        let senhaGerada = ' '

        for(let i = 0; i < tamanhoSenha; i++){
           let randomIndex = Math.floor(Math.random() * caracteres.length)
           senhaGerada += caracteres[randomIndex]
        }


        alert(`Senha gerada: ${senhaGerada}`)
    }


}

function exercicio20(){







    /*
    const palavras = ["PROGRAMAR", "JAVASCRIPT", "COMPUTADOR", "DESENVOLVER", "ALGORITMO", "INTERNET"];
    const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    let letrasAcertadas = [];
    let tentativasRestantes = 6;
  
    while (tentativasRestantes > 0) {
      
      let exibicao = "";
      for (let letra of palavraSecreta) {
        exibicao += (letrasAcertadas.includes(letra) ? letra : "_") + " ";
      }
  
      
      if (!exibicao.includes("_")) {
        alert(`Parabéns! Você acertou a palavra: ${palavraSecreta}`);
        return;
      }
  
      let chute = prompt(`Palavra: ${exibicao.trim()}\nTentativas restantes: ${tentativasRestantes}\n\nDigite uma letra:`);
  
      if (!chute || chute.length !== 1) {
        alert("Digite apenas UMA letra!");
        continue;
      }
  
      chute = chute.toUpperCase();
  
      if (palavraSecreta.includes(chute)) {
        if (!letrasAcertadas.includes(chute)) {
          letrasAcertadas.push(chute);
          alert(`Acertou! A letra ${chute} está na palavra!`);
        } else {
          alert(`Você já acertou a letra ${chute}!`);
        }
      } else {
        tentativasRestantes--;
        alert(`Errou! A letra ${chute} não está na palavra.`);
      }
    }
  
    alert(`Você perdeu! A palavra era: ${palavraSecreta}`);
*/

    
}

function exercicio22(){
  

}

function exercicio30(){
  

}

function exercicio32(){
  

}

function exercicio34(){
  

}

function exercicio41(){
  

}
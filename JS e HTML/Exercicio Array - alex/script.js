const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];
// EXERCICIOS COM NUMEROS 

function exercicio1Numero(){ 
let numeroMaiorDez = numeros.filter(numero => numero >= 10)

console.log(numeroMaiorDez)
}

function exercicio2Numero(){ 
let numeroDobrado = numeros.map(Dobrado => Dobrado * 2)

console.log(numeroDobrado)
}

function exercicio3Numero(){ 
let numeroSoma = numeros.reduce((num1,num2) => num1 + num2, 0)

console.log(numeroSoma)
}

function exercicio4Numero(){ 
let maiorNumero = Math.max(...numeros)

console.log(maiorNumero)
}

function exercicio5Numero(){ 
let maiorNumero = Math.min(...numeros)

console.log(maiorNumero)
}

function exercicio6Numero(){ 
let ordemCrescente = numeros.sort((a,b)=> a - b)
console.log(ordemCrescente)
}


function exercicio7Numero(){ 
let numerosImpares = numeros.filter(numer => numer % 2 !== 0)


console.log(numerosImpares)
}

function exercicio8Numero(){ 
let verificarNumeros = numeros.every(numero => numero > 3)
let numerosMaiorTres = numeros.map(numero => numero > 3)
let mostrarNumeros = numeros.filter(numero => numero > 3)


console.log(verificarNumeros)
console.log(numerosMaiorTres)
console.log(mostrarNumeros)

}

function exercicio9Numero(){ 
let verificarNumeros = numeros.some(numero => numero > 100)
let numerosMaiorTres = numeros.map(numero => numero > 100)
let mostrarNumeros = numeros.filter(numero => numero > 100)



console.log(verificarNumeros)
console.log(numerosMaiorTres)
console.log(mostrarNumeros)

}

function exercicio10Numero(){ 
let soma = numeros.reduce((num1,num2) => num1 + num2, 0)
let media = soma/numeros.length
let quantiaNumeros = numeros.length

console.log(quantiaNumeros)
console.log(soma)
console.log(media)
}




//EXERCICIOS COM NOMES

const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];

function exercicio1Nome(){ 
nomes.sort()
console.log(nomes)
}

function exercicio2Nome(){ 
 let cincoLetras = nomes.filter(letras => letras.length > 5)

 console.log(cincoLetras)
}

function exercicio3Nome(){ 
let letrasMinusculas = nomes.map(letras => letras.toLowerCase())

console.log(letrasMinusculas)

}

function exercicio4Nome(){ 
    let letraB = nomes.filter((nome)=> nome[0] === "B")
    

    console.log(letraB)

}

function exercicio5Nome(){ 
    let nomeDaniel = nomes.find((nome)=> nome === "Daniel")
    

    console.log(nomeDaniel)
}

function exercicio6Nome(){ 
    let quantiaLetras = nomes.map(letras => letras.length)

    console.log(quantiaLetras)

}


function exercicio7Nome(){ 
let nomeVirgula = nomes.reduce((nome, nomes)=> nome + "," + nomes)

console.log(nomeVirgula)
}





//PRODUTOS

const produtos = [
 { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
 { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
 { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
 { nome: "Meias", preco: 9.9, categoria: "Roupas" },
 { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];


function exercicio1Produtos(){ 
    let eletronico = produtos.filter(produto => produto.categoria === "Eletrônicos")

    console.log(eletronico)
}

function exercicio2Produtos(){ 
 let nomes = produtos.map(produto => produto.nome)

 console.log(nomes)

}

function exercicio3Produtos(){ 

    let desconto = produtos.map(produto => produto.preco * 0.90)
    //  opa.preco=opa.preco * 0.90
    // return opa})

    console.log(desconto)

}

function exercicio4Produtos(){ 
    let valorTotal = produtos.reduce((soma, produto)=> soma + produto.preco, 0)

    console.log(valorTotal)


}

function exercicio5Produtos(){ 
    let maiorValor = Math.max(...produtos.map(produto => produto.preco))

    console.log(maiorValor)

}

function exercicio6Produtos(){ 
    let ordemBarato = produtos.sort((a,b)=> a.preco - b.preco)
        
    

    console.log(ordemBarato)

}

function exercicio7Produtos(){ 
    let eletronico = produtos.filter(produto => produto.categoria === "Eletrônicos")
    let roupa = produtos.filter(produto => produto.categoria === "Roupas")

    console.log(eletronico, roupa)

}

function exercicio8Produtos(){ 


}

function exercicio9Produtos(){ 
    let nomePreco = produtos.filter(produto => produto.nome && produto.preco )

    console.log(nomePreco)

}

function exercicio10Produtos(){ 
    let maior5 = produtos.every(produto => produto.preco > 5)

    console.log(maior5)



}



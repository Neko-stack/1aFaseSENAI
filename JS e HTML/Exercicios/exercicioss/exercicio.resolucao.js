let numero =[23,3,5,6,4,2,55,90,30,30,20,10]

let numerosPares = numero.filter(numero => numero % 2 === 0)

let numerosImpares = numero.filter(numero => numero % 2 !== 0)

console.log(numerosPares)


//15
let numero2 =[23,3,5,6,4,2,55,90,30,30,20,10]

let maiorNumero = math.max(...numero2   )
console.log(maiorNumero)
//16
let menorNumero = math.min(...numero2)
console.log(menorNumero)

//18
let array1 = ['teste', 'teste2']
let array2 = ['teste3', 'teste4']
let arrayJunto = [...array1, ...array2]

arrayJunto.concat(...array1)
arrayJunto.concat(...array2
)

console.log(arrayJunto)


//19

let palavras = ['casa', 'banana', 'abacate']
palavras.sort();
console.log(palavras)


// 20 
let numeros3 = [10, 20, 1000, 40, 50, 60]
let numeros3Desc = []
for(let i = 0;i < (numeros3.length * numeros3.length); i++) {
     } if( numeros3[i+1])
    
    


numeros3.sort((a,b)=> a-b)
console.log(numeros3)


//21
let nomes = ["gabriel", "flavia", "joao", "gabriel", "flavia", "joao"]
let removerDuplicados = new Set([...nomes])
let novoArray = [...removerDuplicados]
console.log(removerDuplicados)


let arraySemDuplicados = []
for(let i=0; i<valores.length; i++){
    if(!arraySemDuplicados.includes(valores[i])){
        arraySemDuplicados.push(valores[i])
    }
}
console.log(arraySemDuplicados)


//22
let valores2 = []
let arrayreferencias = []
let contador = 0
for(let i=0; i<valores.length; i++){
    if(valores2[i] == "Alex"){
        cotador++  
  }
    }

//23
let usuarios = ["gabriel", "flavia", "joao", "gabriel", "flavia", "joao"]
console.log(usuarios.join(', '))


//24
let frutas = ['abacaxi', 'maça', 'laranja', 'pera']
let frutasNovos = frutas.map(fruta => fruta === "banana" ? "maça" : fruta)


//25

console.log(frutas.indexOf('laranja'))



//26 
let mistos = ['asdasd', 'adddwww', 22, 12]
let strings = mistos.filter(valor =>typeof valor === 'string')
console.log(strings)


//27
let palavras3 = ['teste', 'sla', 'algo']
let palavrasMaiusculo = palavras3.map((palavra) => {
    let [primeira,...restante] = palavra
    let novapalavra = primeira[0].toUpperCase() 
    return novapalavra + restante.join('')
})
console.log(palavrasMaiusculo)


//28
let elemento = [3,4,5,6,7,8]
let saonumero = elemento.every((elemento) => typeof elemento === "number")

//29 
let elemento2 = [3,4,5,6,7,8, 100, 120]
let numeroMaior = elemento2.every((elemento) => typeof elemento > 100 )
console.log(numeroMaior)

//30 
let arrayArray = [3,2,1,3,[4,7,5,8,4], [3,8,45,123]] 
let arrays = arrayArray.flat()
console.log(arrays)


//32 
let numeross= [5,6,7,8]
function calcularMedia(array){
    let soma = array.reduce((acumulador, atual) => acumulador =+ atual ,0)
    console.log(soma)
    return soma/array.length
}
console.log(calcularMedia(numeross))


//34 
function rotacionar(array){
    array.unshift(array.pop())
}
console.log(rotacionar(notas))

//37
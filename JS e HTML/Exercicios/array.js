//12

function exercicio12(){
let numeros = [10, 20, 30, 40 ,50 ,60 , 70, 80 ,90 ,100]

let numerosDois = numeros.map(elemento=>elemento*2)
console.log(numeros)
console.log(numerosDois)

 }


 function teste(){ 
let soma = numeros.reduce(acumulado, valoratual => acumulado+valoratual, 0)
console.log(soma)
 }

function numero(){  
    let numeross = [10, 20, 30, 40 ,50 ,60 , 70, 80 ,90 ,100]

    let numerosInvertido = numeross.map((element, index)=>{ 
    let tamanhoArray = numeross.length - 1
    return numeross[tamanhoArray - index]
 })


 console.log(numerosInvertido)
 }


function teste23123(){ 
    let nomes2 = ["João", "Clara", "Jonas", "Carla", "Maria", "Alessandro", "Carlos", ]
let nomesvirgula = nomes2.reduce((acumulado, valoratual)=> acumulado+ "," + valoratual, "")

}

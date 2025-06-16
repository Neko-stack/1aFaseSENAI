function ecoMoedas(){

let nBrinquedo, moedas

nBrinquedo = Number(prompt("Digite a quantia de brinquedos que trouxe: "))


if(nBrinquedo >= 0 && nBrinquedo <= 3){
    moedas = nBrinquedo
}else{
    if(nBrinquedo > 3){
        moedas = 3
    }else{
        moedas = 0
    }
}

alert("Moedas recebidas: " + moedas)




}
/* if(nBrinquedo === "0"){
    alert("Você possui 0 moedas!!")
}else if(nBrinquedo === "1"){
    alert("Você possui 1 moeda!!")

}else if(nBrinquedo === "2"){
    alert("Você possui 2 moedas!!")

}else if(nBrinquedo === ""){
    alert("Nenhum número digitado, faça novamente!!")
}else{
    alert("Você possui 3 moedas!!")
}*/


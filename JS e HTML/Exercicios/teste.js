function sla(){
    let cont = 0
    while(cont <= 100 && cont <= 400){
        console.log(cont)
        soma = soma + cont

        console.log("Cont "+ cont)
        console.log("Soma "+ soma)


        cont++
    }
    console.log("Soma: "+ soma)
}
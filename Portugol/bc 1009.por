programa {
  funcao inicio() {
   inteiro salarioFixo
    real comissao = 0.15, valorComissao, salarioTotal, vendasEfetuadas
    


    escreva("Salário fixo: ")
    leia(salarioFixo)

    escreva("Vendas efetuadas ao final do mês: ")
    leia(vendasEfetuadas)

    valorComissao = vendasEfetuadas * comissao
    salarioTotal = salarioFixo + valorComissao

    escreva("Salário total: ", salarioTotal)
  

    



  }
}

let meuObjeto = {}
let meuObjeto2 = {nome: "João", idade: 22}


meuObjeto.nome = "Gabriel"
meuObjeto.idade = 21


let aluno = {nome: "Gabriel", function(){return `Ola meu nome é ${this.nome}`} }

let objeto = {nome: "ronda", "numero-chassi": 2345334}
objeto.nome = "Chivic"
objeto["numero-chassi"] = 1827312


let pessoa = {
    nome: "Gabriel",
    apresentar: function(){
        console.log(`Bem vindo ${this.nome}`)
    },
    editar: function(){
        let novoNome = prompt("Digite um novo nome")
        this.nome = novoNome
    }   
}


pessoa.map((pessoa)=>{ 
    let minhadiv = document.getElementById("pessoa")
    minhadiv.innerHTML += `<div class="pessoa">
                <p>${pessoa.nome}</p>`
            

})
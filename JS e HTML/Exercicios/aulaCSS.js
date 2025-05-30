// let nome, email, senha

let usuario = {
    nome: 'um',
    email: 'dois',
    senha: 'nuvem'
}

function cadastrar(){ 
    usuario.email = document.getElementById('inpCadEmail').value
    usuario.nome = document.getElementById('inpCadNome').value
    usuario.senha = document.getElementById('inpCadSenha').value
    alert("Cadastrado com sucesso!")

    console.log(usuario)
}

function logar(){
    let nome = document.getElementById('inpLogNome').value
    let senha = document.getElementById('inpLogSenha').value


    if(nome === usuario.nome && senha === usuario.senha){
        alert("Login efetuado")
        limparInput()
        mostrarProdutos()
    }else{
        alert("Login nao efetuado")
    }
}

function mostrarLogin(){
    esconderTodos()
    document.getElementById("login").style.display = "flex"
    
}

function mostrarCadastro(){
    esconderTodos()
    document.getElementById("cadastro").style.display = "flex"

}

function mostrarProdutos(){ 
    esconderTodos()
    document.getElementById("produtos").style.display = "flex"

}

function esconderTodos(){
    document.getElementById("cadastro").style.display = "none"
    document.getElementById("login").style.display = "none"
    document.getElementById("produtos").style.display = "none"
}

function limparInput(){
    document.getElementById("inpCadNome").value = ''
    document.getElementById("inpCadSenha").value = ''
    document.getElementById("inpCadEmail").value = ''

    document.getElementById("inpLogNome").value = ''
    document.getElementById("inpLogSenha").value = ''

    


}



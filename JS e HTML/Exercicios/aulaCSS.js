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
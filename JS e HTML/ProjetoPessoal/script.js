document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault()




const user = document.getElementById("username").value
const password = document.getElementById("password").value
const message = document.getElementById("message")

const user1 = "ADMIN"
const password1 = "SENHA"

if(user === user1 && password === password1){
    message.style.color = "green"
    message.textContent = "Login Efetuado"

    document.getElementById("loginForm").style.display = "none"
    document.getElementById("conteudo").style.display = "block"

    //login efetuado
}else{
    message.style.color = "red"
    message.textContent = "Usuário ou senha incorreto"
    //  erro
}
})

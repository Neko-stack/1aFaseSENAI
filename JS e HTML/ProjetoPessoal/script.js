document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault()




const user = document.getElementById("username").value
const password = document.getElementById("password").value
const message = document.getElementById("message")

const user1 = "admin"
const password1 = "1234"


if(user === user1 && password === password1){
    message.style.color = "green"
    message.textContent = "Login Efetuado"

    document.getElementById("loginForm").style.display = "none"
    document.getElementById("conteudo").style.display = "block"


const conteudo = `
<h2>Bem vindo ao site</h2>
<div>
<button onclick="showTab('home')">home</>button
<button onclick="showTab('profile')">profile</button>
<button onclick=showTab("settings")>settings</button>
</div>
<div id="tabContent" style="magin-top: 20px"></div>
`

const messageDiv = document.getElementById("messageDiv")
messageDiv.innerHTML = conteudo
messageDiv.style.display = "block"

showTab('home')

    //login efetuado
}else{
    message.style.color = "red"
    message.textContent = "Usuário ou senha incorreto"
    //  erro
}
})


function showTab(tabName){
    const tabContent = document.getElementById("tabContent")

    let content = ""
    if(tabName === "home"){
        content = "home"
    }else if(tabName === "profile"){
        content = "profile"
    }else if(tabName === "settings"){
        content = "config"
    }
    tabContent.innerHTML = content
}
const cliente = {
    nome: "",
    email: "",
    fone: ""
} 

function salvar(){
if(!validaDados()){
    return
}          

cliente.nome = document.getElementById("nome").value
cliente.email = document.getElementById("email").value
cliente.fone = document.getElementById("fone").value

const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(cliente)
} 

fetch("http://localhost:3000/clientes", options)
.then(data => data.json())
.then(cli => console.log(cli))

limpar()
}

function validaDados(){
var msg = document.getElementById("msgerro")
var inome = document.getElementById("nome")
if(inome.value == ""){
   msg.innerHTML = "Informe nome"
   inome.focus();
   return false
}
var iemail = document.getElementById("email")
if(iemail.value == ""){
   msg.innerHTML = "Informe email"
   iemail.focus();
   return false
}
var ifone = document.getElementById("fone")
if(ifone.value == ""){
   msg.innerHTML = "Informe fone"
   ifone.focus();
   return false
}
return true
}

function limpar(){
document.getElementById("nome").value = ""
document.getElementById("email").value = ""
document.getElementById("fone").value = "" 
}
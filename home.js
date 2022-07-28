function pesquisar() {
    var idpesquisa = document.getElementById("idcliente").value
    fetch(`http://localhost:3000/clientes/${idpesquisa}`)
        .then(data => data.json())
        .then(result => {
            document.getElementById("nome").value = result.nome
            document.getElementById("email").value = result.email
            document.getElementById("fone").value = result.fone
        })
}

function alterar() {
    const cliente = {
        nome: "",
        email: "",
        fone: ""
    }

    cliente.nome = document.getElementById("nome").value
    cliente.email = document.getElementById("email").value
    cliente.fone = document.getElementById("fone").value
    
    const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cliente)
    } 

    var idpesquisa = document.getElementById("idcliente").value
    fetch(`http://localhost:3000/clientes/${idpesquisa}`, options)
    .then(data => data.json())
    .then(cli => alert('Cliente alterado com sucesso'))
}

function excluir(){
  var idpesquisa = document.getElementById("idcliente").value
  fetch(`http://localhost:3000/clientes/${idpesquisa}`, { method: 'DELETE'})
    .then(data => data.json())
    .then(cli => alert('Cliente excluido com sucesso'))
}

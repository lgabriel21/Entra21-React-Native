function pesquisar(){
    fetch('http://localhost:3000/clientes')
    .then(data => data.json())
    .then(lista =>{
        var linha = ""
        for(let i = 0 ; i < lista.length; i++){
          linha += '<tr>'
          linha += `<td> ${lista[i].id} </td>`
          linha += `<td> ${lista[i].nome} </td>`
          linha += `<td> ${lista[i].email} </td>`
          linha += `<td> ${lista[i].fone} </td>`
          linha += `<td> <button onclick=excluir(${lista[i].id})>excluir</button> </td>`
          linha += `<td> <button onclick=selecionaItem(${lista[i].id})>alterar</button> </td>`
          linha += '</tr>'
        }
        document.getElementsByTagName("tbody")[0].innerHTML = linha
    } )   
}

function excluir(idcliente){
    fetch(`http://localhost:3000/clientes/${idcliente}`, { method: 'DELETE'})
    .then(data => data.json())
    .then(cli => window.location.reload())
}

function selecionaItem(item){
    document.getElementById("formAlterar").style.display = 'block'
    document.getElementById("idselecionado").value = item
    fetch(`http://localhost:3000/clientes/${item}`)
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

    var idselecionado = document.getElementById("idselecionado").value
    fetch(`http://localhost:3000/clientes/${idselecionado}`, options)
    .then(data => data.json())
    .then(cli => alert('Cliente alterado com sucesso'))
}
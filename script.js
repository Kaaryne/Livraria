var produtos = []
var totalPagar = 
var listaQuantidade = []


function adicionar1() {
    var quantidade = document.getElementById("quantidade1").value
    var total = quantidade * 10
    listaQuantidade.push(quantidade)
    produtos.push(total)
    console.log(total);
}

function adicionar2() {
    var quantidade = document.getElementById("quantidade2").value
    var total = quantidade * 20
    listaQuantidade.push(quantidade)
    produtos.push(total)
    console.log(total);
}

function adicionar3() {
    var quantidade = document.getElementById("quantidade3").value
    var total = quantidade * 30
    listaQuantidade.push(quantidade)
    produtos.push(total)
    console.log(total);
}

function adicionar4() {
    var quantidade = document.getElementById("quantidade4").value
    var total = quantidade * 40
    listaQuantidade.push(quantidade)
    produtos.push(total)
    console.log(total);
}

function adicionar5() {
    var quantidade = document.getElementById("quantidade5").value
    var total = quantidade * 50
    listaQuantidade.push(quantidade)
    produtos.push(total)
    console.log(total);
}
function adicionar6() {
    var quantidade = document.getElementById("quantidade6").value
    var total = quantidade * 60
    listaQuantidade.push(quantidade)
    produtos.push(total)
    console.log(total);
}

var totalPagar = 0

function carrinho() {
    
    for (let i = 0; i < produtos.length; i++) {
        totalPagar = totalPagar + parseInt(produtos[i]);
    }

    document.write(produtos + "<br>") ;
    document.write(totalPagar);
    document.write(listaQuantidade);
    
}


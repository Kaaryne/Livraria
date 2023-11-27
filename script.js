var produtos = []
var totalPagar = 


function Adicionar1() {
    var quantidade = document.getElementById("quantidade1").value
    var total = quantidade * 10
    produtos.push(total)
    console.log(total);
}

function Adicionar2() {
    var quantidade = document.getElementById("quantidade2").value
    var total = quantidade * 20

    produtos.push(total)
    console.log(total);
}

function Adicionar3() {
    var quantidade = document.getElementById("quantidade3").value
    var total = quantidade * 30
    produtos.push(total)
    console.log(total);
}

function Adicionar4() {
    var quantidade = document.getElementById("quantidade4").value
    var total = quantidade * 40
    produtos.push(total)
    console.log(total);
}

function Adicionar5() {
    var quantidade = document.getElementById("quantidade5").value
    var total = quantidade * 50
    produtos.push(total)
    console.log(total);
}
function Adicionar6() {
    var quantidade = document.getElementById("quantidade6").value
    var total = quantidade * 60
    produtos.push(total)
    console.log(total);
}

var totalPagar = 0

function carrinho() {
    
    for (let i = 0; i < produtos.length; i++) {
        totalPagar = totalPagar + parseInt(produtos[i]);
    }
    
}



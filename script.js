var nomeProdutos = ["livro1", "livro2", "livro3", "livro4", "livro5", "livro6"]
var listaQuantidade = []
var produtos = []
var totalPagar = 0


function add1() {
    var quantidade = document.getElementById("quantidade1").value
    var total = quantidade * 10

    if(quantidade == 0){
        listaQuantidade.push(0)
    }else{
        listaQuantidade.push(quantidade)
    }
    
    produtos.push(total);
    console.log(total);
}

function add2() {
    var quantidade = document.getElementById("quantidade2").value
    var total = quantidade * 20

    if(quantidade == 0){
        listaQuantidade.push(0)
    }else{
        listaQuantidade.push(quantidade)
    }

    produtos.push(total);
    console.log(total);
}

function add3() {
    var quantidade = document.getElementById("quantidade3").value
    var total = quantidade * 30

    if(quantidade == 0){
        listaQuantidade.push(0)
    }else{
        listaQuantidade.push(quantidade)
    }

    produtos.push(total);
    console.log(total);
}

function add4() {
    var quantidade = document.getElementById("quantidade4").value
    var total = quantidade * 40

    if(quantidade == 0){
        listaQuantidade.push(0)
    }else{
        listaQuantidade.push(quantidade)
    }

    produtos.push(total);
    console.log(total);
}

function add5() {
    var quantidade = document.getElementById("quantidade5").value
    var total = quantidade * 50

    if(quantidade == 0){
        listaQuantidade.push(0)
    }else{
        listaQuantidade.push(quantidade)
    }

    produtos.push(total);
    console.log(total);
}
function add6() {
    var quantidade = document.getElementById("quantidade6").value
    var total = quantidade * 60

    if(quantidade == 0){
        listaQuantidade.push(0)
    }else{
        listaQuantidade.push(quantidade)
    }

    produtos.push(total);
    console.log(total);
}

var totalPagar = 0

function carrinho() {
    
    for (let i = 0; i < produtos.length; i++) {
        totalPagar = totalPagar + parseInt(produtos[i]);
    }

    document.getElementById("idTotal").innerHTML = totalPagar;
    document.getElementById("pProdutos").innerHTML = produtos;
    document.getElementById("qProdutos").innerHTML = listaQuantidade;
}

function remover() {
    var remoProduto = prompt("Qual produto deseja remover?")
    var remoQuantidade = prompt("Quantos destes produtos deseja remover?")

    if (remoProduto = 1) {
        produtos[0] - (10 * remoQuantidade) == produtos[0]

        document.getElementById("idTotal").innerHTML = totalPagar;
        document.getElementById("pProdutos").innerHTML = produtos;
        document.getElementById("qProdutos").innerHTML = listaQuantidade;

    }

    if (remoProduto = 2) {
        produtos[1] - (20 * remoQuantidade) == produtos[1]

        document.getElementById("idTotal").innerHTML = totalPagar;
        document.getElementById("pProdutos").innerHTML = produtos;
        document.getElementById("qProdutos").innerHTML = listaQuantidade;

    }

    if (remoProduto = 3) {
        produtos[2] - (30 * remoQuantidade) == produtos[2]

        document.getElementById("idTotal").innerHTML = totalPagar;
        document.getElementById("pProdutos").innerHTML = produtos;
        document.getElementById("qProdutos").innerHTML = listaQuantidade;

    }

    if (remoProduto = 4) {
        produtos[3] - (40 * remoQuantidade) == produtos[3]

        document.getElementById("idTotal").innerHTML = totalPagar;
        document.getElementById("pProdutos").innerHTML = produtos;
        document.getElementById("qProdutos").innerHTML = listaQuantidade;

    }

    if (remoProduto = 5) {
        produtos[4] - (50 * remoQuantidade) == produtos[4]

        document.getElementById("idTotal").innerHTML = totalPagar;
        document.getElementById("pProdutos").innerHTML = produtos;
        document.getElementById("qProdutos").innerHTML = listaQuantidade;
    }

    if (remoProduto = 6) {
        produtos[5] - (60 * remoQuantidade) == produtos[5]

        document.getElementById("idTotal").innerHTML = totalPagar;
        document.getElementById("pProdutos").innerHTML = produtos;
        document.getElementById("qProdutos").innerHTML = listaQuantidade;
    }
}

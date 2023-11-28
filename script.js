var listaQuantidade = []
var produtos = []
var totalPagar = 
var nomeProdutos = [livro1, livro2, livro3, livro4, livro5, livro6]


function add1() {
    var quantidade = document.getElementById("quantidade1").value
    var total = quantidade * 10

    if(quantidade == 0){
        listaQuantidade.push(0)
    }else{
        listaQuantidade.push(quantidade)
    }
    
    produtos.push(total)
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

    produtos.push(total)
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

    produtos.push(total)
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

    produtos.push(total)
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

    produtos.push(total)
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

    produtos.push(total)
    console.log(total);
}

var totalPagar = 0

function carrinho() {
    
    for (let i = 0; i < produtos.length; i++) {
        totalPagar = totalPagar + parseInt(produtos[i]);
    }

    document.write(produtos + "<br>") ;
    document.write(totalPagar + "<br>");
    document.write(listaQuantidade);
    
}




var totalPagar = 0

function carrinho() {
    
    for (let i = 0; i < produtos.length; i++) {
        totalPagar = totalPagar + parseInt(produtos[i]);
    }

    document.write(produtos + "<br>") ;
    document.write(totalPagar + "<br>");
    document.write(listaQuantidade);
    
}



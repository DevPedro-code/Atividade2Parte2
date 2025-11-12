const produtosJSON = `{
"produtos": [
{"nome": "Mouse", "preco": 25.90},
{"nome": "Teclado", "preco": 89.90},
{"nome": "Monitor", "preco": 450.00},
{"nome": "Cabo USB", "preco": 15.00}
]
}`;

function nomeMaiorDe50(jsonStr){
    const obj = JSON.parse(jsonStr);
    return obj.produtos
    .filter(p => p.preco > 50)
    .map(p => p.nome);
}
console.log(nomeMaiorDe50(produtosJSON))

//retorno: ["teclado", "monitor"]
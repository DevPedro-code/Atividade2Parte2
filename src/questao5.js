const pedidosJSON = `{
"pedidos": [
{"id": 1, "cliente": "Fernanda", "total": 120.50, "status": "entregue"},
{"id": 2, "cliente": "Roberto", "total": 89.90, "status": "processando"},
{"id": 3, "cliente": "Carla", "total": 45.30, "status": "entregue"}
]
}`;

function resumoPedidos(jsonStr) {
    const pedidos = JSON.parse(jsonStr).pedidos;

    let entregues = 0, processando = 0, total = 0;

    for (let p of pedidos) {
        if (p.status === "entregue") entregues ++;
        if (p.status === "processando") processando ++;
        total = total + p.total;

    }

    return `${entregues} pedidos entregues, ${processando} em processamento. valor total:  ${total.toFixed(2).replace('.',',')}`;
}

console.log(resumoPedidos(pedidosJSON))

//Retornar: "2 pedidos entregues, 1 em processamento. valor total:  255,70"
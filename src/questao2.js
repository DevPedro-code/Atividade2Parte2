const jsonString = `{
"usuarios": [
{"nome": "Carlos", "email": "carlos@email.com"},
{"nome": "Maria", "email": "maria@email.com"},
{"nome": "João", "email": "joao@email.com"}
]
}`;

function extrairEmail(jsonStr) {
    const obj = JSON.parse(jsonStr);
    const emails = obj.usuarios.map(u => u.email);
    return emails.join(',');
}

console.log(extrairEmail(jsonString));

//retorno: "carlos@email.com,maria@email.com,joao@email.com"

const endereco = {
rua: "Av. Paulista",
numero: 1000,
cidade: "São Paulo",
cep: "01310-100"
};

function formatarEndereco(end) {
    return `${end.rua}, ${end.numero} - ${end.cidade} - CEP: ${end.cep}`;
}

console.log(formatarEndereco(endereco));

//Retornar "Av. Paulista, 1000 - São Paulo - CEP: 01310-100"

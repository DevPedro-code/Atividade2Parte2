const usuario = {
nome: "Ana Silva",
idade: 30,
habilidades: ["JavaScript", "React", "Node.js"],
ativo: true
};

const usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON);

const usuaRecuperado = JSON.parse(usuarioJSON);
console.log(usuaRecuperado)
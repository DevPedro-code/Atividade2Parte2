function parseJSONSafe(jsonstr) {
try{
    return JSON.parse(jsonstr);
}   catch (err) {

    return null;
    }
}

const jsonErrado = '{nome: "joão", "idade": 30}';

console.log(parseJSONSafe(jsonErrado))

//retornar: null